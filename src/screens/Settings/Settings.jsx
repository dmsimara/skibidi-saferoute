import colors from "../../styles/colors";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import logo from "../../assets/images/splash/logo-text.png";
import userIcon from "../../assets/icons/userIcon.png"
import languageIcon from "../../assets/icons/languageIcon.png"
import navIcon from "../../assets/icons/navIcon.png"
import { useState, useEffect } from "react";
import { supabase } from "../../supabaseClient";

export default function Settings() {
  const navigate = useNavigate();

  // Toggle states for each permission
  const [toggles, setToggles] = useState({
    location: true,
    dataSharing: true,
    anonymous: true,
    notifications: true,
    emergencyContact: true,
    cameraMedia: true,
    hideSensitive: true,
    language: true,
    accessibility: false,
  });

  async function handleLogout() {
    try {
      await supabase.auth.signOut();
      navigate("/signin");
    } catch (err) {
      console.error("Logout error:", err);
    }
  }


  const [user, setUser] = useState(null);

  // Check session on load
  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      setUser(data?.user || null);
    });
  }, []);

  function toggleSwitch(key) {
    setToggles((prev) => ({ ...prev, [key]: !prev[key] }));
  }

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
          minHeight: "100vh",
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

        {/* MAIN SETTINGS CARD */}
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
            Settings
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
            Manage your preferences and privacy
          </p>

          {/* ACCOUNT CARD */}
          <div
            style={{
              background: "white",
              padding: "25px 30px",
              borderRadius: "14px",
              boxShadow: "0px 2px 8px rgba(0,0,0,0.06)",
              marginBottom: "35px",
              border: `1px solid #E8E8FF`,
            }}
          >
            <h3
              style={{
                margin: 0,
                fontSize: "18px",
                fontWeight: 700,
                color: colors.purpleDark,
                marginBottom: "15px",
              }}
            >
              Account
            </h3>

            {/* Row: User Info */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "20px",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                <span style={{ fontSize: "28px", opacity: 0.8 }}>
                  <img
                    src={userIcon}
                    alt="user"
                    style={{ width: "32px", height: "32px" }}
                  />
                </span>

                <div>
                  <h4
                    style={{
                      margin: 0,
                      fontSize: "16px",
                      fontWeight: 700,
                      color: colors.purpleDark,
                    }}
                  >
                    {user ? user.email : "Guest User"}
                  </h4>

                  <p
                    style={{
                      margin: 0,
                      fontSize: "12px",
                      opacity: 0.6,
                      color: colors.purpleDark,
                    }}
                  >
                    {user ? "Logged in" : "Using app anonymously"}
                  </p>
                </div>
              </div>

              {/* STATUS PILL */}
              <span
                style={{
                  background: user ? "#E7F0FF" : "#DFFFE5",
                  padding: "6px 14px",
                  borderRadius: "20px",
                  fontSize: "12px",
                  fontWeight: 700,
                  color: user ? "#3A64C9" : "#1A9A30",
                }}
              >
                {user ? "Logged in" : "Guest User"}
              </span>
            </div>

            {/* CTA BUTTON */}
            {!user ? (
              <button
                onClick={() => navigate("/signin")}
                style={{
                  width: "100%",
                  padding: "12px 0",
                  borderRadius: "20px",
                  border: `2px solid ${colors.purple}`,
                  background: "white",
                  color: colors.purple,
                  fontWeight: 700,
                  fontSize: "15px",
                  cursor: "pointer",
                  marginTop: "10px",
                }}
              >
                Sign In for Advanced Features
              </button>
            ) : (
              <button
                style={{
                  width: "100%",
                  padding: "12px 0",
                  borderRadius: "20px",
                  border: `2px solid ${colors.purple}`,
                  background: "white",
                  color: colors.purple,
                  fontWeight: 700,
                  fontSize: "15px",
                  cursor: "pointer",
                  marginTop: "10px",
                }}
              >
                Sync this device’s data to your account?
              </button>
            )}
          </div>

          {/* PERMISSIONS SECTION */}
          <h3
            style={{
              fontSize: "20px",
              margin: "0 0 18px 0",
              fontWeight: 700,
              color: colors.purpleDark,
            }}
          >
            Permissions & Consent
          </h3>

          {[
            {
              key: "location",
              title: "Location Access",
              desc: "Used to suggest safe routes in real time",
            },
            {
              key: "dataSharing",
              title: "Data Sharing",
              desc: "Decide what information the app can collect",
            },
            {
              key: "anonymous",
              title: "Anonymous Reporting",
              desc: "Report safety concerns without revealing your identity",
            },
            {
              key: "notifications",
              title: "Notification and Alerts",
              desc: "Get updates about hazards and road changes",
            },
            {
              key: "emergencyContact",
              title: "Emergency Contact",
              desc: "Let trusted people be alerted in case of emergency",
            },
            {
              key: "cameraMedia",
              title: "Camera & Media",
              desc: "Upload photos for incident reports",
            },
            {
              key: "hideSensitive",
              title: "Hide Sensitive Media and Information",
              desc: "Masks sensitive fields (e.g., phone, email, exact address, and faces in photos) in shares, reports, and public views.",
            },
          ].map((item) => (
            <div
              key={item.key}
              style={{
                background: "white",
                padding: "18px 22px",
                borderRadius: "12px",
                boxShadow: "0px 2px 8px rgba(0,0,0,0.06)",
                marginBottom: "14px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
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

              {/* Toggle Switch */}
              <div
                onClick={() => toggleSwitch(item.key)}
                style={{
                  width: "50px",
                  height: "26px",
                  borderRadius: "20px",
                  background: toggles[item.key] ? colors.purple : "#ccc",
                  display: "flex",
                  alignItems: "center",
                  padding: "3px",
                  cursor: "pointer",
                  transition: "0.2s ease",
                }}
              >
                <div
                  style={{
                    width: "20px",
                    height: "20px",
                    borderRadius: "50%",
                    background: "white",
                    transform: toggles[item.key]
                      ? "translateX(24px)"
                      : "translateX(0px)",
                    transition: "0.2s ease",
                  }}
                />
              </div>
            </div>
          ))}

          {/* CONSENT HISTORY */}
          <h3
            style={{
              fontSize: "20px",
              margin: "30px 0 12px 0",
              fontWeight: 700,
              color: colors.purpleDark,
            }}
          >
            Consent History
          </h3>

          <div style={{ textAlign: "right", marginBottom: "10px" }}>
            <span
              style={{
                fontSize: "13px",
                color: colors.purple,
                fontWeight: 600,
                cursor: "pointer",
                textDecoration: "underline",
              }}
            >
              Revoke All Access
            </span>
          </div>

          {[
            { title: "Location access", date: "November 18, 2025", status: "granted" },
            { title: "Camera access", date: "November 18, 2025", status: "revoked" },
            { title: "Notifications", date: "Oct 22, 2025", status: "granted" },
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
                justifyContent: "space-between",
                alignItems: "center",
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
                  {item.date}
                </p>
              </div>

              <span
                style={{
                  padding: "6px 14px",
                  borderRadius: "20px",
                  fontSize: "12px",
                  fontWeight: 600,
                  background:
                    item.status === "granted" ? "#E3FFE9" : "#FFE5E5",
                  color:
                    item.status === "granted" ? "#16A542" : "#D63333",
                }}
              >
                {item.status === "granted" ? "Granted" : "Revoked"}
              </span>
            </div>
          ))}

          {/* APP SETTINGS */}
          <h3
            style={{
              fontSize: "20px",
              margin: "32px 0 16px 0",
              fontWeight: 700,
              color: colors.purpleDark,
            }}
          >
            App Settings
          </h3>

          {[
            {
              icon: languageIcon,
              title: "Language",
              subtitle: "English",
              toggle: "language",
            },
            {
              icon: navIcon,
              title: "Accessibility",
              subtitle: "WCAG AA Compliant",
              toggle: "accessibility",
            },
            {
              icon: navIcon,
              title: "Terms & Conditions",
              subtitle: "Read more about our Terms & Conditions here.",
            },
            {
              icon: navIcon,
              title: "Privacy Policy",
              subtitle: "Read more about Privacy Policies here.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              style={{
                background: "white",
                padding: "18px 22px",
                borderRadius: "12px",
                boxShadow: "0px 2px 8px rgba(0,0,0,0.06)",
                marginBottom: "14px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                <span style={{ fontSize: "22px", opacity: 0.8 }}>
                  <img
                    src={item.icon}
                    alt={item.title}
                    style={{ width: "28px", height: "28px" }}
                  />
                </span>

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
                    {item.subtitle}
                  </p>
                </div>
              </div>

              {item.toggle ? (
                <div
                  onClick={() =>
                    setToggles((prev) => ({
                      ...prev,
                      [item.toggle]: !prev[item.toggle],
                    }))
                  }
                  style={{
                    width: "50px",
                    height: "26px",
                    borderRadius: "20px",
                    background: toggles[item.toggle] ? colors.purple : "#ccc",
                    display: "flex",
                    alignItems: "center",
                    padding: "3px",
                    cursor: "pointer",
                    transition: "0.2s ease",
                  }}
                >
                  <div
                    style={{
                      width: "20px",
                      height: "20px",
                      borderRadius: "50%",
                      background: "white",
                      transform: toggles[item.toggle]
                        ? "translateX(24px)"
                        : "translateX(0px)",
                      transition: "0.2s ease",
                    }}
                  />
                </div>
              ) : (
                <span style={{ width: "30px" }}></span>
              )}
            </div>
          ))}

          {/* PRIVACY NOTICE BOX */}
          <div
            style={{
              border: `2px solid ${colors.purple}`,
              borderRadius: "14px",
              padding: "22px 26px",
              marginTop: "30px",
              marginBottom: "25px",
              textAlign: "center",
            }}
          >
            <h4
              style={{
                margin: 0,
                fontSize: "15px",
                fontWeight: 700,
                color: colors.purpleDark,
                marginBottom: "6px",
              }}
            >
              Your Privacy Matters
            </h4>

            <p
              style={{
                margin: 0,
                fontSize: "13px",
                opacity: 0.7,
                color: colors.purpleDark,
                lineHeight: "20px",
              }}
            >
              You can revoke any permission at any time.
              Some features may be limited when permissions are disabled.
            </p>
          </div>

          {/* SIGN OUT BUTTON */}
          <button
            onClick={handleLogout}
            onMouseEnter={(e) => {
              e.target.style.background = colors.purple;
              e.target.style.color = "white";
              e.target.style.border = `2px solid ${colors.purple}`;
            }}
            onMouseLeave={(e) => {
              e.target.style.background = "white";
              e.target.style.color = colors.purpleDark;
              e.target.style.border = `2px solid ${colors.purple}`;
            }}
            style={{
              padding: "12px 40px",
              borderRadius: "20px",
              border: `2px solid ${colors.purple}`,
              background: "white",
              color: colors.purpleDark,
              fontWeight: 700,
              fontSize: "15px",
              cursor: "pointer",
              display: "block",
              margin: "0 auto",
              marginTop: "10px",
              transition: "0.2s ease",
            }}
          >
            Sign Out
          </button>
        </div>

        {/* Navbar */}
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
