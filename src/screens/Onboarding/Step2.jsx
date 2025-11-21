import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import colors from "../../styles/colors";
import step2 from "../../assets/images/onboarding/step2.png";
import PrimaryButton from "../../components/PrimaryButton";
import OutlineButton from "../../components/OutlineButton";

export default function Step2({ onNext, onBack }) {
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
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={{
          transform: `scale(${scale})`,
          transformOrigin: "center",
          width: "760px",
        }}
      >
        <div
          style={{
            transform: `scale(${scale})`,
            transformOrigin: "center",
            width: "760px",
          }}
        >
          {/* Illustration */}
          <div style={{ textAlign: "center" }}>
            <img
              src={step2}
              alt="Step 2"
              style={{ width: "330px", maxWidth: "100%" }}
            />
          </div>

          {/* White Card */}
          <div
            style={{
              backgroundColor: colors.whiteSoft,
              padding: "40px",
              marginTop: "30px",
              borderRadius: "35px",
              boxShadow: "0px 6px 22px rgba(0,0,0,0.10)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",      
              textAlign: "center",
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
              Carefully made for safer journeys.
            </h2>

            <p
              style={{
                marginTop: "20px",
                fontSize: "20px",
                opacity: 0.9,
                lineHeight: "1.6",
              }}
            >
              Liwa guides you safely using data responsibly, without compromising your
              privacy.
              <br />
              Your trust and safety come first, every time.
            </p>

            {/* Buttons */}
            <div
              style={{
                marginTop: "15px",
                display: "flex",
                justifyContent: "flex-end",
                gap: "12px",
                width: "100%",
              }}
            >
              <OutlineButton onClick={onBack}>Back</OutlineButton>
              <PrimaryButton onClick={onNext}>Next</PrimaryButton>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
