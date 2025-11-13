// ---- STORAGE KEYS ----
const KEYS = {
  STEP: "liwa_onboarding_step",
  PRIVACY: "liwa_privacy",
  EMERGENCY: "liwa_emergency_contacts",
  ROUTE_PREFS: "liwa_route_preferences",
};

// ---- SAVE FUNCTIONS ----
export function saveStep(stepNumber) {
  localStorage.setItem(KEYS.STEP, stepNumber.toString());
}

export function savePrivacySettings(settings) {
  localStorage.setItem(KEYS.PRIVACY, JSON.stringify(settings));
}

export function saveEmergencyContacts(contacts) {
  localStorage.setItem(KEYS.EMERGENCY, JSON.stringify(contacts));
}

export function saveRoutePreferences(prefs) {
  localStorage.setItem(KEYS.ROUTE_PREFS, JSON.stringify(prefs));
}

// ---- LOAD FUNCTIONS ----
export function loadStep() {
  return Number(localStorage.getItem(KEYS.STEP)) || 1;
}

export function loadPrivacySettings() {
  return JSON.parse(localStorage.getItem(KEYS.PRIVACY)) || {};
}

export function loadEmergencyContacts() {
  return JSON.parse(localStorage.getItem(KEYS.EMERGENCY)) || [];
}

export function loadRoutePreferences() {
  return JSON.parse(localStorage.getItem(KEYS.ROUTE_PREFS)) || [];
}

export function resetAllOnboardingData() {
  localStorage.removeItem("liwa_onboarding_step");
  localStorage.removeItem("liwa_privacy");
  localStorage.removeItem("liwa_emergency_contacts");
  localStorage.removeItem("liwa_route_preferences");
}
