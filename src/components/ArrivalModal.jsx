// src/components/modals/ArrivalModal.jsx
import React, { useState } from "react";
import colors from "../../styles/colors";
import PrimaryButton from "./PrimaryButton";

export default function ArrivalModal({ isOpen, onClose, place }) {
  const [rating, setRating] = useState(0);

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
          background: "white",
          borderRadius: 20,
          padding: "30px 32px",
          textAlign: "center",
          boxShadow: "0 6px 18px rgba(0,0,0,0.2)",
          position: "relative",
        }}
      >
        {/* Return home */}
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: 14,
            left: 14,
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
          ← return to home
        </button>

        <h2
          style={{
            fontSize: 22,
            fontWeight: 700,
            color: colors.purpleDark,
            marginTop: 20,
            marginBottom: 8,
          }}
        >
          You have arrived.
        </h2>

        <p style={{ color: "#666", fontSize: 14, marginBottom: 14 }}>
          How was your experience?<br />
          Help our community by sharing your feedback.
        </p>

        {/* Stars */}
        <div style={{ display: "flex", justifyContent: "center", gap: 6 }}>
          {[1, 2, 3, 4, 5].map((n) => (
            <span
              key={n}
              onClick={() => setRating(n)}
              style={{
                fontSize: 28,
                cursor: "pointer",
                color: n <= rating ? "#6C50FF" : "#D5D5D5",
              }}
            >
              ★
            </span>
          ))}
        </div>

        <PrimaryButton
          style={{ marginTop: 18, padding: "10px 40px", fontSize: 15 }}
        >
          Submit
        </PrimaryButton>
      </div>
    </div>
  );
}
