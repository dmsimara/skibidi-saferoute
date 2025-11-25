import colors from "../styles/colors";

export default function PrimaryButton({
  children,
  onClick,
  style,
  disabled = false,
}) {
  return (
    <button
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      style={{
        backgroundColor: disabled ? "#b9b2ff" : colors.purple,
        color: "white",
        padding: "12px 50px",
        borderRadius: "28px",
        border: "none",
        fontSize: "18px",
        cursor: disabled ? "not-allowed" : "pointer",
        fontWeight: "600",
        transition: "0.2s ease",
        opacity: disabled ? 0.6 : 1,
        ...style,
      }}
      onMouseOver={(e) => {
        if (!disabled) e.target.style.backgroundColor = colors.purpleDark;
      }}
      onMouseOut={(e) => {
        if (!disabled) e.target.style.backgroundColor = colors.purple;
      }}
    >
      {children}
    </button>
  );
}
