// src/screens/Report/Step3.jsx
import colors from "../../styles/colors";
import Navbar from "../../components/Navbar";
import PrimaryButton from "../../components/PrimaryButton";
import OutlineButton from "../../components/OutlineButton";
import logo from "../../assets/images/splash/logo-text.png";

export default function Step3({ data, onBack, onSubmit }) {
  const { concern, otherConcern, location, details } = data;

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
            maxWidth: "800px",
            backgroundColor: colors.offWhite,
            borderRadius: "18px",
            padding: "35px 40px",
            boxShadow: "0px 4px 12px rgba(0,0,0,0.10)",
            marginBottom: "30px",
          }}
        >
          {/* Title */}
          <h2
            style={{
              fontSize: "26px",
              margin: 0,
              color: colors.purpleDark,
              fontWeight: 700,
              marginBottom: "5px",
            }}
          >
            Report Incident
          </h2>

          <p
            style={{
              marginTop: "4px",
              fontSize: "14px",
              opacity: 0.7,
              color: colors.purpleDark,
            }}
          >
            Help improve community safety by reporting incidents
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
                gap: "20px",
                marginBottom: "25px",
                alignItems: "center",
              }}
            >
              {/* Step 1 */}
              <div
                style={{
                  width: "50px",
                  height: "4px",
                  backgroundColor: colors.purpleLight,
                  borderRadius: "2px",
                }}
              />
              <div
                style={{
                  width: "26px",
                  height: "26px",
                  borderRadius: "50%",
                  backgroundColor: colors.purpleDark,
                  color: "white",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "13px",
                  fontWeight: "700",
                }}
              >
                1
              </div>

              {/* Step 2 */}
              <div
                style={{
                  width: "50px",
                  height: "4px",
                  backgroundColor: colors.purpleLight,
                  borderRadius: "2px",
                }}
              />
              <div
                style={{
                  width: "26px",
                  height: "26px",
                  borderRadius: "50%",
                  backgroundColor: colors.purpleDark,
                  color: "white",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "13px",
                  fontWeight: "700",
                }}
              >
                2
              </div>

              {/* Step 3 ACTIVE */}
              <div
                style={{
                  width: "50px",
                  height: "4px",
                  backgroundColor: "#E5E5F0",
                  borderRadius: "2px",
                }}
              />
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

            {/* Title */}
            <h2
              style={{
                textAlign: "center",
                fontSize: "22px",
                color: colors.purpleDark,
                marginBottom: "30px",
                fontWeight: "700",
              }}
            >
              Review And Submit
            </h2>

            {/* REVIEW DATA CARD */}
            <div
              style={{
                border: "1px solid #e5e5e5",
                borderRadius: "10px",
                padding: "18px",
                marginBottom: "15px",
              }}
            >
              <p
                style={{
                  margin: 0,
                  fontSize: "14px",
                  color: colors.purpleDark,
                  fontWeight: 600,
                }}
              >
                Incident Type
              </p>
              <p style={{ margin: "5px 0 0", fontSize: "14px", fontWeight: 800, color: colors.purpleDark }}>
                {otherConcern ? otherConcern : concern}
              </p>
            </div>

            <div
              style={{
                border: "1px solid #e5e5e5",
                borderRadius: "10px",
                padding: "18px",
                marginBottom: "15px",
              }}
            >
              <p
                style={{
                  margin: 0,
                  fontSize: "14px",
                  color: colors.purpleDark,
                  fontWeight: 600,
                }}
              >
                Location
              </p>
              <p style={{ margin: "5px 0 0", fontSize: "14px", fontWeight: 800, color: colors.purpleDark }}>
                {location}
              </p>
            </div>

            <div
              style={{
                border: "1px solid #e5e5e5",
                borderRadius: "10px",
                padding: "18px",
                marginBottom: "15px",
              }}
            >
              <p
                style={{
                  margin: 0,
                  fontSize: "14px",
                  fontWeight: 600,
                  color: colors.purpleDark,
                }}
              >
                Community Guidelines:
              </p>

              <p style={{ fontSize: "12px", marginTop: "5px", opacity: 0.7, color: colors.purpleDark, fontWeight: 500 }}>
                Reports are reviewed to ensure accuracy and community standards.  
                False or spam reports may be removed.
              </p>

              <p
                style={{
                  fontSize: "12px",
                  marginTop: "10px",
                  opacity: 0.7,
                  color: colors.purpleDark, 
                  fontWeight: 500,
                }}
              >
                Thank you for helping keep our community safe.
              </p>
            </div>

            {/* BUTTONS */}
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                gap: "12px",
                marginTop: "25px",
              }}
            >
              <OutlineButton
                onClick={onBack}
                style={{
                  padding: "8px 22px",
                  fontSize: "14px",
                }}
              >
                Back
              </OutlineButton>

              <PrimaryButton
                onClick={onSubmit}
                style={{
                  padding: "8px 30px",
                  fontSize: "14px",
                }}
              >
                Submit Report
              </PrimaryButton>
            </div>
          </div>
        </div>

        {/* Bottom Navbar */}
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
