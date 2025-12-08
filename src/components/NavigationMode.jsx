// src/components/NavigationMode.jsx
import React, { useState } from "react";
import colors from "../styles/colors";

import PrimaryButton from "./PrimaryButton";
import flagIcon from "../assets/images/home/flag.webp";
import shareIcon from "../assets/images/home/share.webp";

import FlagRouteModal from "./FlagRouteModal";
import FlagReasonModal from "./FlagReasonModal";
import LocationAccessModal from "./LocationAccessModal";
import ThankYouFlagModal from "./ThankYouFlagModal";

import { supabase } from "../supabaseClient";

export default function NavigationMode({ place, route, onBack, onStart }) {
  const [showFlagModal, setShowFlagModal] = useState(false);
  const [showReasonModal, setShowReasonModal] = useState(false);
  const [showLocationModal, setShowLocationModal] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);

  if (!place || !route) return null;

  // ● bullet icon
  const bullet = (
    <span
      style={{
        width: 6,
        height: 6,
        borderRadius: "50%",
        background: "#FFC000",
        display: "inline-block",
      }}
    />
  );

  // Dummy steps for now
  const steps = [
    {
      id: 1,
      instruction: "Turn left onto Santol St./Santol St. Extension",
      sub: "Upcoming well-lit street",
      distance: "100m",
    },
    {
      id: 2,
      instruction: "Turn left onto Santol St./Santol St. Extension",
      sub: "Steep ramp in 50m",
      distance: "100m",
    },
  ];

  // ---------------------------------------------------------
  // SAVE FLAG TO SUPABASE
  // ---------------------------------------------------------
  async function saveFlagToSupabase(reason) {
    try {
      let deviceId = localStorage.getItem("deviceId");
      if (!deviceId) {
        deviceId = crypto.randomUUID();
        localStorage.setItem("deviceId", deviceId);
      }

      const { error } = await supabase.from("route_flags").insert({
        route_id: route?.id || "unknown-route",
        reason: reason,
        device_id: deviceId,
        place_name: place?.name || null,
      });

      if (error) {
        console.error("❌ Failed to save route flag:", error);
      } else {
        console.log("✅ Route flagged successfully");
      }
    } catch (err) {
      console.error("Unexpected Supabase error:", err);
    }
  }

  // ---------------------------------------------------------
  // RENDER UI
  // ---------------------------------------------------------
  return (
    <>
      {/* LOCATION ACCESS MODAL */}
      {showLocationModal && (
        <LocationAccessModal
          onClose={() => setShowLocationModal(false)}
          onEnable={() => {
            setShowLocationModal(false);
            onStart(); // Live nav begins
          }}
          onManual={() => {
            setShowLocationModal(false);
            onStart();
          }}
        />
      )}

      {/* FLAG ROUTE MODAL */}
      {showFlagModal && (
        <FlagRouteModal
          visible={showFlagModal}
          onClose={() => setShowFlagModal(false)}
          onContinue={() => {
            setShowFlagModal(false);
            setShowReasonModal(true);
          }}
        />
      )}

      {/* REASON MODAL */}
      {showReasonModal && (
        <FlagReasonModal
          visible={showReasonModal}
          onClose={() => setShowReasonModal(false)}
          onSubmit={async (reason) => {
            console.log("🔥 Submitting reason:", reason);   // <--- added
            await saveFlagToSupabase(reason);

            setShowReasonModal(false);
            console.log("🔥 Should show thank you modal now"); // <--- added

            setShowThankYou(true);
            console.log("🔥 Thank you modal state:", true); // <--- added
          }}

        />
      )}

      {/* THANK YOU MODAL */}
      <ThankYouFlagModal
        isOpen={showThankYou}
        onClose={() => setShowThankYou(false)}
      />

      {/* MAIN NAVIGATION PANEL */}
      <div
        style={{
          width: "100%",
          maxWidth: 850,
          backgroundColor: "rgb(244, 246, 255)",
          padding: 20,
          borderRadius: 18,
          margin: "0 auto",
          marginBottom: 30,
        }}
      >
        <div
          style={{
            width: "790px",
            background: "white",
            borderRadius: 14,
            padding: "25px 28px",
          }}
        >
          {/* HEADER */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 20,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <h2
                style={{
                  fontSize: 22,
                  fontWeight: 700,
                  color: colors.purpleDark,
                }}
              >
                Route Overview
              </h2>

              {/* Safety Pill */}
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  padding: "4px 12px",
                  borderRadius: 20,
                  fontSize: 12,
                  fontWeight: 600,
                  background: "#D9F7BE",
                  color: "#0F9D58",
                  border: "2px solid #0F9D58",
                }}
              >
                <span
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: "50%",
                    background: "#0F9D58",
                  }}
                />
                Safe
              </span>

              {/* Flag Button */}
              <button
                onClick={() => setShowFlagModal(true)}
                style={{
                  width: 45,
                  height: 45,
                  borderRadius: 12,
                  border: "2px solid transparent",
                  background: "white",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img src={flagIcon} alt="flag" style={{ width: 22 }} />
              </button>
            </div>

            {/* Back Button */}
            <button
              onClick={onBack}
              style={{
                border: "none",
                background: "none",
                cursor: "pointer",
                color: colors.purpleDark,
                fontSize: 14,
                fontWeight: 600,
              }}
            >
              ← go back
            </button>
          </div>

          {/* DESTINATION + DISTANCE */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: 20,
              alignItems: "center",
            }}
          >
            <h3 style={{ fontSize: 20, fontWeight: 700, color: colors.purpleDark }}>
              {place.name}
            </h3>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                fontWeight: 600,
                fontSize: 15,
                color: colors.purpleDark,
              }}
            >
              <span>{route.distanceKm} km</span>
              {bullet}
              <span>{route.durationMin} min</span>
            </div>
          </div>

          {/* TURN-BY-TURN INSTRUCTIONS */}
          {steps.map((s) => (
            <div
              key={s.id}
              style={{
                padding: "12px 0",
                borderBottom: "1px solid #E5E7FB",
                marginBottom: 8,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                {bullet}
                <span style={{ fontSize: 15, fontWeight: 600 }}>
                  {s.instruction}
                </span>
              </div>

              <div
                style={{
                  marginLeft: 20,
                  color: "#777",
                  fontSize: 13,
                  marginTop: 4,
                }}
              >
                {s.sub}
              </div>

              <div
                style={{
                  marginLeft: 20,
                  marginTop: 4,
                  fontSize: 13,
                  fontWeight: 600,
                  color: colors.purpleDark,
                }}
              >
                {s.distance}
              </div>
            </div>
          ))}

          {/* FOOTER BUTTONS */}
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              gap: 20,
              marginTop: 20,
            }}
          >
            {/* Share */}
            <button
              style={{
                border: "none",
                background: "none",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: 6,
                color: colors.purpleDark,
                fontWeight: 600,
              }}
            >
              <img src={shareIcon} alt="share" style={{ width: 20 }} />
              Share Direction
            </button>

            {/* Start Navigation */}
            <PrimaryButton
              onClick={() => setShowLocationModal(true)}
              style={{ padding: "10px 35px", fontSize: 16, borderRadius: 20 }}
            >
              Start
            </PrimaryButton>
          </div>
        </div>
      </div>
    </>
  );
}
