// src/components/ConfirmSubmitModal.jsx
import React from "react";
import colors from "../styles/colors";
import PrimaryButton from "./PrimaryButton";
import OutlineButton from "./OutlineButton";

export default function ConfirmSubmitModal({ isOpen, onClose, onConfirm }) {
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
          width: 480,
          background: "white",
          borderRadius: "26px",
          padding: "50px 40px 40px",
          textAlign: "center",
          boxShadow: "0 6px 20px rgba(0,0,0,0.12)",
          position: "relative",
        }}
      >
        {/* GO BACK BUTTON (top right) */}
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: 18,
            right: 22,
            background: colors.purpleLight,
            color: "white",
            border: "none",
            padding: "8px 16px",
            borderRadius: "20px",
            fontWeight: 600,
            fontSize: 14,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: 6,
          }}
        >
          ← Go Back
        </button>

        {/* Main Title */}
        <h2
          style={{
            fontSize: 26,
            fontWeight: 700,
            marginBottom: 18,
            color: "#000",
          }}
        >
          Are you sure?
        </h2>

        {/* Description */}
        <p
          style={{
            fontSize: 15,
            lineHeight: "22px",
            color: "#444",
            width: "85%",
            margin: "0 auto",
            marginBottom: 18,
          }}
        >
          Please review your details before sending. Once submitted, this report
          will help improve route safety for others.
        </p>

        <p
          style={{
            fontSize: 14,
            color: "#444",
            opacity: 0.7,
            marginBottom: 35,
          }}
        >
          No personal information will be shared.
        </p>

        {/* BUTTONS (Cancel + Report) */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "18px",
            marginTop: "10px",
          }}
        >
          {/* CANCEL — OutlineButton */}
          <OutlineButton
            onClick={onClose}
            style={{
              padding: "12px 38px",
              fontSize: "16px",
              fontWeight: 700,
              borderRadius: "25px",
              borderWidth: "3px",
            }}
          >
            Cancel
          </OutlineButton>

          {/* REPORT — PrimaryButton */}
          <PrimaryButton
            onClick={onConfirm}
            style={{
              padding: "12px 45px",
              fontSize: "16px",
              fontWeight: 700,
              borderRadius: "25px",
            }}
          >
            Report
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
}
