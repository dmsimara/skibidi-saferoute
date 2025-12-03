// src/screens/Report/Step4.jsx
import colors from "../../styles/colors";
import Navbar from "../../components/Navbar";
import PrimaryButton from "../../components/PrimaryButton";
import OutlineButton from "../../components/OutlineButton";
import logo from "../../assets/images/splash/logo-text.png";
import checkIcon from "../../assets/images/report/check.png";

export default function Step4({ trackingId, onNewReport, onViewReports }) {
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
              textAlign: "center",
            }}
          >
            {/* Step Progress */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "20px",
                marginBottom: "25px",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  width: "50px",
                  height: "4px",
                  backgroundColor: colors.purpleDark,
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

              <div
                style={{
                  width: "50px",
                  height: "4px",
                  backgroundColor: colors.purpleDark,
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

              <div
                style={{
                  width: "50px",
                  height: "4px",
                  backgroundColor: colors.purpleDark,
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
                3
              </div>
            </div>

            {/* Check Icon */}
            <img
              src={checkIcon}
              alt="Success"
              style={{
                width: 140,
                height: 140,
                objectFit: "contain",
              }}
            />

            {/* Report Submitted */}
            <h2
              style={{
                fontSize: "30px",
                color: colors.purpleDark,
                fontWeight: 700,
                marginBottom: "12px",
              }}
            >
              Report Submitted
            </h2>

            {/* Description */}
            <p
              style={{
                fontSize: "16px",
                color: colors.purpleDark,
              }}
            >
              Your report has been received.
            </p>

            {/* Tracking ID (static for now) */}
            <p
              style={{
                fontSize: "16px",
                marginTop: "-10px",
                color: colors.purpleDark,
              }}
            >
              <strong>Tracking ID:</strong>{" "}
              <u>#{trackingId}</u>
            </p>

            {/* Buttons */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "12px",
                marginTop: "25px",
              }}
            >
              <PrimaryButton
                onClick={onNewReport}
                style={{
                  padding: "10px 30px",
                  fontSize: "14px",
                  width: "60%",
                  borderRadius: "18px",
                }}
              >
                Submit Another Report
              </PrimaryButton>

              <OutlineButton
                onClick={onViewReports}
                style={{
                  padding: "10px 30px",
                  fontSize: "14px",
                  width: "60%",
                  borderRadius: "18px",
                }}
              >
                View Community Reports
              </OutlineButton>
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
