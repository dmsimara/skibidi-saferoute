import colors from "../styles/colors";

export default function OutlineButton({ children, onClick, style }) {
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: "transparent",
        padding: "12px 50px",
        borderRadius: "28px",
        border: `2px solid ${colors.purple}`,
        fontSize: "18px",
        cursor: "pointer",
        fontWeight: "600",
        color: colors.purple,
        transition: "0.2s ease",
        ...style,
      }}
      onMouseOver={(e) => {
        e.target.style.backgroundColor = colors.purpleDark;
        e.target.style.color = "white";
        e.target.style.borderColor = colors.purpleDark;
      }}
      onMouseOut={(e) => {
        e.target.style.backgroundColor = "transparent";
        e.target.style.color = colors.purple;
        e.target.style.borderColor = colors.purple;
      }}
    >
      {children}
    </button>
  );
}
