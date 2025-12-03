// src/components/HeartConfirmModal.jsx
import React from "react";
import colors from "../styles/colors";
import PrimaryButton from "./PrimaryButton";
import OutlineButton from "./OutlineButton";

export default function HeartConfirmModal({ isOpen, onClose, onConfirm }) {
  if (!isOpen) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.35)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999,
      }}
    >
      <div
        style={{
          width: 420,
          padding: "30px 28px",
          background: "white",
          borderRadius: 16,
          boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: 20,
            fontWeight: 700,
            marginBottom: 14,
            color: colors.purpleDark,
          }}
        >
          Like this report?
        </h2>

        <p
          style={{
            fontSize: 14,
            opacity: 0.7,
            marginBottom: 24,
          }}
        >
          Your like will help improve route reputation and safety scores.
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 12,
            marginTop: 10,
          }}
        >
          <OutlineButton onClick={onClose} style={{ padding: "10px 30px" }}>
            Cancel
          </OutlineButton>

          <PrimaryButton
            onClick={onConfirm}
            style={{ padding: "10px 30px" }}
          >
            Continue
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
}
