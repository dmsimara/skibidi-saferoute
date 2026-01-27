import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import colors from "../../styles/colors";
import step1 from "../../assets/images/onboarding/step1.png";
import PrimaryButton from "../../components/PrimaryButton";

export default function Step1({ onNext }) {
  const [scale, setScale] = useState(1);
  const [is18, setIs18] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);

  useEffect(() => {
    const updateScale = () => {
      const baseWidth = 760;
      const baseHeight = 540; // smaller virtual height

      const screenW = window.innerWidth;
      const screenH = window.innerHeight;

      const scaleW = screenW / (baseWidth + 120);
      const scaleH = screenH / (baseHeight + 120);

      let finalScale = Math.min(scaleW, scaleH);

      finalScale = Math.max(finalScale, 0.85);
      finalScale = Math.min(finalScale, 1);

      setScale(finalScale);
    };

    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, []);

  const canContinue = is18 && acceptTerms;
  const purpleStrong = { color: colors.purpleDark, fontWeight: 700 };

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
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        style={{
          transform: `scale(${scale})`,
          transformOrigin: "center",
          width: "760px",
        }}
      >
        {/* IMAGE */}
        <div style={{ textAlign: "center", marginBottom: "10px" }}>
          <img
            src={step1}
            alt="Step 1"
            style={{ width: "240px", maxWidth: "90%" }} // smaller image
          />
        </div>

        {/* CARD */}
        <div
          style={{
            backgroundColor: colors.whiteSoft,
            padding: "24px", // reduced padding
            borderRadius: "30px",
            boxShadow: "0px 5px 18px rgba(0,0,0,0.10)",
            textAlign: "center",
          }}
        >
          {/* TITLE */}
          <h2
            style={{
              fontSize: "24px", // smaller
              fontWeight: 700,
              color: colors.purpleDark,
              margin: 0,
            }}
          >
            Light the way for you and others.
          </h2>

          {/* DESCRIPTION */}
          <p
            style={{
              marginTop: "10px",
              fontSize: "18px",
              opacity: 0.9,
              lineHeight: "1.45",
              maxWidth: "90%",
              marginLeft: "auto",
              marginRight: "auto",
              marginBottom: "14px",
            }}
          >
            Every route is rated based on lighting, crowd density, and time-of-day.
            <br />
            Choose the path that matches your comfort level, not just the clock.
          </p>

          {/* TERMS HEADER */}
          <p
            style={{
              marginBottom: "10px",
              marginTop: "0px",
              fontSize: "13px",
              opacity: 0.85,
              textAlign: "left",
            }}
          >
            By continuing, you agree to our{" "}
            <span style={purpleStrong}>Terms &amp; Conditions</span> and{" "}
            <span style={purpleStrong}>Privacy Policies</span>.
          </p>

          {/* CHECKBOXES */}
          <div style={{ textAlign: "left", fontSize: "14px", lineHeight: "1.4" }}>
            <label
              style={{
                display: "flex",
                gap: "8px",
                marginBottom: "10px",
                alignItems: "flex-start",
              }}
            >
              <input
                type="checkbox"
                checked={is18}
                onChange={(e) => setIs18(e.target.checked)}
                style={{ marginTop: "3px" }}
              />
              <span>
                I confirm that I am{" "}
                <span style={purpleStrong}>at least 18 years old</span> and I understand the
                terms, conditions, and community guidelines stated above, including my responsibilities
                for truthful reporting and respectful community participation.
              </span>
            </label>

            <label
              style={{
                display: "flex",
                gap: "8px",
                alignItems: "flex-start",
              }}
            >
              <input
                type="checkbox"
                checked={acceptTerms}
                onChange={(e) => setAcceptTerms(e.target.checked)}
                style={{ marginTop: "3px" }}
              />
              <span>
                I <span style={purpleStrong}>accept</span> these terms and conditions and
                agree to use LIWA responsibly to help build a safer community for everyone.
              </span>
            </label>
          </div>

          {/* BUTTON */}
          <div
            style={{
              marginTop: "18px",
              width: "100%",
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <PrimaryButton
              onClick={onNext}
              disabled={!canContinue}
              style={{
                transform: "scale(0.9)", // slight button reduction
              }}
            >
              Next
            </PrimaryButton>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
