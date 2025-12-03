import React, { useState } from "react";
import colors from "../styles/colors";

export default function HeartButton({ liked, onToggle }) {
  const [hover, setHover] = useState(false);

  const filled = liked || hover;

  return (
    <button
      onClick={onToggle}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        background: "none",
        border: "none",
        cursor: "pointer",
        fontSize: 22,
        padding: 0,
      }}
    >
      <span
        style={{
          color: filled ? colors.purple : "#C4C4C4",
          transition: "0.2s ease",
        }}
      >
        {filled ? "💜" : "🤍"}
      </span>
    </button>
  );
}
