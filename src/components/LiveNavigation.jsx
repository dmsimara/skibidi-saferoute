// src/components/LiveNavigation.jsx
import React, { useEffect, useState } from "react";
import colors from "../styles/colors";
import PrimaryButton from "./PrimaryButton";
import ArrivalModal from "./ArrivalModal";

export default function LiveNavigation({ place, route, onExit }) {
  const [showArrival, setShowArrival] = useState(false);

  // Simulate arrival after 8 seconds (replace with distance logic later)
  useEffect(() => {
    const timer = setTimeout(() => setShowArrival(true), 8000);
    return () => clearTimeout(timer);
  }, []);

  const steps = [
    { id: 1, text: "Continue straight for 200m" },
    { id: 2, text: "Turn left onto Main St." },
    { id: 3, text: "Destination will be on the right" },
  ];

  return (
    <div
      style={{
        width: "100%",
        maxWidth: 850,
        backgroundColor: "rgb(244, 246, 255)",
        padding: 20,
        borderRadius: 18,
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
        {/* Top Bar */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 10,
          }}
        >
          <h2 style={{ color: colors.purpleDark }}>Live Navigation</h2>

          <button
            onClick={onExit}
            style={{
              background: "none",
              border: "none",
              fontSize: 14,
              fontWeight: 600,
              color: colors.purpleDark,
              cursor: "pointer",
            }}
          >
            ← exit
          </button>
        </div>

        {/* Next turn direction */}
        <div
          style={{
            padding: "14px 0",
            marginBottom: 18,
            borderBottom: "1px solid #E5E7FB",
          }}
        >
          <h3 style={{ fontSize: 20, color: colors.purpleDark }}>
            Next: {steps[0].text}
          </h3>
        </div>

        {/* Steps list */}
        {steps.map((s) => (
          <div
            key={s.id}
            style={{
              padding: "10px 0",
              borderBottom: "1px solid #EFEFFE",
              fontSize: 15,
              color: "#333",
            }}
          >
            • {s.text}
          </div>
        ))}
      </div>

      {/* Arrival modal */}
      <ArrivalModal
        isOpen={showArrival}
        onClose={() => {
          setShowArrival(false);
          onExit();
        }}
        place={place}
      />
    </div>
  );
}
