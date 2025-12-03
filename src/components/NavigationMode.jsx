// src/components/NavigationMode.jsx
import React from "react";
import colors from "../styles/colors";
import PrimaryButton from "./PrimaryButton";

export default function NavigationMode({ place, route, onBack, onStart }) {
  if (!place || !route) return null;

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

  // Dummy steps (later replaced with API-generated route steps)
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

  return (
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
      {/* White Inner Card */}
      <div
        style={{
          width: "790px",
          background: "white",
          borderRadius: 14,
          padding: "25px 28px",
        }}
      >
        {/* Header */}
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

            {/* Safety pill */}
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

        {/* Destination + Distance/Time */}
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

        {/* Steps List */}
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

        {/* Footer Buttons */}
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
            📤 Share Direction
          </button>

          {/* Start */}
          <PrimaryButton
            onClick={onStart}
            style={{ padding: "10px 35px", fontSize: 16, borderRadius: 20 }}
          >
            Start
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
}
