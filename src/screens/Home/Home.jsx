import colors from "../../styles/colors";
import Navbar from "../../components/Navbar";
import logo from "../../assets/images/splash/logo-text.png";

export default function Home() {
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
      {/* Purple Mid Container */}
      <div
        style={{
          width: "80%",
          height: "100%",
          backgroundColor: colors.purpleMid,
          borderRadius: "0 0 18px 18px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "relative",
        }}
      >
        {/* LOGO */}
        <img
          src={logo}
          alt="Liwa"
          style={{
            width: 120,
            marginTop: "26px",
            marginBottom: "18px",
          }}
        />

        {/* Main content area (everything uses same width) */}
        <div
          style={{
            width: "88%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "20px",
            // leave space so content never hides behind navbar
            paddingBottom: "110px",
          }}
        >
          {/* SEARCH BAR */}
          <input
            type="text"
            placeholder="🔍  Search for a Destination"
            style={{
              width: "100%",
              height: "38px",
              borderRadius: "16px",
              border: "none",
              outline: "none",
              padding: "0 15px",
              fontSize: "14px",
              backgroundColor: colors.offWhite,
              boxShadow: "0px 3px 10px rgba(0,0,0,0.10)",
            }}
          />

          {/* MAP PREVIEW */}
          <div
            style={{
              width: "100%",
              minHeight: "250px",
              backgroundColor: colors.offWhite,
              borderRadius: "18px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              boxShadow: "0px 4px 14px rgba(0,0,0,0.12)",
              marginTop: "12px",
            }}
          >
            {/* You can swap this emoji with your map icon asset later */}
            <div
              style={{
                fontSize: "60px",
                color: colors.purpleDark,
                opacity: 0.85,
                marginBottom: "10px",
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

          {/* SUGGESTED ROUTES CARD (same width as map preview) */}
          <div
            style={{
              width: "100%",
              backgroundColor: colors.offWhite,
              borderRadius: "18px",
              boxShadow: "0px 4px 14px rgba(0,0,0,0.12)",
              padding: "20px 24px 22px",
              marginTop: "12px",
            }}
          >
            <h3
              style={{
                margin: 0,
                color: colors.purpleDark,
                fontSize: "18px",
                fontWeight: 700,
              }}
            >
              Suggested Routes
            </h3>

            {/* ROUTE CARD 1 */}
            <div
              style={{
                width: "100%",
                backgroundColor: "#FFFFFF",
                borderRadius: "12px",
                padding: "16px 18px 14px",
                marginTop: "18px",
                boxShadow: "0px 2px 8px rgba(0,0,0,0.05)",
              }}
            >
              {/* Top row: label + safety pill */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "4px",
                }}
              >
                <p
                  style={{
                    fontSize: "12px",
                    opacity: 0.7,
                    margin: 0,
                  }}
                >
                  Current Location
                </p>

                <div
                  style={{
                    fontSize: "11px",
                    padding: "3px 10px",
                    borderRadius: "999px",
                    backgroundColor: "#E5FFD8",
                    color: "#179342",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "4px",
                  }}
                >
                  <span
                    style={{
                      width: 6,
                      height: 6,
                      borderRadius: "50%",
                      backgroundColor: "#26C94D",
                    }}
                  />
                  Safe
                </div>
              </div>

              {/* Destination + distance/time */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: "2px",
                }}
              >
                <p
                  style={{
                    fontSize: "16px",
                    fontWeight: 700,
                    margin: 0,
                  }}
                >
                  Mall of Asia
                </p>

                <div
                  style={{
                    fontSize: "11px",
                    opacity: 0.7,
                    display: "flex",
                    gap: "20px",
                  }}
                >
                  <span>1 km</span>
                  <span>12 min</span>
                </div>
              </div>

              {/* Tags + View Route button */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: "10px",
                }}
              >
                <p
                  style={{
                    fontSize: "11px",
                    opacity: 0.7,
                    margin: 0,
                  }}
                >
                  • Good Lighting &nbsp; • Moderate Crowd
                </p>

                <button
                  style={{
                    padding: "6px 16px",
                    borderRadius: "20px",
                    border: `2px solid ${colors.purpleDark}`,
                    background: "#FFFFFF",
                    cursor: "pointer",
                    fontSize: "11px",
                    fontWeight: 600,
                    color: colors.purpleDark,
                  }}
                >
                  View Route
                </button>
              </div>
            </div>

            {/* ROUTE CARD 2 (simple second row) */}
            <div
              style={{
                width: "100%",
                backgroundColor: "#FFFFFF",
                borderRadius: "12px",
                padding: "14px 18px",
                marginTop: "10px",
                boxShadow: "0px 2px 8px rgba(0,0,0,0.05)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "4px",
                }}
              >
                <p
                  style={{
                    fontSize: "12px",
                    opacity: 0.7,
                    margin: 0,
                  }}
                >
                  Current Location
                </p>

                <div
                  style={{
                    fontSize: "11px",
                    padding: "3px 10px",
                    borderRadius: "999px",
                    backgroundColor: "#FFF3CC",
                    color: "#D18A00",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "4px",
                  }}
                >
                  <span
                    style={{
                      width: 6,
                      height: 6,
                      borderRadius: "50%",
                      backgroundColor: "#FFCA2B",
                    }}
                  />
                  Moderate
                </div>
              </div>

              <p
                style={{
                  fontSize: "14px",
                  fontWeight: 600,
                  margin: 0,
                }}
              >
                Another nearby route
              </p>
            </div>
          </div>
        </div>

        {/* NAVBAR – unchanged, just positioned at bottom INSIDE purple mid */}
        <div
          style={{
            position: "absolute",
            bottom: "22px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "88%",
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
