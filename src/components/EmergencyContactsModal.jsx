import { useState } from "react";
import colors from "../styles/colors";
import PrimaryButton from "./PrimaryButton";
import OutlineButton from "./OutlineButton";
import InfoModal from "./InfoModal";

export default function EmergencyContactsModal({
  onClose,
  onAllowAccess,  // parent can receive picked contacts (if supported)
  onAddTrusted,   // parent receives manually entered contacts
}) {
  const [contacts, setContacts] = useState([{ name: "", phone: "" }]);
  const [showFallback, setShowFallback] = useState(false);

  const addMore = () => {
    setContacts([...contacts, { name: "", phone: "" }]);
  };

  const removeContact = (index) => {
    if (contacts.length === 1) return; // prevent removing all fields
    const updated = contacts.filter((_, i) => i !== index);
    setContacts(updated);
  };

  const updateName = (i, value) => {
    const updated = [...contacts];
    updated[i].name = value;
    setContacts(updated);
  };

  const updatePhone = (i, value) => {
    const updated = [...contacts];
    updated[i].phone = value;
    setContacts(updated);
  };

  // Try to use the Contact Picker API (mobile Chrome, some browsers)
  const pickDeviceContacts = async () => {
    try {
      const hasContactAPI =
        "contacts" in navigator && "ContactsManager" in window;

      if (!hasContactAPI) {
        setShowFallback(true);
        return;
      }

      const picked = await navigator.contacts.select(["name", "tel"], {
        multiple: true,
      });

      if (picked && picked.length > 0) {
        const formatted = picked.map((c) => ({
          name: c.name ? c.name[0] : "",
          phone: c.tel ? c.tel[0] : "",
        }));

        setContacts(formatted);
      }

      if (onAllowAccess) {
        onAllowAccess(picked);
      }

      onClose();
    } catch (err) {
      console.error("Contact access failed:", err);
      setShowFallback(true);
    }
  };

  return (
    <>
      {/* Custom Scrollbar Styles for this modal */}
      <style>{`
        .emergency-scroll::-webkit-scrollbar {
          width: 8px;
        }
        .emergency-scroll::-webkit-scrollbar-thumb {
          background: #cfcfcf;
          border-radius: 10px;
        }
        .emergency-scroll::-webkit-scrollbar-thumb:hover {
          background: #b5b5b5;
        }
        .emergency-scroll::-webkit-scrollbar-track {
          background: transparent;
        }
      `}</style>

      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          backdropFilter: "blur(4px)",
          background: "rgba(0,0,0,0.25)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 9999,
          overflow: "hidden",
        }}
      >
        <div
          className="emergency-scroll"
          style={{
            width: "620px",
            maxHeight: "75vh",
            padding: "45px 45px",
            backgroundColor: colors.whiteSoft,
            borderRadius: "26px",
            boxShadow: "0px 8px 26px rgba(0,0,0,0.15)",
            overflowY: "auto",
            position: "relative",
          }}
        >
          {/* Cancel */}
          <div
            onClick={onClose}
            style={{
              position: "absolute",
              top: "18px",
              right: "22px",
              cursor: "pointer",
              color: colors.dark,
              opacity: 0.6,
              fontSize: "15px",
            }}
          >
            ← cancel
          </div>

          {/* Title */}
          <h2
            style={{
              margin: 0,
              color: colors.purpleDark,
              fontSize: "24px",
              fontWeight: 700,
            }}
          >
            Emergency Contacts
          </h2>

          <p
            style={{
              marginTop: "8px",
              fontSize: "16px",
              opacity: 0.8,
              color: colors.dark,
            }}
          >
            Add people to alert if something happens.
          </p>

          {/* CONTACT LIST */}
          {contacts.map((contact, index) => (
            <div
              key={index}
              style={{
                marginTop: "26px",
                paddingRight: "10px",
                position: "relative",
              }}
            >
              {/* REMOVE BUTTON */}
              {contacts.length > 1 && (
                <div
                  onClick={() => removeContact(index)}
                  style={{
                    position: "absolute",
                    right: "0px",
                    top: "0px",
                    cursor: "pointer",
                    fontSize: "20px",
                    opacity: 0.45,
                    fontWeight: "bold",
                  }}
                >
                  ×
                </div>
              )}

              {/* NAME */}
              <label
                style={{
                  fontSize: "15px",
                  opacity: 0.75,
                  marginBottom: "6px",
                  display: "block",
                }}
              >
                Name
              </label>

              <input
                type="text"
                placeholder="Name"
                value={contact.name}
                onChange={(e) => updateName(index, e.target.value)}
                style={{
                  width: "100%",
                  padding: "12px 14px",
                  borderRadius: "10px",
                  border: "1px solid #CCC",
                  marginBottom: "20px",
                  fontSize: "15px",
                }}
              />

              {/* PHONE */}
              <label
                style={{
                  fontSize: "15px",
                  opacity: 0.75,
                  marginBottom: "6px",
                  display: "block",
                }}
              >
                Phone Number
              </label>

              <input
                type="text"
                placeholder="Phone Number"
                value={contact.phone}
                onChange={(e) => updatePhone(index, e.target.value)}
                style={{
                  width: "100%",
                  padding: "12px 14px",
                  borderRadius: "10px",
                  border: "1px solid #CCC",
                  fontSize: "15px",
                }}
              />
            </div>
          ))}

          {/* ADD MORE PERSON — Plus Icon */}
          <div
            onClick={addMore}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              marginTop: "22px",
              marginBottom: "28px",
              cursor: "pointer",
              userSelect: "none",
            }}
          >
            <div
              style={{
                width: "28px",
                height: "28px",
                borderRadius: "50%",
                border: `2px solid ${colors.purple}`,
                color: colors.purple,
                fontWeight: "700",
                fontSize: "20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                lineHeight: 0,
              }}
            >
              +
            </div>

            <span style={{ color: colors.dark, fontSize: "17px" }}>
              Add more person
            </span>
          </div>

          {/* BUTTONS */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "20px",
              marginTop: "10px",
            }}
          >
            {/* Device Contact Access */}
            <OutlineButton
              onClick={pickDeviceContacts}
              style={{ flex: 1, justifyContent: "center", fontSize: "16px" }}
            >
              Allow Contact Access
            </OutlineButton>

            {/* Save Contacts */}
            <PrimaryButton
              onClick={() => {
                if (onAddTrusted) {
                  onAddTrusted(contacts);
                }
                onClose();
              }}
              style={{ flex: 1, justifyContent: "center", fontSize: "16px" }}
            >
              Save Contacts
            </PrimaryButton>
          </div>
        </div>
      </div>

      {/* Fallback modal when Contact Picker is not supported or fails */}
      {showFallback && (
        <InfoModal
          title="Contact Access Unavailable"
          message="Your device does not support automatic contact access. Please enter your emergency contacts manually."
          onClose={() => setShowFallback(false)}
        />
      )}
    </>
  );
}
