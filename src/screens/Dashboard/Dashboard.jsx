import colors from "../../styles/colors";
import Navbar from "../../components/Navbar";
import logo from "../../assets/images/splash/logo-text.png";

export default function Dashboard() {
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
            marginTop: "30px",
            marginBottom: "25px",
          }}
        />

        {/* MAIN DASHBOARD CARD */}
        <div
          style={{
            width: "75%",
            maxWidth: "900px",
            backgroundColor: colors.offWhite,
            borderRadius: "18px",
            padding: "40px 45px",
            boxShadow: "0px 4px 12px rgba(0,0,0,0.10)",
            marginBottom: "40px",
          }}
        >
          {/* Title */}
          <h2
            style={{
              fontSize: "28px",
              margin: 0,
              color: colors.purpleDark,
              fontWeight: 700,
              marginBottom: "6px",
            }}
          >
            My Dashboard
          </h2>

          {/* Subtitle */}
          <p
            style={{
              marginTop: "4px",
              fontSize: "14px",
              opacity: 0.7,
              color: colors.purpleDark,
              marginBottom: "25px",
            }}
          >
            Manage your data and privacy settings
          </p>

          {/* PRIVACY STATUS CARD */}
          <div
            style={{
              backgroundColor: "white",
              borderRadius: "14px",
              padding: "25px 30px",
              boxShadow: "0px 2px 8px rgba(0,0,0,0.06)",
              marginBottom: "30px",
            }}
          >
            {/* Header */}
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <span
                style={{
                  fontSize: "26px",
                  color: colors.purpleDark,
                }}
              >
                🔒
              </span>
              <div>
                <h3
                  style={{
                    margin: 0,
                    fontSize: "20px",
                    fontWeight: 700,
                    color: colors.purpleDark,
                  }}
                >
                  Privacy Status
                </h3>
                <p
                  style={{
                    margin: 0,
                    fontSize: "13px",
                    opacity: 0.7,
                    color: colors.purpleDark,
                  }}
                >
                  All systems secure
                </p>
              </div>
            </div>

            {/* Stats Row */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "25px",
                padding: "0 15px",
              }}
            >
              {/* Routes */}
              <div style={{ textAlign: "center", width: "33%" }}>
                <h2
                  style={{
                    fontSize: "30px",
                    margin: 0,
                    color: "#20A020",
                    fontWeight: 700,
                  }}
                >
                  156
                </h2>
                <p
                  style={{
                    margin: 0,
                    marginTop: "4px",
                    fontSize: "13px",
                    color: "#20A020",
                    opacity: 0.85,
                  }}
                >
                  Routes
                </p>
              </div>

              {/* Feedback */}
              <div style={{ textAlign: "center", width: "33%" }}>
                <h2
                  style={{
                    fontSize: "30px",
                    margin: 0,
                    color: "#E6A800",
                    fontWeight: 700,
                  }}
                >
                  89
                </h2>
                <p
                  style={{
                    margin: 0,
                    marginTop: "4px",
                    fontSize: "13px",
                    color: "#E6A800",
                    opacity: 0.85,
                  }}
                >
                  Feedback
                </p>
              </div>

              {/* Reports */}
              <div style={{ textAlign: "center", width: "33%" }}>
                <h2
                  style={{
                    fontSize: "30px",
                    margin: 0,
                    color: "#E32626",
                    fontWeight: 700,
                  }}
                >
                  65
                </h2>
                <p
                  style={{
                    margin: 0,
                    marginTop: "4px",
                    fontSize: "13px",
                    color: "#E32626",
                    opacity: 0.85,
                  }}
                >
                  Reports
                </p>
              </div>
            </div>
          </div>

          {/* MY DATA SECTION */}
          <h3
            style={{
              fontSize: "20px",
              margin: 0,
              fontWeight: 700,
              color: colors.purpleDark,
              marginBottom: "18px",
            }}
          >
            My Data
          </h3>

          {/* LIST ITEMS */}
          {[
            { title: "Routes & Navigation", info: "24 items • Today" },
            { title: "Safety Feedback", info: "12 items • Yesterday" },
            { title: "Incident Reports", info: "24 items • Today" },
          ].map((item, i) => (
            <div
              key={i}
              style={{
                background: "white",
                padding: "18px 22px",
                borderRadius: "12px",
                boxShadow: "0px 2px 8px rgba(0,0,0,0.06)",
                marginBottom: "16px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <div>
                <h4
                  style={{
                    margin: 0,
                    fontSize: "15px",
                    color: colors.purpleDark,
                    fontWeight: 700,
                  }}
                >
                  {item.title}
                </h4>
                <p
                  style={{
                    margin: 0,
                    fontSize: "12px",
                    opacity: 0.5,
                    color: colors.purpleDark,
                  }}
                >
                  {item.info}
                </p>
              </div>

              <span style={{ fontSize: "18px", color: colors.purpleDark }}>
                →
              </span>
            </div>
          ))}

          {/* DATA MANAGEMENT */}
          <h3
            style={{
              fontSize: "20px",
              margin: "35px 0 12px 0",
              fontWeight: 700,
              color: colors.purpleDark,
            }}
          >
            Data Management
          </h3>

          {/* Export My Data */}
          <div
            style={{
              background: "white",
              padding: "18px 22px",
              borderRadius: "12px",
              boxShadow: "0px 2px 8px rgba(0,0,0,0.06)",
              marginBottom: "14px",
              display: "flex",
              alignItems: "center",
              gap: "15px",
              cursor: "pointer",
            }}
          >
            <span style={{ fontSize: "22px" }}>📤</span>
            <div>
              <h4
                style={{
                  margin: 0,
                  fontSize: "15px",
                  fontWeight: 700,
                  color: colors.purpleDark,
                }}
              >
                Export My Data
              </h4>
              <p
                style={{
                  margin: 0,
                  fontSize: "12px",
                  opacity: 0.6,
                  color: colors.purpleDark,
                }}
              >
                Download all your data in JSON format.
              </p>
            </div>
          </div>

          {/* Delete All Data */}
          <div
            style={{
              background: "white",
              padding: "18px 22px",
              borderRadius: "12px",
              boxShadow: "0px 2px 8px rgba(0,0,0,0.06)",
              marginBottom: "25px",
              display: "flex",
              alignItems: "center",
              gap: "15px",
              cursor: "pointer",
              border: "1px solid #FFBDBD",
            }}
          >
            <span style={{ fontSize: "22px", color: "#E32626" }}>🗑️</span>
            <div>
              <h4
                style={{
                  margin: 0,
                  fontSize: "15px",
                  fontWeight: 700,
                  color: "#E32626",
                }}
              >
                Delete All Data
              </h4>
              <p
                style={{
                  margin: 0,
                  fontSize: "12px",
                  opacity: 0.6,
                  color: "#E32626",
                }}
              >
                Permanently remove all your information.
              </p>
            </div>
          </div>

          {/* ACCESS LOG */}
          <h3
            style={{
              fontSize: "20px",
              margin: "25px 0 12px 0",
              fontWeight: 700,
              color: colors.purpleDark,
            }}
          >
            Access Log
          </h3>

          {/* Log Items */}
          {[
            {
              title: "Location access granted",
              desc: "Safe route navigation",
              date: "Oct 25, 2025",
            },
            {
              title: "Data export requested",
              desc: "User request",
              date: "Oct 25, 2025",
            },
            {
              title: "Safety report submitted",
              desc: "Community contribution",
              date: "Oct 25, 2025",
            },
          ].map((log, i) => (
            <div
              key={i}
              style={{
                background: "white",
                padding: "18px 22px",
                borderRadius: "12px",
                boxShadow: "0px 2px 8px rgba(0,0,0,0.06)",
                marginBottom: "12px",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div>
                <h4
                  style={{
                    margin: 0,
                    fontSize: "15px",
                    fontWeight: 700,
                    color: colors.purpleDark,
                  }}
                >
                  {log.title}
                </h4>
                <p
                  style={{
                    margin: 0,
                    fontSize: "12px",
                    opacity: 0.6,
                    color: colors.purpleDark,
                  }}
                >
                  {log.desc}
                </p>
              </div>
              <p
                style={{
                  margin: 0,
                  fontSize: "12px",
                  opacity: 0.6,
                  color: colors.purpleDark,
                }}
              >
                {log.date}
              </p>
            </div>
          ))}

          {/* UNDERSTANDING DATA */}
          <h3
            style={{
              fontSize: "20px",
              margin: "30px 0 18px 0",
              fontWeight: 700,
              color: colors.purpleDark,
            }}
          >
            Understanding Your Data
          </h3>

          {[
            {
              icon: "🗺️",
              title: "Routes:",
              desc: "Anonymized path data used to calculate safety scores",
            },
            {
              icon: "💬",
              title: "Feedback:",
              desc: "Your ratings help improve route recommendations",
            },
            {
              icon: "📄",
              title: "Reports:",
              desc: "Incident submissions (stored with chosen privacy level)",
            },
          ].map((item, i) => (
            <div
              key={i}
              style={{
                background: "white",
                padding: "18px 22px",
                borderRadius: "12px",
                boxShadow: "0px 2px 8px rgba(0,0,0,0.06)",
                marginBottom: "14px",
                display: "flex",
                alignItems: "center",
                gap: "14px",
              }}
            >
              <span style={{ fontSize: "22px" }}>{item.icon}</span>
              <div>
                <h4
                  style={{
                    margin: 0,
                    fontSize: "15px",
                    fontWeight: 700,
                    color: colors.purpleDark,
                  }}
                >
                  {item.title}
                </h4>
                <p
                  style={{
                    margin: 0,
                    fontSize: "12px",
                    opacity: 0.6,
                    color: colors.purpleDark,
                  }}
                >
                  {item.desc}
                </p>
              </div>
            </div>
          ))}

        </div>

        {/* Persistent Navbar */}
        <div
          style={{
            width: "85%",
            marginTop: "auto",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Navbar />
        </div>
      </div>
    </div>
  );
}
