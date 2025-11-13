import colors from "../styles/colors";

export default function ToggleSwitch({ title, description, isOn, onToggle }) {
  return (
    <div
      style={{
        backgroundColor: "#EFEFEF",
        padding: "18px 22px",
        borderRadius: "24px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        cursor: "pointer",
      }}
      onClick={onToggle}
    >
      {/* TEXT */}
      <div>
        <div
          style={{
            fontSize: "18px",
            fontWeight: "600",
            color: colors.dark,
          }}
        >
          {title}
        </div>

        <div
          style={{
            fontSize: "14px",
            opacity: 0.7,
            color: colors.dark,
            marginTop: "3px",
            lineHeight: "1.4",
          }}
        >
          {description}
        </div>
      </div>

      {/* SWITCH */}
      <div
        style={{
          width: "75px",
          height: "34px",
          borderRadius: "20px",
          backgroundColor: isOn ? colors.purpleDark : "#CFCFCF",
          display: "flex",
          alignItems: "center",
          position: "relative",
          transition: "0.2s ease",
        }}
      >
        {/* ON / OFF Label */}
        <span
          style={{
            position: "absolute",
            left: isOn ? "12px" : "auto",
            right: isOn ? "auto" : "12px",
            color: isOn ? "white" : "#666",
            fontWeight: 700,
            fontSize: "12px",
          }}
        >
          {isOn ? "ON" : "OFF"}
        </span>

        {/* Knob */}
        <div
          style={{
            width: "26px",
            height: "26px",
            borderRadius: "50%",
            backgroundColor: "white",
            transition: "0.2s ease",
            transform: isOn ? "translateX(35px)" : "translateX(0px)",
          }}
        ></div>
      </div>
    </div>
  );
}
