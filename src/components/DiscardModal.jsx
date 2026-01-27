// src/components/DiscardModal.jsx
import React from "react";
import colors from "../styles/colors";
import PrimaryButton from "./PrimaryButton";
import OutlineButton from "./OutlineButton";

export default function DiscardModal({ isOpen, onClose, onDiscard }) {
  if (!isOpen) return null;

  const handleQuickExit = () => {
    sessionStorage.removeItem("reportDraft");
    localStorage.removeItem("reportDraft");
    sessionStorage.setItem("liwa_quick_exit", "1");
    window.location.assign("/home");
  };

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.35)",
        backdropFilter: "blur(4px)",
        display: "flex",
        flexDirection: "column", // ✅ stack modal + button
        justifyContent: "center",
        alignItems: "center",
        zIndex: 99999,
        padding: "24px",
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
        {/* GO BACK BUTTON */}
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

        {/* TITLE */}
        <h2
          style={{
            fontSize: 26,
            fontWeight: 700,
            marginBottom: 16,
            color: "#000",
          }}
        >
          Are you sure?
        </h2>

        {/* DESCRIPTION */}
        <p
          style={{
            fontSize: 15,
            lineHeight: "22px",
            color: "#444",
            opacity: 0.85,
            width: "85%",
            margin: "0 auto",
            marginBottom: 35,
          }}
        >
          If you leave now, all the information you entered will be deleted and
          can’t be recovered.
        </p>

        {/* BUTTONS */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "18px",
            marginTop: "10px",
          }}
        >
          <OutlineButton
            onClick={onClose}
            style={{
              padding: "12px 36px",
              fontSize: "16px",
              fontWeight: 700,
              borderRadius: "25px",
              borderWidth: "3px",
            }}
          >
            Cancel
          </OutlineButton>

          <PrimaryButton
            onClick={onDiscard}
            style={{
              padding: "12px 42px",
              fontSize: "16px",
              fontWeight: 700,
              borderRadius: "25px",
            }}
          >
            Discard
          </PrimaryButton>
        </div>
      </div>

      {/* QUICK EXIT — below modal */}
      <button
        type="button"
        onClick={handleQuickExit}
        style={{
          marginTop: "26px",
          background: "#330972",
          color: "#fff",
          border: "none",
          borderRadius: "22px",
          padding: "10px 18px",
          fontSize: "13px",
          fontWeight: 600,
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          gap: "8px",
        }}
      >
        {/* White icon */}
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm-3 17v-6l-2 2-2-2 3.5-3.5c.4-.4.9-.6 1.4-.6H13c.6 0 1.1.2 1.5.6L17 15l-2 2-2-2v7h-3Zm9-9h-4v-2h4v2Z"
            fill="#FFFFFF"
          />
        </svg>
        Quick-exit
      </button>
    </div>
  );
}
