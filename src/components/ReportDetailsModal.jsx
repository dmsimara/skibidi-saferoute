import React from "react";
import colors from "../styles/colors";

export default function ReportDetailsModal({ isOpen, onClose, report }) {
  if (!isOpen || !report) return null;

  const safetyColors = {
    Safe: { bg: "#D9F7BE", text: "#0F9D58" },
    "Moderately Safe": { bg: "#FFE8B0", text: "#C98A00" },
    Unsafe: { bg: "#FFD6D6", text: "#C53D3D" },
  };

  // ⭐ Render stars based on LIKES
  const renderStars = (likes = 0) => {
    const rating = Math.min(5, likes); // max 5 stars

    return (
      <div style={{ display: "flex", gap: 4 }}>
        {[1, 2, 3, 4, 5].map((n) => (
          <span
            key={n}
            style={{
              fontSize: 26,            // ⭐ larger stars
              color: n <= rating ? "#FFC107" : "#CFCFCF",
            }}
          >
            ★
          </span>
        ))}
      </div>
    );
  };

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
      <div
        style={{
          width: 850,
          background: "white",
          borderRadius: 20,
          padding: "30px 32px",
          boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
          position: "relative",
        }}
      >
        {/* Go Back */}
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
            color: colors.purpleDark,
            marginBottom: 20,
          }}
        >
          Route Safety Report
        </h2>

        {/* INNER CARD */}
        <div
          style={{
            background: "#F8F9FF",
            padding: "22px 24px",
            borderRadius: 14,
            border: "1px solid #E1E4FB",
          }}
        >
          {/* Concern + Severity + Stars (ONE ROW) */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 14,
            }}
          >
            {/* LEFT: concern + severity pill */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                flexShrink: 0,
              }}
            >
              {/* Concern title */}
              <h3
                style={{
                  fontSize: 18,
                  fontWeight: 700,
                  color: colors.purpleDark,
                  margin: 0,
                }}
              >
                {report.other_concern || report.concern || "Unknown Concern"}
              </h3>

              {/* Severity pill */}
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  padding: "4px 12px",
                  borderRadius: 20,
                  fontSize: 12,
                  fontWeight: 600,
                  background: safetyColors[report.severity]?.bg || "#EEE",
                  color: safetyColors[report.severity]?.text || "#555",
                  border: `2px solid ${
                    safetyColors[report.severity]?.text || "#AAA"
                  }`,
                }}
              >
                <span
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: "50%",
                    background: safetyColors[report.severity]?.text || "#555",
                  }}
                />
                {report.severity || "Safe"}
              </span>
            </div>

            {/* RIGHT: Stars */}
            {renderStars(report.likes)}
          </div>

          {/* Location + Date */}
          <p
            style={{
              fontSize: 14,
              color: "#666",
              marginBottom: 15,
            }}
          >
            {report.location_name} •{" "}
            {new Date(report.created_at).toLocaleDateString()}
          </p>

          {/* Description */}
          <p
            style={{
              fontSize: 15,
              lineHeight: "22px",
              whiteSpace: "pre-wrap",
              color: "#444",
            }}
          >
            {report.details}
          </p>
        </div>
      </div>
    </div>
  );
}
