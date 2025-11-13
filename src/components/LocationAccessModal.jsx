import colors from "../styles/colors";
import PrimaryButton from "./PrimaryButton";
import OutlineButton from "./OutlineButton";

export default function LocationAccessModal({ onClose, onEnable, onManual }) {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        height: "100vh",
        width: "100vw",
        backdropFilter: "blur(4px)",
        backgroundColor: "rgba(0,0,0,0.25)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999,
      }}
    >
      {/* MODAL CARD */}
      <div
        style={{
          backgroundColor: colors.whiteSoft,
          width: "380px",
          padding: "28px 32px",
          borderRadius: "22px",
          boxShadow: "0px 8px 26px rgba(0,0,0,0.15)",
          position: "relative",
          textAlign: "left",
        }}
      >
        {/* CANCEL BUTTON */}
        <div
          onClick={onClose}
          style={{
            position: "absolute",
            top: "14px",
            right: "18px",
            color: colors.dark,
            opacity: 0.6,
            fontSize: "14px",
            cursor: "pointer",
          }}
        >
          ← cancel
        </div>

        {/* TITLE */}
        <h2
          style={{
            margin: 0,
            fontSize: "20px",
            fontWeight: 700,
            color: colors.purpleDark,
          }}
        >
          Location Sharing
        </h2>

        {/* SUBTITLE */}
        <p
          style={{
            marginTop: "6px",
            marginBottom: "24px",
            color: colors.dark,
            opacity: 0.8,
            fontSize: "15px",
          }}
        >
          Allow location access?
        </p>

        {/* BUTTONS */}
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <PrimaryButton
            onClick={onEnable}
            style={{ width: "100%", justifyContent: "center", display: "flex" }}
          >
            Turn on location
          </PrimaryButton>

          <OutlineButton
            onClick={onManual}
            style={{ width: "100%", justifyContent: "center", display: "flex" }}
          >
            Enter location manually
          </OutlineButton>
        </div>
      </div>
    </div>
  );
}
