import React from "react";
import PrimaryButton from "./PrimaryButton";
import OutlineButton from "./OutlineButton";
import colors from "../styles/colors";

export default function ViewReviewConfirmModal({ isOpen, onClose, onContinue }) {
  if (!isOpen) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        background: "rgba(0,0,0,0.35)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999,
      }}
    >
      {/* Modal Box */}
      <div
        style={{
          width: 420,
          background: "white",
          borderRadius: 20,
          padding: "32px 30px 26px",
          boxShadow: "0 6px 18px rgba(0,0,0,0.15)",
          position: "relative",
          textAlign: "center",
        }}
      >
        {/* Go Back button (top-right) */}
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: 14,
            right: 14,
            background: colors.purpleLight,
            color: "white",
            border: "none",
            borderRadius: 20,
            padding: "6px 14px",
            fontSize: 13,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: 6,
          }}
        >
          ← Go Back
        </button>

        {/* Title */}
        <h2
          style={{
            fontSize: 22,
            fontWeight: 700,
            marginBottom: 10,
            color: colors.purpleDark,
          }}
        >
          Are you sure?
        </h2>

        {/* Subtitle */}
        <p
          style={{
            fontSize: 14,
            opacity: 0.8,
            margin: "0 auto 28px",
            width: "85%",
            lineHeight: "20px",
          }}
        >
          Every sensitive media and information are masked for your safety.
          You can change this in your settings.
        </p>

        {/* Buttons Row */}
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
            style={{ padding: "10px 36px", fontSize: 15 }}
          >
            Cancel
          </OutlineButton>

          <PrimaryButton
            onClick={onContinue}
            style={{ padding: "10px 36px", fontSize: 15 }}
          >
            Continue
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
}
