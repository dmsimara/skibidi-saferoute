// src/components/FlagRouteModal.jsx
import React from "react";
import colors from "../styles/colors";
import PrimaryButton from "./PrimaryButton";
import OutlineButton from "./OutlineButton";

export default function FlagRouteModal({ visible, onClose, onContinue }) {
  if (!visible) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        background: "rgba(0,0,0,0.25)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999,
        backdropFilter: "blur(3px)",
      }}
    >
      <div
        style={{
          width: 420,
          background: "white",
          borderRadius: 22,
          padding: "35px 30px 30px 30px",
          textAlign: "center",
          boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
          position: "relative",
        }}
      >
        {/* Go Back - Top Right */}
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: 15,
            right: 15,
            padding: "6px 14px",
            borderRadius: 20,
            background: colors.purple,
            border: "none",
            color: "white",
            fontWeight: 600,
            fontSize: 14,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: 6,
          }}
        >
          <span style={{ fontSize: 18 }}>←</span>
          Go Back
        </button>

        {/* Title */}
        <h2
          style={{
            fontSize: 22,
            fontWeight: 700,
            color: colors.purpleDark,
            marginTop: 30,
            marginBottom: 10,
          }}
        >
          Flag this route?
        </h2>

        {/* Description */}
        <p
          style={{
            fontSize: 14,
            opacity: 0.8,
            maxWidth: 300,
            margin: "0 auto 35px auto",
            lineHeight: "20px",
          }}
        >
          Flag a route if it violates our community guidelines or causes harm to
          your journey.
        </p>

        {/* Buttons Row */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 18,
            marginTop: 10,
          }}
        >
          {/* Cancel */}
          <OutlineButton
            onClick={onClose}
            style={{ padding: "10px 36px", fontSize: 16 }}
          >
            Cancel
          </OutlineButton>

          {/* Continue */}
          <PrimaryButton
            onClick={onContinue}
            style={{ padding: "10px 36px", fontSize: 16 }}
          >
            Continue
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
}
