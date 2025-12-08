// src/components/FlagReasonModal.jsx
import React, { useState } from "react";
import colors from "../styles/colors";
import PrimaryButton from "./PrimaryButton";
import OutlineButton from "./OutlineButton";

export default function FlagReasonModal({ visible, onClose, onSubmit }) {
  const [selected, setSelected] = useState(null);

  if (!visible) return null;

  const reasons = [
    "False information",
    "Path no longer exists",
    "GPS Mismatch",
    "Route diverts into unsafe zone",
    "Turn is impossible",
    "Unclear instructions",
  ];

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.25)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backdropFilter: "blur(4px)",
        zIndex: 9999,
      }}
    >
      <div
        style={{
          width: 500,
          background: "white",
          borderRadius: 22,
          padding: "35px 35px 30px 35px",
          textAlign: "center",
          boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
          position: "relative",
        }}
      >
        <h2
          style={{
            fontSize: 22,
            fontWeight: 700,
            color: colors.purpleDark,
            marginBottom: 10,
          }}
        >
          Why are you reporting this route?
        </h2>

        <p style={{ fontSize: 14, opacity: 0.8, marginBottom: 25 }}>
          If someone is in immediate danger, get help before reporting to Liwa.
        </p>

        {/* Reason Buttons */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 14,
            marginBottom: 28,
          }}
        >
          {reasons.map((reason) => (
            <button
              key={reason}
              onClick={() => setSelected(reason)}
              style={{
                padding: "12px 10px",
                borderRadius: 12,
                border:
                  selected === reason
                    ? `2px solid ${colors.purple}`
                    : "2px solid #D6D6F5",
                background: selected === reason ? colors.purpleLight : "white",
                color: selected === reason ? colors.whiteSoft : colors.purpleDark,
                cursor: "pointer",
                fontWeight: 600,
                transition: "0.2s ease",
              }}
            >
              {reason}
            </button>
          ))}
        </div>

        <p style={{ fontSize: 12, opacity: 0.6, marginTop: 18 }}>
          By continuing, you agree to our{" "}
          <span style={{ color: colors.darkPurple }}>Terms & Conditions</span>{" "}
          and{" "}
          <span style={{ color: colors.darkPurple }}>Privacy Policies</span>.
        </p>

        {/* Bottom Buttons */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 20,
            marginTop: 10,
          }}
        >
          <OutlineButton
            onClick={onClose}
            style={{ padding: "10px 35px", fontSize: 16 }}
          >
            Cancel
          </OutlineButton>

          <PrimaryButton
            onClick={() => selected && onSubmit(selected)}
            disabled={!selected}
            style={{ padding: "10px 35px", fontSize: 16 }}
          >
            {selected ? "Report" : "Next"}
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
}
