import { useState, useEffect } from "react";
import colors from "../../styles/colors";
import PrimaryButton from "../../components/PrimaryButton";
import OutlineButton from "../../components/OutlineButton";
import ToggleSwitch from "../../components/ToggleSwitch";
import LocationAccessModal from "../../components/LocationAccessModal";
import EmergencyContactsModal from "../../components/EmergencyContactsModal";

import {
  savePrivacySettings,
  saveEmergencyContacts,
} from "../../utils/preferences";

export default function Step3({ onNext, onBack }) {
  const [toggles, setToggles] = useState({
    location: false,
    data: false,
    anonymous: true,
    alerts: false,
    emergency: false,
  });

  const [showLocationModal, setShowLocationModal] = useState(false);
  const [showEmergencyModal, setShowEmergencyModal] = useState(false);

  const [scale, setScale] = useState(1);

  useEffect(() => {
    const updateScale = () => {
      const h = window.innerHeight;
      const targetHeight = 780;

      if (h < targetHeight) {
        setScale(h / targetHeight);
      } else {
        setScale(1);
      }
    };

    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, []);

  const switchToggle = (key) => {
    const newValue = !toggles[key];
    setToggles((prev) => ({ ...prev, [key]: newValue }));

    if (key === "location" && newValue) setShowLocationModal(true);
    if (key === "emergency" && newValue) setShowEmergencyModal(true);
  };

  const handleSaveContacts = (contacts) => {
    saveEmergencyContacts(contacts); 
    setShowEmergencyModal(false);
  };

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        background: `radial-gradient(circle, ${colors.offWhite} 0%, ${colors.purpleLight} 100%)`,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* Scaled container */}
      <div
        style={{
          transform: `scale(${scale})`,
          transformOrigin: "center center",
          width: "750px",
        }}
      >
        {/* WHITE CARD */}
        <div
          style={{
            backgroundColor: colors.whiteSoft,
            borderRadius: "32px",
            padding: "35px 40px",
            boxShadow: "0px 6px 22px rgba(0,0,0,0.10)",
            boxSizing: "border-box",
          }}
        >
          <h2
            style={{
              fontSize: "32px",
              fontWeight: 700,
              color: colors.purpleDark,
              margin: 0,
            }}
          >
            You are in control
          </h2>

          <p
            style={{
              marginTop: "10px",
              fontSize: "18px",
              color: colors.dark,
              opacity: 0.9,
            }}
          >
            Choose what you share, how you connect, and when you’re visible.
          </p>

          {/* TOGGLES */}
          <div
            style={{
              marginTop: "25px",
              display: "flex",
              flexDirection: "column",
              gap: "14px",
            }}
          >
            <ToggleSwitch
              title="Location Sharing"
              description="Allow app to use your location while navigating."
              isOn={toggles.location}
              onToggle={() => switchToggle("location")}
            />
            <ToggleSwitch
              title="Data Sharing"
              description="Decide what information the app can collect."
              isOn={toggles.data}
              onToggle={() => switchToggle("data")}
            />
            <ToggleSwitch
              title="Anonymous Reporting"
              description="Report safety concerns without revealing your identity."
              isOn={toggles.anonymous}
              onToggle={() => switchToggle("anonymous")}
            />
            <ToggleSwitch
              title="Notifications and Alerts"
              description="Get updates about hazards and road changes."
              isOn={toggles.alerts}
              onToggle={() => switchToggle("alerts")}
            />
            <ToggleSwitch
              title="Emergency Contacts"
              description="Let trusted people be alerted in case of emergency."
              isOn={toggles.emergency}
              onToggle={() => switchToggle("emergency")}
            />
          </div>

          {/* BUTTONS */}
          <div
            style={{
              marginTop: "30px",
              display: "flex",
              justifyContent: "flex-end",
              gap: "12px",
            }}
          >
            <OutlineButton onClick={onBack}>Back</OutlineButton>

            {/* ⭐ Save privacy settings before moving to Step4 */}
            <PrimaryButton
              onClick={() => {
                savePrivacySettings(toggles);
                onNext();
              }}
            >
              Next
            </PrimaryButton>
          </div>
        </div>

        {/* FOOTNOTE */}
        <p
          style={{
            marginTop: "14px",
            fontSize: "14px",
            color: "dark",
            opacity: 0.7,
            textAlign: "center",
          }}
        >
          Your privacy is our priority. You can modify these settings anytime in
          your Privacy Dashboard.
        </p>
      </div>

      {/* LOCATION MODAL */}
      {showLocationModal && (
        <LocationAccessModal
          onClose={() => {
            setShowLocationModal(false);
            setToggles((prev) => ({ ...prev, location: false }));
          }}
          onEnable={() => setShowLocationModal(false)}
          onManual={() => setShowLocationModal(false)}
        />
      )}

      {/* EMERGENCY CONTACTS MODAL */}
      {showEmergencyModal && (
        <EmergencyContactsModal
          onClose={() => {
            setShowEmergencyModal(false);
            setToggles((prev) => ({ ...prev, emergency: false }));
          }}
          onAllowAccess={() => setShowEmergencyModal(false)}
          onAddTrusted={handleSaveContacts} 
        />
      )}
    </div>
  );
}
