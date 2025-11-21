import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import colors from "../../styles/colors";
import PrimaryButton from "../../components/PrimaryButton";
import step5img from "../../assets/images/onboarding/step5.png";

import { resetAllOnboardingData, saveStep } from "../../utils/preferences";

export default function Step5({ onFinish }) {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const updateScale = () => {
      const baseWidth = 760;
      const baseHeight = 620;

      const screenW = window.innerWidth;
      const screenH = window.innerHeight;

      const scaleW = screenW / (baseWidth + 160);
      const scaleH = screenH / (baseHeight + 160);

      let final = Math.min(scaleW, scaleH);
      final = Math.max(final, 0.92);
      final = Math.min(final, 1);

      setScale(final);
    };

    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, []);

  const handleReset = () => {
    resetAllOnboardingData(); 
    saveStep(1);            
    window.location.reload(); 
  };

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
      {/* Smooth animated content wrapper */}
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
        {/* Scale */}
        <div
          style={{
            transform: `scale(${scale})`,
            transformOrigin: "center",
            width: "760px",
          }}
        >
          {/* ILLUSTRATION */}
          <div style={{ textAlign: "center" }}>
            <img
              src={step5img}
              alt="All Set"
              style={{
                width: "330px",
                maxWidth: "90%",
                marginBottom: "30px",
              }}
            />
          </div>

          {/* WHITE CARD */}
          <div
            style={{
              backgroundColor: colors.whiteSoft,
              padding: "45px 50px",
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
              You’re all set!
            </h2>

            <p
              style={{
                marginTop: "10px",
                fontSize: "18px",
                opacity: 0.9,
                color: colors.dark,
                lineHeight: "1.5",
                maxWidth: "85%",
              }}
            >
              Together, we light the way to safer journeys.
            </p>

            {/* BUTTONS ROW */}
            <div
              style={{
                marginTop: "30px",
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              {/* ⭐ DEV-ONLY RESET BUTTON */}
              {process.env.NODE_ENV === "development" && (
                <button
                  onClick={handleReset}
                  style={{
                    background: "transparent",
                    border: "2px solid #aaa",
                    color: "#666",
                    padding: "10px 18px",
                    borderRadius: "8px",
                    cursor: "pointer",
                    fontSize: "14px",
                  }}
                >
                  Reset onboarding
                </button>
              )}

              {/* FINISH BUTTON */}
              <PrimaryButton onClick={onFinish}>
                Start your journey
              </PrimaryButton>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
