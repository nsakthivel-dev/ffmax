import { TOURNAMENT_CONFIG } from '../config/tournament';

/**
 * Service to retrieve live slot availability from the configured Google Apps Script Web App API.
 * 
 * Pipeline:
 * Google Forms -> Google Apps Script -> Central Google Sheet -> Public Status API -> Website
 */

const MAX_PLAYERS = TOURNAMENT_CONFIG.stats.playersPerMap || 48;

/**
 * Compute availability stats for a map
 */
export function computeSlotMetrics(registeredCount, max = MAX_PLAYERS) {
  const registered = typeof registeredCount === 'number' ? Math.max(0, registeredCount) : 0;
  const available = Math.max(0, max - registered);
  const isFull = registered >= max;
  const percentage = Math.min(100, Math.round((registered / max) * 100));

  return {
    registered,
    max,
    available,
    isFull,
    statusText: isFull ? 'FULL' : 'OPEN',
    percentage
  };
}

/**
 * Fetch slot availability from the central status API
 * Returns: { hasApi, loading, error, data, updatedAt, fallbackMessage }
 */
export async function fetchLiveSlotStatus() {
  const endpoint = TOURNAMENT_CONFIG.api.statusEndpoint?.trim();

  // If no endpoint is configured, return the fallback state
  if (!endpoint) {
    return {
      hasApi: false,
      error: null,
      updatedAt: null,
      fallbackMessage: TOURNAMENT_CONFIG.api.fallbackMessage || "REGISTRATION AVAILABILITY WILL BE UPDATED SOON.",
      slots: {}
    };
  }

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 8000); // 8s timeout

    const response = await fetch(endpoint, {
      method: 'GET',
      headers: {
        'Accept': 'application/json'
      },
      signal: controller.signal
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      throw new Error(`API responded with HTTP ${response.status}`);
    }

    const data = await response.json();

    // Map payload into keyed object { [key]: { registered, available, isFull, ... } }
    const slots = {};
    if (Array.isArray(data.matches)) {
      data.matches.forEach((item) => {
        const key = item.id || item.matchNumber || item.name;
        slots[key] = computeSlotMetrics(item.registered, item.max || 48);
      });
    }

    if (Array.isArray(data.maps)) {
      data.maps.forEach((item) => {
        const key = item.id || item.mapNumber || item.name;
        slots[key] = computeSlotMetrics(item.registered, item.max || MAX_PLAYERS);
      });
    } else if (typeof data === 'object' && data !== null) {
      Object.keys(data).forEach((key) => {
        if (typeof data[key] === 'object' && data[key] !== null) {
          slots[key] = computeSlotMetrics(data[key].registered, data[key].max || MAX_PLAYERS);
        } else if (typeof data[key] === 'number') {
          slots[key] = computeSlotMetrics(data[key], MAX_PLAYERS);
        }
      });
    }

    // If match-01 and match-02 exist but map-01 is not set, aggregate into map-01
    if (slots['match-01'] && slots['match-02'] && !slots['map-01']) {
      const totalReg = (slots['match-01'].registered || 0) + (slots['match-02'].registered || 0);
      slots['map-01'] = computeSlotMetrics(totalReg, 96);
    }

    return {
      hasApi: true,
      error: null,
      updatedAt: data.updatedAt ? new Date(data.updatedAt) : new Date(),
      fallbackMessage: null,
      slots
    };
  } catch (err) {
    console.warn('[Slot Availability API] Unable to retrieve live counts:', err.message);
    return {
      hasApi: true,
      error: err.message || 'Failed to connect to registration server',
      updatedAt: null,
      fallbackMessage: TOURNAMENT_CONFIG.api.fallbackMessage || "REGISTRATION AVAILABILITY WILL BE UPDATED SOON.",
      slots: {}
    };
  }
}

