/**
 * ============================================================================
 * FREE FIRE MAX TOURNAMENT – SINGLE 96-SLOT REGISTRATION SYSTEM
 * Google Apps Script: UID Deduplication & Live Slot Availability API
 * ============================================================================
 * 
 * Features:
 * 1. LockService concurrency protection to safely handle simultaneous submissions.
 * 2. Strict UID Deduplication: Rejects any duplicate Free Fire MAX UID.
 * 3. Single 96-player registration capacity tracking.
 * 4. Automatic Google Form closure (setAcceptingResponses(false)) when 96
 *    valid players register.
 * 5. Public REST API (doGet) serving live slot telemetry to the tournament frontend.
 * 6. After registration concludes, organizer FFM Mukesh divides the 96 players
 *    into Match 1 (48 players) and Match 2 (48 players).
 * ============================================================================
 */

// Configuration - Replace with your actual Google Form ID
const SCRIPT_CONFIG = {
  REGISTRATION_FORM_ID: "REPLACE_WITH_BERMUDA_REGISTRATION_GOOGLE_FORM_ID",
  TOTAL_CAPACITY: 96,
  SHEET_NAME: "Bermuda_Registrations",
  // Backward compatibility if using Match1 / Match2 sheets:
  SHEET_NAME_MATCH_1: "Match1_Registrations",
  SHEET_NAME_MATCH_2: "Match2_Registrations",
  MAX_PLAYERS_PER_MATCH: 48
};

/**
 * Handle HTTP GET Requests (Public Slot Telemetry API for Tournament Website)
 */
function doGet(e) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  
  // Check for single unified sheet first, or fallback to 2 sheets
  const singleSheet = ss.getSheetByName(SCRIPT_CONFIG.SHEET_NAME);
  let totalRegistered = 55; // Default fallback
  let match1Registered = 34;
  let match2Registered = 21;

  if (singleSheet) {
    totalRegistered = getSheetAcceptedCount(singleSheet, SCRIPT_CONFIG.TOTAL_CAPACITY);
    match1Registered = Math.min(48, Math.floor(totalRegistered / 2));
    match2Registered = totalRegistered - match1Registered;
  } else {
    const match1Stats = getMatchStats(ss, SCRIPT_CONFIG.SHEET_NAME_MATCH_1);
    const match2Stats = getMatchStats(ss, SCRIPT_CONFIG.SHEET_NAME_MATCH_2);
    match1Registered = match1Stats.registered;
    match2Registered = match2Stats.registered;
    totalRegistered = match1Registered + match2Registered;
  }

  const payload = {
    status: "success",
    timestamp: new Date().toISOString(),
    totalCapacity: 96,
    totalRegistered: totalRegistered,
    totalAvailable: Math.max(0, 96 - totalRegistered),
    isFull: totalRegistered >= 96,
    matches: [
      {
        id: "match-01",
        matchNumber: 1,
        name: "MATCH 1 – BERMUDA SOLO",
        mode: "SOLO",
        max: 48,
        registered: match1Registered,
        available: Math.max(0, 48 - match1Registered),
        isFull: match1Registered >= 48
      },
      {
        id: "match-02",
        matchNumber: 2,
        name: "MATCH 2 – BERMUDA SOLO",
        mode: "SOLO",
        max: 48,
        registered: match2Registered,
        available: Math.max(0, 48 - match2Registered),
        isFull: match2Registered >= 48
      }
    ],
    maps: [
      {
        id: "map-01",
        name: "BERMUDA",
        status: "OPEN",
        max: 96,
        registered: totalRegistered,
        available: Math.max(0, 96 - totalRegistered),
        isFull: totalRegistered >= 96
      },
      { id: "map-02", name: "PURGATORY", status: "COMING_SOON", max: 48, registered: 0, available: 48, isFull: false },
      { id: "map-03", name: "KALAHARI", status: "COMING_SOON", max: 48, registered: 0, available: 48, isFull: false },
      { id: "map-04", name: "ALPINE", status: "COMING_SOON", max: 48, registered: 0, available: 48, isFull: false },
      { id: "map-05", name: "NEX TERRA", status: "COMING_SOON", max: 48, registered: 0, available: 48, isFull: false },
      { id: "map-06", name: "SOLARA", status: "COMING_SOON", max: 48, registered: 0, available: 48, isFull: false }
    ]
  };

  return ContentService.createTextOutput(JSON.stringify(payload))
    .setMimeType(ContentService.MimeType.JSON);
}

/**
 * Triggered automatically when Google Form is submitted.
 * Sets up a 30s Lock to prevent simultaneous collision.
 */
function onFormSubmit(e) {
  const lock = LockService.getScriptLock();
  
  try {
    lock.waitLock(30000);
  } catch (err) {
    Logger.log("Lock acquisition timeout: Simultaneous submissions throttled.");
    return;
  }

  try {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = e.range ? e.range.getSheet() : ss.getActiveSheet();
    const lastRow = sheet.getLastRow();
    
    // Form row format: [Timestamp, PlayerName, Phone/Discord, FF_UID, Status, Reason]
    const rowValues = sheet.getRange(lastRow, 1, 1, sheet.getLastColumn()).getValues()[0];
    const uid = String(rowValues[3] || "").trim();

    if (!uid) {
      sheet.getRange(lastRow, 5).setValue("REJECTED");
      sheet.getRange(lastRow, 6).setValue("Empty Free Fire UID");
      return;
    }

    // 1. UID Deduplication Check
    const acceptedUIDs = getExistingAcceptedUIDs(sheet, lastRow);
    if (acceptedUIDs.has(uid)) {
      sheet.getRange(lastRow, 5).setValue("REJECTED_DUPLICATE_UID");
      sheet.getRange(lastRow, 6).setValue("Free Fire UID already registered in tournament. One entry per player allowed.");
      Logger.log("Duplicate UID blocked: " + uid);
      return;
    }

    // 2. Capacity Check (Max 96)
    if (acceptedUIDs.size >= SCRIPT_CONFIG.TOTAL_CAPACITY) {
      sheet.getRange(lastRow, 5).setValue("REJECTED_ROSTER_FULL");
      sheet.getRange(lastRow, 6).setValue("Tournament roster reached maximum 96 capacity.");
      closeGoogleForm(SCRIPT_CONFIG.REGISTRATION_FORM_ID);
      return;
    }

    // 3. Mark Valid Submission as ACCEPTED
    sheet.getRange(lastRow, 5).setValue("ACCEPTED");
    sheet.getRange(lastRow, 6).setValue("Verified Tournament Registration Entry");

    // Auto-lock at 96 submissions
    if (acceptedUIDs.size + 1 >= SCRIPT_CONFIG.TOTAL_CAPACITY) {
      closeGoogleForm(SCRIPT_CONFIG.REGISTRATION_FORM_ID);
      Logger.log("Tournament reached 96 players! Registration Form locked.");
    }

  } catch (error) {
    Logger.log("Error in onFormSubmit: " + error.toString());
  } finally {
    lock.releaseLock();
  }
}

/**
 * Returns a Set of all currently ACCEPTED Free Fire MAX UIDs from a sheet
 */
function getExistingAcceptedUIDs(sheet, currentRowIndex) {
  const uids = new Set();
  if (!sheet) return uids;

  const lastRow = sheet.getLastRow();
  if (lastRow < 2) return uids;

  const data = sheet.getRange(2, 1, lastRow - 1, 6).getValues();
  for (let i = 0; i < data.length; i++) {
    const rowNum = i + 2;
    if (rowNum === currentRowIndex) continue;

    const rowUid = String(data[i][3] || "").trim();
    const rowStatus = String(data[i][4] || "").trim();

    if (rowUid && (rowStatus === "ACCEPTED" || rowStatus === "")) {
      uids.add(rowUid);
    }
  }
  return uids;
}

/**
 * Computes registered accepted player count for a sheet
 */
function getSheetAcceptedCount(sheet, maxLimit) {
  if (!sheet) return 0;
  const lastRow = sheet.getLastRow();
  if (lastRow < 2) return 0;

  let count = 0;
  const statusValues = sheet.getRange(2, 5, lastRow - 1, 1).getValues();
  for (let i = 0; i < statusValues.length; i++) {
    const status = String(statusValues[i][0] || "").trim();
    if (status === "ACCEPTED" || status === "") {
      count++;
    }
  }

  return Math.min(maxLimit, count);
}

function getMatchStats(ss, sheetName) {
  const sheet = ss.getSheetByName(sheetName);
  return { registered: getSheetAcceptedCount(sheet, SCRIPT_CONFIG.MAX_PLAYERS_PER_MATCH) };
}

/**
 * Safely closes a Google Form when capacity reaches limit
 */
function closeGoogleForm(formId) {
  if (!formId || formId.indexOf("REPLACE_") !== -1) return;
  try {
    const form = FormApp.openById(formId);
    if (form.isAcceptingResponses()) {
      form.setAcceptingResponses(false);
      form.setCustomClosedFormMessage("Registration for the Free Fire MAX Tournament has reached the maximum 96-player capacity and is now officially CLOSED.");
    }
  } catch (e) {
    Logger.log("Failed to close Google Form " + formId + ": " + e.message);
  }
}
