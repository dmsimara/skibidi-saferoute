import { useState, useEffect } from "react";
import colors from "../../styles/colors";
import step1 from "../../assets/images/onboarding/step1.png";
import PrimaryButton from "../../components/PrimaryButton";

export default function Step1({ onNext }) {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const updateScale = () => {
      const baseWidth = 760;     
      const baseHeight = 620;    

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

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: `radial-gradient(circle, ${colors.offWhite} 0%, ${colors.purpleLight} 100%)`,
      }}
    >
      <div
        style={{
          transform: `scale(${scale})`,
          transformOrigin: "center",
          width: "760px",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <img
            src={step1}
            alt="Step 1"
            style={{ width: "330px", maxWidth: "100%" }}
          />
        </div>

        <div
          style={{
            backgroundColor: colors.whiteSoft,
            padding: "40px",
            marginTop: "30px",
            borderRadius: "35px",
            boxShadow: "0px 6px 22px rgba(0,0,0,0.10)",
          }}
        >
          <h2
            style={{
              fontSize: "32px",
              fontWeight: 700,
              color: colors.purpleDark,
              margin: 0,
            }}
          >
            Light the way for you and others.
          </h2>

          <p
            style={{
              marginTop: "20px",
              fontSize: "20px",
              opacity: 0.9,
              lineHeight: "1.6",
              maxWidth: "95%",
            }}
          >
            Find safer routes. Share insights. Travel with confidence.
            Every report, reminder, and act of care helps make our community safer.
          </p>

          <div style={{ marginTop: "15px", display: "flex", justifyContent: "flex-end" }}>
            <PrimaryButton onClick={onNext}>Next</PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
}
