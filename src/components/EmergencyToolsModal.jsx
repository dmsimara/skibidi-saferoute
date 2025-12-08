import React from "react";
import colors from "../styles/colors";
import OutlineButton from "./OutlineButton";
import PrimaryButton from "./PrimaryButton";

export default function EmergencyToolsModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.35)",
        backdropFilter: "blur(4px)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999,
      }}
    >
      <div
        style={{
          width: 540,
          background: "white",
          borderRadius: 22,
          padding: "32px",
          textAlign: "left",
          boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
        }}
      >
        {/* Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: 5,
          }}
        >
          <h2
            style={{
              fontSize: 22,
              fontWeight: 700,
              color: colors.purpleDark,
            }}
          >
            Your Emergency Tools and Resources
          </h2>

          <button
            onClick={onClose}
            style={{
              background: "none",
              border: "none",
              color: colors.purpleDark,
              fontSize: 14,
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
              fontWeight: 600,
            }}
          >
            ← Go Back
          </button>
        </div>

        <p style={{ fontSize: 14, opacity: 0.7, marginBottom: 22 }}>
          Access hotlines, contacts, and quick-response options.
        </p>

        {/* CONTENT */}
        <div style={{ marginBottom: 20, lineHeight: "20px" }}>
          {/* Agency Block */}
          <div style={{ marginBottom: 16 }}>
            <p style={{ fontWeight: 600 }}>PNP – Aleng Pulis 24/7</p>
            <p>
              Contact No:{" "}
              <a href="tel:0908-970-7777" style={{ color: colors.purple }}>
                0908-970-7777
              </a>
            </p>
          </div>

          {/* Agency Block */}
          <div style={{ marginBottom: 16 }}>
            <p style={{ fontWeight: 600 }}>National Emergency Hotline</p>
            <p>Hotline: 911</p>
          </div>

          {/* Agency Block */}
          <div style={{ marginBottom: 16 }}>
            <p style={{ fontWeight: 600 }}>Philippine Commission on Women</p>
            <p>
              Fax Number:{" "}
              <a href="tel:+63287355449" style={{ color: colors.purple }}>
                (+632) 8735-4449
              </a>
            </p>
          </div>

          <p
            style={{
              textAlign: "center",
              marginTop: 18,
              opacity: 0.45,
              fontSize: 13,
            }}
          >
            More resources will be available soon.
          </p>
        </div>

        {/* BUTTONS */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: 25,
          }}
        >
          <OutlineButton
            onClick={onClose}
            style={{ padding: "10px 32px", fontSize: 15 }}
          >
            Cancel
          </OutlineButton>

          <PrimaryButton
            onClick={onClose}
            style={{ padding: "10px 40px", fontSize: 15 }}
          >
            Done
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
}
