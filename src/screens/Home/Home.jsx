import colors from "../../styles/colors";
import Navbar from "../../components/Navbar";
import logo from "../../assets/images/splash/logo-text.png";

export default function Home() {
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        overflowY: "auto", // <— SCREEN scrolls, NOT purple container
        background: `radial-gradient(circle, ${colors.offWhite} 0%, ${colors.purpleLight} 100%)`,
        display: "flex",
        justifyContent: "center",
      }}
    >
      {/* PURPLE MID CONTAINER */}
      <div
        style={{
          width: "80%",
          minHeight: "100%",
          backgroundColor: colors.purpleMid,
          borderRadius: "0 0 18px 18px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "relative",
          paddingBottom: "150px", // space so content does NOT go under navbar
        }}
      >
        {/* LOGO */}
        <img
          src={logo}
          alt="Liwa"
          style={{
            width: 120,
            marginTop: "30px",
            marginBottom: "25px",
          }}
        />

        {/* SHARED CONTENT WRAPPER (ALL MUST MATCH IN WIDTH) */}
        <div
          style={{
            width: "85%",    // <— THE TRUE WIDTH for both cards
            display: "flex",
            flexDirection: "column",
            gap: "25px",
          }}
        >
          {/* SEARCH BAR */}
          <input
            type="text"
            placeholder="🔍  Search for a Destination"
            style={{
              width: "100%",
              height: "45px",
              borderRadius: "12px",
              border: "none",
              outline: "none",
              padding: "0 15px",
              fontSize: "15px",
              backgroundColor: colors.offWhite,
              boxShadow: "0px 3px 10px rgba(0,0,0,0.10)",
            }}
          />

          {/* MAP PREVIEW CARD */}
          <div
            style={{
              width: "100%",
              minHeight: "260px",
              backgroundColor: colors.offWhite,
              borderRadius: "18px",
              padding: "30px 0",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              boxShadow: "0px 4px 14px rgba(0,0,0,0.12)",
            }}
          >
            <div
              style={{
                fontSize: "60px",
                color: colors.purpleDark,
                opacity: 0.85,
                marginBottom: "12px",
              }}
            >
              🗺️
            </div>

            <p
              style={{
                fontSize: "18px",
                color: colors.purpleDark,
                fontWeight: 600,
                opacity: 0.9,
              }}
            >
              Map Preview with Overlay
            </p>
          </div>

          {/* SUGGESTED ROUTES CARD — SAME EXACT WIDTH */}
          <div
            style={{
              width: "100%",
              backgroundColor: colors.offWhite,
              borderRadius: "18px",
              padding: "25px",
              boxShadow: "0px 4px 14px rgba(0,0,0,0.12)",
            }}
          >
            <h3
              style={{
                margin: 0,
                color: colors.purpleDark,
                fontSize: "20px",
                fontWeight: 700,
              }}
            >
              Suggested Routes
            </h3>

            {/* ROUTE BOX */}
            <div
              style={{
                marginTop: "20px",
                backgroundColor: "white",
                borderRadius: "12px",
                padding: "20px",
                boxShadow: "0px 2px 8px rgba(0,0,0,0.06)",
              }}
            >
              <p style={{ fontSize: "13px", opacity: 0.7, margin: 0 }}>
                Current Location
              </p>

              <p
                style={{
                  fontSize: "18px",
                  fontWeight: 700,
                  marginTop: "5px",
                  marginBottom: "10px",
                }}
              >
                Mall of Asia
              </p>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: "10px",
                }}
              >
                <p style={{ fontSize: "12px", opacity: 0.7 }}>
                  • Good Lighting &nbsp; • Moderate Crowd
                </p>

                <button
                  style={{
                    padding: "6px 14px",
                    borderRadius: "20px",
                    border: `2px solid ${colors.purpleDark}`,
                    background: "white",
                    cursor: "pointer",
                    fontSize: "12px",
                    fontWeight: 600,
                  }}
                >
                  View Route
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* NAVBAR */}
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
