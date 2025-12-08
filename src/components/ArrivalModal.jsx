// src/components/modals/ArrivalModal.jsx
import React, { useState } from "react";
import colors from "../styles/colors";
import PrimaryButton from "./PrimaryButton";
import { supabase } from "../supabaseClient";
import FeedbackSubmittedModal from "./FeedbackSubmittedModal";

export default function ArrivalModal({ isOpen, onClose, place }) {
  const [rating, setRating] = useState(0);
  const [showSuccess, setShowSuccess] = useState(false);

  if (!isOpen) return null;

  async function handleSubmit() {
    if (rating === 0) return;  

    let deviceId = localStorage.getItem("deviceId");
    if (!deviceId) {
      deviceId = crypto.randomUUID();
      localStorage.setItem("deviceId", deviceId);
    }

    // INSERT FEEDBACK INTO Supabase
    const { error } = await supabase.from("route_feedback").insert({
      place_name: place?.name || "Unknown Place",
      rating: rating,
      device_id: deviceId,
    });

    if (error) {
      console.error("❌ Failed to save feedback:", error);
      return;
    }

    // SHOW SUCCESS MODAL
    setShowSuccess(true);

    // Optional: reset stars
    setRating(0);
  }

  return (
    <>
      {/* MAIN MODAL */}
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
          {/* Return home — centered */}
          <div style={{ display: "flex", justifyContent: "center", marginBottom: 20 }}>
            <button
              onClick={onClose}
              style={{
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
          </div>

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
            How was your experience?
            <br />
            Help our community by sharing your feedback.
          </p>

          {/* ★ STAR RATING */}
          <div style={{ display: "flex", justifyContent: "center", gap: 6 }}>
            {[1, 2, 3, 4, 5].map((n) => (
              <span
                key={n}
                onClick={() => setRating(n)}
                style={{
                  fontSize: 30,
                  cursor: "pointer",
                  color: n <= rating ? "#FFC107" : "#D5D5D5",
                  transition: "0.2s",
                }}
              >
                ★
              </span>
            ))}
          </div>

          {/* Submit Button */}
          <PrimaryButton
            style={{ marginTop: 18, padding: "10px 40px", fontSize: 15 }}
            onClick={handleSubmit}
          >
            Submit
          </PrimaryButton>
        </div>
      </div>

      {/* SUCCESS MODAL */}
      <FeedbackSubmittedModal
        isOpen={showSuccess}
        onClose={() => {
          setShowSuccess(false);
          onClose(); // close arrival modal after success
        }}
      />
    </>
  );
}
