import colors from "../styles/colors";

export default function InfoModal({ title, message, onClose }) {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        background: "rgba(0,0,0,0.25)",
        backdropFilter: "blur(4px)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 99999,
      }}
    >
      <div
        style={{
          width: "420px",
          padding: "34px 34px",
          backgroundColor: colors.whiteSoft,
          borderRadius: "22px",
          boxShadow: "0px 8px 24px rgba(0,0,0,0.13)",
          position: "relative",
          textAlign: "center",
        }}
      >
        {/* Close */}
        <div
          onClick={onClose}
          style={{
            position: "absolute",
            right: "18px",
            top: "16px",
            cursor: "pointer",
            opacity: 0.6,
            fontSize: "16px",
          }}
        >
          ×
        </div>

        <h3
          style={{
            margin: 0,
            fontSize: "20px",
            fontWeight: "700",
            color: colors.purpleDark,
          }}
        >
          {title}
        </h3>

        <p
          style={{
            marginTop: "14px",
            fontSize: "16px",
            opacity: 0.85,
            color: colors.dark,
            lineHeight: 1.5,
          }}
        >
          {message}
        </p>

        <button
          onClick={onClose}
          style={{
            marginTop: "22px",
            padding: "12px 34px",
            backgroundColor: colors.purple,
            color: "white",
            border: "none",
            borderRadius: "12px",
            fontSize: "16px",
            cursor: "pointer",
            fontWeight: "600",
            transition: "0.2s",
          }}
          onMouseOver={(e) =>
            (e.target.style.backgroundColor = colors.purpleDark)
          }
          onMouseOut={(e) => (e.target.style.backgroundColor = colors.purple)}
        >
          OK
        </button>
      </div>
    </div>
  );
}
