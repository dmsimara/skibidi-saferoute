import React from "react";
import colors from "../styles/colors";
import checkIcon from "../assets/images/report/check.png";

export default function FeedbackSubmittedModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        height: "100vh",
        width: "100vw",
        backdropFilter: "blur(4px)",
        backgroundColor: "rgba(0,0,0,0.25)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999,
      }}
    >
      {/* CARD */}
      <div
        style={{
          background: "white",
          width: 400,
          padding: "40px 32px",
          borderRadius: 22,
          textAlign: "center",
          boxShadow: "0px 8px 26px rgba(0,0,0,0.15)",
        }}
      >
        {/* Check Icon */}
        <img
          src={checkIcon}
          alt="success"
          style={{ width: 70, marginBottom: 20, opacity: 0.9 }}
        />

        <h2
          style={{
            fontSize: 22,
            color: colors.purpleDark,
            marginBottom: 10,
            fontWeight: 700,
          }}
        >
          Feedback Submitted
        </h2>

        <p style={{ fontSize: 15, opacity: 0.8, marginBottom: 25 }}>
          Thank you for making our community safer!
        </p>

        <button
          onClick={onClose}
          style={{
            background: colors.purple,
            color: "white",
            border: "none",
            padding: "10px 30px",
            borderRadius: 20,
            cursor: "pointer",
            fontSize: 15,
            fontWeight: 600,
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
}
