import { useState } from "react";
import colors from "../../styles/colors";
import Navbar from "../../components/Navbar";
import logo from "../../assets/images/splash/logo-text.png";
import PrimaryButton from "../../components/PrimaryButton";


export default function Step1({ onNext }) {
  const [selected, setSelected] = useState(null);
  const [otherText, setOtherText] = useState("");

  const handleQuickExit = () => {
    // Clear current Step 1 input/state (wipes what's on screen)
    setSelected(null);
    setOtherText("");

    sessionStorage.removeItem("reportDraft");
    localStorage.removeItem("reportDraft");

    sessionStorage.setItem("liwa_quick_exit", "1");
    window.location.assign("/home");
  };


  const concerns = [
    { label: "Harassment", icon: require("../../assets/images/report/harassment.png") },
    { label: "Theft", icon: require("../../assets/images/report/theft.png") },
    { label: "Unsafe Area", icon: require("../../assets/images/report/unsafe-area.png") },
    { label: "Poor Lighting", icon: require("../../assets/images/report/lighting.png") },
    { label: "Suspicious Activity", icon: require("../../assets/images/report/suspicious.png") },
    { label: "Other Concern", icon: require("../../assets/images/report/other.png") },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100vw",
        overflowX: "hidden",
        overflowY: "auto",
        background: `radial-gradient(circle, ${colors.offWhite} 0%, ${colors.purpleLight} 100%)`,
        display: "flex",
        justifyContent: "center",
      }}
    >
      {/* Purple Main Container */}
      <div
        style={{
          width: "80%",
          minHeight: "100%",
          backgroundColor: colors.purpleMid,
          borderRadius: "0 0 18px 18px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingTop: "30px",
          paddingBottom: "30px",
        }}
      >
        {/* Logo */}
        <img
          src={logo}
          alt="Liwa"
          style={{
            width: 120,
            marginBottom: "25px",
          }}
        />

        {/* Outer White Card */}
        <div
          style={{
            width: "70%",
            backgroundColor: colors.offWhite,
            borderRadius: "18px",
            padding: "35px 40px",
            boxShadow: "0px 4px 12px rgba(0,0,0,0.10)",
            marginBottom: "30px",
          }}
        >
          {/* Title Row */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "5px",
            }}
          >
            <h2
              style={{
                fontSize: "26px",
                margin: 0,
                color: colors.purpleDark,
                fontWeight: 700,
              }}
            >
              Report Incident
            </h2>

            {/* Quick Exit Button */}
            <button
              type="button"
              onClick={handleQuickExit}
              style={{
                background: "#330972",
                color: "#fff",
                border: "none",
                borderRadius: "20px",
                padding: "10px 16px",
                fontSize: "12px",
                fontWeight: 600,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              {/* White icon (SVG) */}
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ display: "block" }}
              >
                <path
                  d="M13 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm-3 17v-6l-2 2-2-2 3.5-3.5c.4-.4.9-.6 1.4-.6H13c.6 0 1.1.2 1.5.6L17 15l-2 2-2-2v7h-3Zm9-9h-4v-2h4v2Z"
                  fill="#FFFFFF"
                />
              </svg>

              Quick-exit
            </button>
          </div>

          <p
            style={{
              marginTop: "4px",
              fontSize: "14px",
              opacity: 0.7,
              color: colors.purpleDark,
            }}
          >
            Contribute safely and privately to keep community safety guidance up to date.
          </p>

          {/* Inner Card */}
          <div
            style={{
              background: "#ffffff",
              marginTop: "25px",
              borderRadius: "16px",
              padding: "35px 40px",
              boxShadow: "0px 3px 12px rgba(0,0,0,0.08)",
            }}
          >
            {/* Progress Steps */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "20px",
                marginBottom: "25px",
              }}
            >
              <div
                style={{
                  width: "50px",
                  height: "4px",
                  backgroundColor: "#E5E5F0",
                  borderRadius: "2px",
                }}
              />

              {/* STEP 1 — ACTIVE (light-purple circle) */}
              <div
                style={{
                  width: "26px",
                  height: "26px",
                  borderRadius: "50%",
                  backgroundColor: "#E8E4FF", // light purple
                  color: colors.purpleDark,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "13px",
                  fontWeight: "700",
                }}
              >
                1
              </div>

              {/* Line after Step 1 — light purple */}
              <div
                style={{
                  width: "50px",
                  height: "4px",
                  backgroundColor: "#E5E5F0",
                  borderRadius: "2px",
                }}
              />

              {/* STEP 2 — inactive (gray) */}
              <div
                style={{
                  width: "26px",
                  height: "26px",
                  borderRadius: "50%",
                  backgroundColor: "#E5E5F0",
                  color: "#444",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "13px",
                  fontWeight: "700",
                }}
              >
                2
              </div>

              {/* Line between Step 2 and 3 (gray) */}
              <div
                style={{
                  width: "50px",
                  height: "4px",
                  backgroundColor: "#E5E5F0",
                  borderRadius: "2px",
                }}
              />

              {/* STEP 3 — inactive (gray) */}
              <div
                style={{
                  width: "26px",
                  height: "26px",
                  borderRadius: "50%",
                  backgroundColor: "#E5E5F0",
                  color: "#444",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "13px",
                  fontWeight: "700",
                }}
              >
                3
              </div>
            </div>

            {/* Anonymous Box */}
            <div
              style={{
                border: `2px solid ${colors.purple}`,
                padding: "12px 20px",
                borderRadius: "12px",
                textAlign: "center",
                marginBottom: "25px",
              }}
            >
              <p
                style={{
                  fontWeight: 700,
                  fontSize: "14px",
                  color: colors.purpleDark,
                  margin: 0,
                  marginBottom: "6px",
                }}
              >
                You’re Reporting Anonymously
              </p>
              <p
                style={{
                  margin: 0,
                  fontSize: "12px",
                  opacity: 0.6,
                  color: colors.purpleDark,
                }}
              >
                No account or name will be attached to this submission.
                <br />
                Your privacy is protected.
              </p>
            </div>

            {/* Heading */}
            <h3
              style={{
                textAlign: "center",
                marginBottom: "25px",
                fontSize: "18px",
                color: colors.purpleDark,
                fontWeight: 700,
              }}
            >
              What type of concern would<br />you like to report?
            </h3>

            {/* Concern Grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "18px",
                marginBottom: "30px",
              }}
            >
              {concerns.map((item) => {
                const isActive = selected === item.label;
                return (
                  <div
                    key={item.label}
                    onClick={() => setSelected(item.label)}
                    style={{
                      padding: "20px 10px",
                      borderRadius: "14px",
                      border: `2px solid ${isActive ? colors.purple : colors.purpleLight
                        }`,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                      backgroundColor: isActive
                        ? `${colors.purpleLight}33`
                        : "white",
                      transition: "0.2s ease",
                    }}
                  >
                    <img
                      src={item.icon}
                      alt={item.label}
                      style={{
                        width: 42,
                        height: 42,
                        objectFit: "contain",
                        marginBottom: "10px",
                      }}
                    />

                    <p
                      style={{
                        margin: 0,
                        fontSize: "14px",
                        color: colors.purpleDark,
                        fontWeight: 600,
                        textAlign: "center",
                      }}
                    >
                      {item.label}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Other Concern text field */}
            {selected === "Other Concern" && (
              <input
                type="text"
                placeholder="Add your other concern..."
                value={otherText}
                onChange={(e) => setOtherText(e.target.value)}
                style={{
                  width: "100%",
                  height: "45px",
                  borderRadius: "12px",
                  border: `2px solid ${colors.purpleLight}`,
                  outline: "none",
                  padding: "0 15px",
                  fontSize: "14px",
                  marginBottom: "25px",
                }}
              />
            )}

            {/* TERMS */}
            <p
              style={{
                textAlign: "center",
                fontSize: 11,
                opacity: 0.6,
                marginTop: 20,
              }}
            >
              Reports are reviewed by trusted safety administrators. Only high-risk or disputed
              <br />
              cases are escalated. You can track the status anonymously.
              <span style={{ color: colors.darkPurple }}> Learn More</span>{" "}
            </p>

            {/* Next button */}
            <div style={{ textAlign: "right" }}>
              <PrimaryButton
                onClick={() =>
                  onNext({
                    concern: selected,
                    otherConcern: selected === "Other Concern" ? otherText : "",
                  })
                }
                style={{
                  padding: "10px 30px",
                  borderRadius: "18px",
                  fontSize: "14px",
                }}
                disabled={!selected}
              >
                Next
              </PrimaryButton>
            </div>
          </div>
        </div>

        {/* NAVBAR — stays at the bottom of content */}
        <div
          style={{
            width: "85%",
            marginTop: "auto",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Navbar active="Report" />
        </div>
      </div>
    </div>
  );
}
