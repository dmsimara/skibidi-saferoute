import { useEffect, useState } from "react";
import colors from "../../styles/colors";

import pin from "../../assets/images/splash/pin.png";
import shadowImg from "../../assets/images/splash/shadow.png";
import pinWhite from "../../assets/images/splash/logo-pin-white.png";
import logoText from "../../assets/images/splash/logo-text.png";

export default function Splash({ onFinish }) {
  const [phase, setPhase] = useState(1); // 1 → 2 → 3 → 4
  const [radialScale, setRadialScale] = useState(0);

  const curve = "cubic-bezier(0.22, 1, 0.36, 1)"; // smart-animate feel

  useEffect(() => {
    // EXACT TIMELINE
    setTimeout(() => setPhase(2), 1700); // message 2
    setTimeout(() => {
      setPhase(3);

      // animate radial expansion
      setTimeout(() => {
        setRadialScale(1);
      }, 50);
    }, 3400);

    setTimeout(() => setPhase(4), 4700); // show logo
    setTimeout(() => onFinish(), 5900); // finish onboarding
  }, [onFinish]);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background:
          phase < 3
            ? colors.offWhite
            : colors.purpleLight,
        position: "relative",
      }}
    >
      {/* PHASE 1 & 2 — PIN + SHADOW + DOTS */}
      {phase < 3 && (
        <div
          style={{
            textAlign: "center",
            opacity: phase < 3 ? 1 : 0,
            transition: "opacity 0.6s " + curve,
          }}
        >
          {/* Purple pin */}
          <img
            src={pin}
            alt="Pin"
            style={{ width: 120, marginBottom: 20 }}
          />

          {/* Shadow */}
          <img
            src={shadowImg}
            alt="Shadow"
            style={{ width: 130, opacity: 0.45 }}
          />

          {/* Animated dots */}
          <div style={{ marginTop: 8, display: "flex", justifyContent: "center", gap: 6 }}>
            <span className="dot dot1"></span>
            <span className="dot dot2"></span>
            <span className="dot dot3"></span>
          </div>

          {/* Messages */}
          <p
            style={{
              marginTop: 14,
              fontSize: 14,
              fontWeight: 500,
              color: colors.purpleDark,
              transition: "opacity 0.4s " + curve,
              opacity: phase === 1 ? 1 : 0,
              position: phase === 1 ? "relative" : "absolute",
            }}
          >
            Safety shouldn’t be uncertain.
          </p>

          <p
            style={{
              marginTop: 14,
              fontSize: 14,
              fontWeight: 500,
              color: colors.purpleDark,
              transition: "opacity 0.4s " + curve,
              opacity: phase === 2 ? 1 : 0,
              position: phase === 2 ? "relative" : "absolute",
            }}
          >
            Move freely, with confidence.
          </p>
        </div>
      )}

      {/* PHASE 3 — RADIAL EXPANSION + WHITE PIN */}
      {phase >= 3 && (
        <div
          style={{
            position: "absolute",
            width: "220vmax",
            height: "220vmax",
            borderRadius: "50%",
            background: colors.purpleLight,
            transform: `scale(${radialScale})`,
            transition: "transform 1.4s " + curve,
          }}
        ></div>
      )}

      {phase === 3 && (
        <img
          src={pinWhite}
          alt="White Pin"
          style={{
            width: 110,
            position: "absolute",
            opacity: radialScale === 1 ? 1 : 0,
            transition: "opacity 0.8s " + curve + " 0.4s",
          }}
        />
      )}

      {/* PHASE 4 — FINAL LOGO */}
      {phase === 4 && (
        <div
          style={{
            position: "absolute",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            opacity: 1,
            animation: "fadeIn 1s " + curve,
          }}
        >
          <img
            src={logoText}
            alt="Liwa Logo"
            style={{ width: 320, marginBottom: 10 }}
          />
        </div>
      )}

      {/* DOT ANIMATION CSS */}
      <style>
        {`
          .dot {
            width: 10px;
            height: 10px;
            background: ${colors.purpleDark};
            border-radius: 50%;
            display: inline-block;
            opacity: 0.4;
            animation: bounce 1.2s infinite;
          }

          .dot1 { animation-delay: 0s; }
          .dot2 { animation-delay: 0.2s; }
          .dot3 { animation-delay: 0.4s; }

          @keyframes bounce {
            0%, 80%, 100% { transform: translateY(0); opacity: 0.4; }
            40% { transform: translateY(-6px); opacity: 1; }
          }

          @keyframes fadeIn {
            from { opacity: 0; transform: scale(0.96); }
            to { opacity: 1; transform: scale(1); }
          }
        `}
      </style>
    </div>
  );
}
