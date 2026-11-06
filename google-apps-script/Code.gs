/**
 * ============================================================================
 * FREE FIRE MAX TOURNAMENT – TWO SEPARATE SOLO MATCHES
 * Google Apps Script: Shared UID Validation & Live Slot Availability API
 * ============================================================================
 * 
 * Features:
 * 1. LockService concurrency protection to safely handle simultaneous submissions.
 * 2. Strict Cross-Match UID Deduplication: Rejects any UID submitted in Match 1
 *    if it exists in Match 2 (and vice-versa).
 * 3. Independent 48-player capacity tracking for Match 1 and Match 2.
 * 4. Automatic Google Form closure (setAcceptingResponses(false)) when a match
 *    reaches 48 valid players.
 * 5. Public REST API (doGet) serving live synchronized slot availability to the
 *    Free Fire MAX tournament frontend.
 * ============================================================================
 */

// Configuration - Replace with your actual Google Form IDs if desired
const SCRIPT_CONFIG = {
  MATCH_1_FORM_ID: "REPLACE_WITH_MATCH_1_GOOGLE_FORM_ID",
  MATCH_2_FORM_ID: "REPLACE_WITH_MATCH_2_GOOGLE_FORM_ID",
  MAX_PLAYERS_PER_MATCH: 48,
  SHEET_NAME_MATCH_1: "Match1_Registrations",
  SHEET_NAME_MATCH_2: "Match2_Registrations"
};

/**
 * Handle HTTP GET Requests (Public Slot Telemetry API for Tournament Website)
 */
function doGet(e) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const match1Stats = getMatchStats(ss, SCRIPT_CONFIG.SHEET_NAME_MATCH_1);
  const match2Stats = getMatchStats(ss, SCRIPT_CONFIG.SHEET_NAME_MATCH_2);

  const payload = {
    status: "success",
    timestamp: new Date().toISOString(),
    totalCapacity: 96,
    totalUniquePlayers: match1Stats.registered + match2Stats.registered,
    matches: [
      {
        id: "match-01",
        matchNumber: 1,
        name: "MATCH 1 – BERMUDA SOLO",
        mode: "SOLO",
        max: SCRIPT_CONFIG.MAX_PLAYERS_PER_MATCH,
        registered: match1Stats.registered,
        available: Math.max(0, SCRIPT_CONFIG.MAX_PLAYERS_PER_MATCH - match1Stats.registered),
        isFull: match1Stats.registered >= SCRIPT_CONFIG.MAX_PLAYERS_PER_MATCH
      },
      {
        id: "match-02",
        matchNumber: 2,
        name: "MATCH 2 – BERMUDA SOLO",
        mode: "SOLO",
        max: SCRIPT_CONFIG.MAX_PLAYERS_PER_MATCH,
        registered: match2Stats.registered,
        available: Math.max(0, SCRIPT_CONFIG.MAX_PLAYERS_PER_MATCH - match2Stats.registered),
        isFull: match2Stats.registered >= SCRIPT_CONFIG.MAX_PLAYERS_PER_MATCH
      }
    ],
    maps: [
      {
        id: "map-01",
        name: "BERMUDA",
        status: "OPEN",
        max: 96,
        registered: match1Stats.registered + match2Stats.registered,
        available: Math.max(0, 96 - (match1Stats.registered + match2Stats.registered)),
        isFull: (match1Stats.registered + match2Stats.registered) >= 96
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
 * Triggered automatically when either Match 1 or Match 2 Google Form is submitted.
 * Sets up a 30s Lock to prevent simultaneous collision.
 */
function onFormSubmit(e) {
  const lock = LockService.getScriptLock();
  
  // Wait up to 30 seconds for concurrent submissions to complete
  try {
    lock.waitLock(30000);
  } catch (err) {
    Logger.log("Lock acquisition timeout: Simultaneous submissions throttled.");
    return;
  }

  try {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = e.range ? e.range.getSheet() : ss.getActiveSheet();
    const sheetName = sheet.getName();
    const isMatch1 = sheetName.indexOf("Match1") !== -1 || sheetName === SCRIPT_CONFIG.SHEET_NAME_MATCH_1;
    const targetMatch = isMatch1 ? "MATCH 1" : "MATCH 2";

    const lastRow = sheet.getLastRow();
    // Assuming Column D is Free Fire MAX UID (adjust index based on your form column structure)
    // Row format: [Timestamp, PlayerName, Phone/Discord, FF_UID, Status, Reason]
    const rowValues = sheet.getRange(lastRow, 1, 1, sheet.getLastColumn()).getValues()[0];
    const uid = String(rowValues[3] || "").trim();

    if (!uid) {
      sheet.getRange(lastRow, 5).setValue("REJECTED");
      sheet.getRange(lastRow, 6).setValue("Empty Free Fire UID");
      return;
    }

    // 1. Cross-Match UID Verification
    const match1Sheet = ss.getSheetByName(SCRIPT_CONFIG.SHEET_NAME_MATCH_1);
    const match2Sheet = ss.getSheetByName(SCRIPT_CONFIG.SHEET_NAME_MATCH_2);

    const match1UIDs = getExistingAcceptedUIDs(match1Sheet, lastRow, isMatch1);
    const match2UIDs = getExistingAcceptedUIDs(match2Sheet, lastRow, !isMatch1);

    const existsInMatch1 = match1UIDs.has(uid);
    const existsInMatch2 = match2UIDs.has(uid);

    // If UID already exists in either match, reject immediately
    if (existsInMatch1 || existsInMatch2) {
      const conflictMatch = existsInMatch1 ? "Match 1" : "Match 2";
      sheet.getRange(lastRow, 5).setValue("REJECTED_DUPLICATE_UID");
      sheet.getRange(lastRow, 6).setValue("UID already registered in " + conflictMatch + ". Player repeats prohibited.");
      Logger.log("Duplicate UID blocked: " + uid + " already in " + conflictMatch);
      return;
    }

    // 2. Capacity Check for the Target Match (Max 48)
    const currentAcceptedCount = isMatch1 ? match1UIDs.size : match2UIDs.size;
    if (currentAcceptedCount >= SCRIPT_CONFIG.MAX_PLAYERS_PER_MATCH) {
      sheet.getRange(lastRow, 5).setValue("REJECTED_MATCH_FULL");
      sheet.getRange(lastRow, 6).setValue(targetMatch + " lobby reached maximum 48 capacity.");
      
      // Auto-close form
      closeGoogleForm(isMatch1 ? SCRIPT_CONFIG.MATCH_1_FORM_ID : SCRIPT_CONFIG.MATCH_2_FORM_ID);
      return;
    }

    // 3. Mark Valid Submission as ACCEPTED
    sheet.getRange(lastRow, 5).setValue("ACCEPTED");
    sheet.getRange(lastRow, 6).setValue("Verified Unique Entry for " + targetMatch);

    // If this submission brings the count to 48, automatically close the form
    if (currentAcceptedCount + 1 >= SCRIPT_CONFIG.MAX_PLAYERS_PER_MATCH) {
      closeGoogleForm(isMatch1 ? SCRIPT_CONFIG.MATCH_1_FORM_ID : SCRIPT_CONFIG.MATCH_2_FORM_ID);
      Logger.log(targetMatch + " has reached 48 players! Form automatically locked.");
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
function getExistingAcceptedUIDs(sheet, currentRowIndex, isCurrentSheet) {
  const uids = new Set();
  if (!sheet) return uids;

  const lastRow = sheet.getLastRow();
  if (lastRow < 2) return uids;

  const data = sheet.getRange(2, 1, lastRow - 1, 6).getValues();
  for (let i = 0; i < data.length; i++) {
    const rowNum = i + 2;
    // Don't count the current row that is being evaluated
    if (isCurrentSheet && rowNum === currentRowIndex) continue;

    const rowUid = String(data[i][3] || "").trim();
    const rowStatus = String(data[i][4] || "").trim();

    if (rowUid && (rowStatus === "ACCEPTED" || rowStatus === "")) {
      uids.add(rowUid);
    }
  }
  return uids;
}

/**
 * Computes registered accepted player count for a match sheet
 */
function getMatchStats(ss, sheetName) {
  const sheet = ss.getSheetByName(sheetName);
  if (!sheet) return { registered: 0 };

  const lastRow = sheet.getLastRow();
  if (lastRow < 2) return { registered: 0 };

  let count = 0;
  const statusValues = sheet.getRange(2, 5, lastRow - 1, 1).getValues();
  for (let i = 0; i < statusValues.length; i++) {
    const status = String(statusValues[i][0] || "").trim();
    if (status === "ACCEPTED" || status === "") {
      count++;
    }
  }

  return { registered: Math.min(SCRIPT_CONFIG.MAX_PLAYERS_PER_MATCH, count) };
}

/**
 * Safely closes a Google Form when capacity reaches 48
 */
function closeGoogleForm(formId) {
  if (!formId || formId.indexOf("REPLACE_") !== -1) return;
  try {
    const form = FormApp.openById(formId);
    if (form.isAcceptingResponses()) {
      form.setAcceptingResponses(false);
      form.setCustomClosedFormMessage("Registration for this match has reached the maximum 48-player capacity and is now officially CLOSED.");
    }
  } catch (e) {
    Logger.log("Failed to close Google Form " + formId + ": " + e.message);
  }
}

