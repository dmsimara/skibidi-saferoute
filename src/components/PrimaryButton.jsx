import colors from "../styles/colors";

export default function PrimaryButton({ children, onClick, style }) {
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: colors.purple,
        color: "white",
        padding: "12px 50px",
        borderRadius: "28px",
        border: "none",
        fontSize: "18px",
        cursor: "pointer",
        fontWeight: "600",
        transition: "0.2s ease",
        ...style,
      }}
      onMouseOver={(e) => (e.target.style.backgroundColor = colors.purpleDark)}
      onMouseOut={(e) => (e.target.style.backgroundColor = colors.purple)}
    >
      {children}
    </button>
  );
}
