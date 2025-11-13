import colors from "../styles/colors";

export default function PreferenceTile({ title, desc, isSelected, onClick }) {
  return (
    <div
      onClick={onClick}
      style={{
        backgroundColor: isSelected ? `${colors.purple}15` : "#EFEFEF",
        padding: "22px",
        borderRadius: "20px",
        cursor: "pointer",
        border: isSelected
          ? `3px solid ${colors.purple}`
          : "3px solid transparent",
        transition: "0.2s ease",
        userSelect: "none",
      }}
    >
      <div
        style={{
          fontSize: "18px",
          fontWeight: "600",
          color: colors.dark,
          marginBottom: "5px",
        }}
      >
        {title}
      </div>

      <div
        style={{
          fontSize: "14px",
          opacity: 0.7,
          color: colors.dark,
        }}
      >
        {desc}
      </div>
    </div>
  );
}
