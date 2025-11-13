import { useState, useEffect } from "react";
import colors from "../../styles/colors";
import PrimaryButton from "../../components/PrimaryButton";
import OutlineButton from "../../components/OutlineButton";
import PreferenceTile from "../../components/PreferenceTile";
import step4img from "../../assets/images/onboarding/step4.png";

import {
  saveRoutePreferences,
  loadRoutePreferences,
} from "../../utils/preferences";

export default function Step4({ onNext, onBack }) {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const updateScale = () => {
      const baseWidth = 760;
      const baseHeight = 780;

      const screenW = window.innerWidth;
      const screenH = window.innerHeight;

      const scaleW = screenW / (baseWidth + 160);
      const scaleH = screenH / (baseHeight + 160);

      let finalScale = Math.min(scaleW, scaleH);

      finalScale = Math.max(finalScale, 0.92);
      finalScale = Math.min(finalScale, 1);

      setScale(finalScale);
    };

    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, []);

  const [selected, setSelected] = useState(() => loadRoutePreferences());

  const toggleSelect = (key) => {
    setSelected((prev) =>
      prev.includes(key)
        ? prev.filter((x) => x !== key)
        : [...prev, key]
    );
  };

  const options = [
    { key: "wellLit", title: "Well-lit areas", desc: "Safer streets at night" },
    { key: "avoidIsolated", title: "Avoid isolated areas", desc: "Stick to busier routes" },
    { key: "avoidTraffic", title: "Avoid high-traffic areas", desc: "Less crowded streets" },
    { key: "bikePaths", title: "Bike lanes / shared paths", desc: "Safer if cycling" },
    { key: "sidewalks", title: "Sidewalks / pedestrian-friendly", desc: "Easier and safer walking" },
    { key: "avoidSteep", title: "Avoid steep / difficult terrain", desc: "Easier for walking or biking" },
  ];

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        overflow: "hidden",
        background: `radial-gradient(circle, ${colors.offWhite} 0%, ${colors.purpleLight} 100%)`,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* Scaled container */}
      <div
        style={{
          transform: `scale(${scale})`,
          transformOrigin: "center",
          width: "760px",
        }}
      >
        {/* CARD */}
        <div
          style={{
            backgroundColor: colors.whiteSoft,
            padding: "40px",
            borderRadius: "35px",
            boxShadow: "0px 6px 22px rgba(0,0,0,0.10)",
            position: "relative",
          }}
        >
          {/* Illustration inside the card */}
          <img
            src={step4img}
            alt="Preferences"
            style={{
              position: "absolute",
              top: "40px",
              right: "50px",
              width: "140px",
              height: "auto",
            }}
          />

          {/* Title */}
          <h2
            style={{
              fontSize: "32px",
              fontWeight: 700,
              color: colors.purpleDark,
              margin: 0,
            }}
          >
            You are in control
          </h2>

          {/* Subtitle */}
          <p
            style={{
              marginTop: "12px",
              fontSize: "20px",
              opacity: 0.9,
              lineHeight: "1.5",
              width: "60%",
            }}
          >
            Choose what matters most for your route. Pick as many as you like.
          </p>

          {/* GRID OPTIONS */}
          <div
            style={{
              marginTop: "32px",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "20px",
              width: "100%",
            }}
          >
            {options.map((opt) => (
              <PreferenceTile
                key={opt.key}
                title={opt.title}
                desc={opt.desc}
                isSelected={selected.includes(opt.key)}
                onClick={() => toggleSelect(opt.key)}
              />
            ))}
          </div>

          {/* BUTTONS */}
          <div
            style={{
              marginTop: "35px",
              display: "flex",
              justifyContent: "flex-end",
              gap: "12px",
            }}
          >
            <OutlineButton onClick={onBack}>Back</OutlineButton>
            <PrimaryButton
              onClick={() => {
                saveRoutePreferences(selected);
                onNext();
              }}
            >
              Next
            </PrimaryButton>
          </div>
        </div>

        {/* FOOTER (outside card, scaled with everything) */}
        <p
          style={{
            marginTop: "16px",
            fontSize: "14px",
            opacity: 0.75,
            textAlign: "center",
            color: colors.dark,
            maxWidth: "100%",
          }}
        >
          Your privacy is our priority. You can modify these settings anytime in your
          Privacy Dashboard.
        </p>
      </div>
    </div>
  );
}
