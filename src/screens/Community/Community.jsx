import colors from "../../styles/colors";
import Navbar from "../../components/Navbar";
import logo from "../../assets/images/splash/logo-text.png";

export default function Community() {
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
            Community Safety
          </h2>

          <p
            style={{
              marginTop: "4px",
              fontSize: "14px",
              opacity: 0.7,
              color: colors.purpleDark,
            }}
          >
            Aggregated safety reports from your community
          </p>

          {/* Inner Card */}
          <div
            style={{
              marginTop: "25px",
              borderRadius: "16px",
              padding: "20px 40px",
              display: "flex",
              justifyContent: "center",
              gap: "25px",
            }}
          >
            {/* Safe Reports */}
            <div
              style={{
                backgroundColor: "#ffffffff",
                borderRadius: "12px",
                padding: "20px 25px",
                width: "140px",
                textAlign: "center",
                boxShadow: "0px 2px 8px rgba(0,0,0,0.06)",
              }}
            >
              <h2
                style={{
                  fontSize: "28px",
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
                Safe Reports
              </p>
            </div>

            {/* Moderate */}
            <div
              style={{
                backgroundColor: "#ffffffff",
                borderRadius: "12px",
                padding: "20px 25px",
                width: "140px",
                textAlign: "center",
                boxShadow: "0px 2px 8px rgba(0,0,0,0.06)",
              }}
            >
              <h2
                style={{
                  fontSize: "28px",
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
                Moderate
              </p>
            </div>

            {/* Need Attention */}
            <div
              style={{
                backgroundColor: "#ffffffff",
                borderRadius: "12px",
                padding: "20px 25px",
                width: "140px",
                textAlign: "center",
                boxShadow: "0px 2px 8px rgba(0,0,0,0.06)",
              }}
            >
              <h2
                style={{
                  fontSize: "28px",
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
                Need Attention
              </p>
            </div>
          </div>
        </div>

        {/* SECOND OUTER WHITE CARD — Heat Map */}
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
          {/* Inner Card */}
          <div
            style={{
              background: "#ffffff",
              borderRadius: "16px",
              padding: "60px 40px",
              boxShadow: "0px 3px 12px rgba(0,0,0,0.08)",
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {/* Icon */}
            <img
              src={"/mnt/data/1f50843c-364a-4298-9f50-abdc01b30d16.png"}
              alt="Map Icon"
              style={{
                width: 55,
                height: 55,
                objectFit: "contain",
                marginBottom: "18px",
                opacity: 0.95,
              }}
            />

            {/* Title */}
            <h3
              style={{
                fontSize: "20px",
                margin: 0,
                color: colors.purple,
                fontWeight: 700,
                marginBottom: "6px",
              }}
            >
              Aggregated Safety Heat Map
            </h3>

            {/* Subtitle */}
            <p
              style={{
                margin: 0,
                fontSize: "15px",
                color: colors.purple,
                opacity: 0.7,
              }}
            >
              Showing incidents with blurred location data
            </p>
          </div>
        </div>

        {/* THIRD OUTER WHITE CARD — Recent Reports */}
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
          {/* Section Title */}
          <h2
            style={{
              fontSize: "22px",
              margin: 0,
              color: colors.purpleDark,
              fontWeight: 700,
              marginBottom: "20px",
            }}
          >
            Recent Reports
          </h2>

          {/* ===== REPORT ITEM 1 ===== */}
          <div
            style={{
              background: "#ffffff",
              borderRadius: "14px",
              padding: "20px 25px",
              boxShadow: "0px 2px 8px rgba(0,0,0,0.06)",
              marginBottom: "18px",
            }}
          >
            {/* Header Row */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "6px",
              }}
            >
              {/* Left Title + Badge */}
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <h3
                  style={{
                    margin: 0,
                    fontSize: "18px",
                    fontWeight: 700,
                    color: colors.purpleDark,
                  }}
                >
                  Poor Lighting
                </h3>

                {/* Moderate Badge */}
                <span
                  style={{
                    background: "#FFF3C8",
                    color: "#D7A300",
                    padding: "3px 10px",
                    borderRadius: "10px",
                    fontSize: "12px",
                    fontWeight: 600,
                  }}
                >
                  Moderate
                </span>
              </div>

              {/* Status Badge */}
              <span
                style={{
                  background: "#FFEFBF",
                  color: "#DFA800",
                  padding: "6px 16px",
                  borderRadius: "14px",
                  fontSize: "12px",
                  fontWeight: 600,
                }}
              >
                Pending
              </span>
            </div>

            {/* Meta Info */}
            <p
              style={{
                margin: 0,
                fontSize: "13px",
                color: colors.purpleDark,
                opacity: 0.7,
                marginBottom: "10px",
              }}
            >
              Starbucks near Uptown BGC, Taguig • 2 hours ago
            </p>

            {/* Description */}
            <p
              style={{
                margin: 0,
                fontSize: "14px",
                lineHeight: "20px",
                color: colors.purpleDark,
              }}
            >
              Nire-report ko po ang major outage ng mga street light dito sa block ng 9th Avenue...
            </p>
          </div>

          {/* ===== REPORT ITEM 2 ===== */}
          <div
            style={{
              background: "#ffffff",
              borderRadius: "14px",
              padding: "20px 25px",
              boxShadow: "0px 2px 8px rgba(0,0,0,0.06)",
              marginBottom: "18px",
            }}
          >
            {/* Header Row */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "6px",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <h3
                  style={{
                    margin: 0,
                    fontSize: "18px",
                    fontWeight: 700,
                    color: colors.purpleDark,
                  }}
                >
                  Harrassment
                </h3>

                {/* Danger Badge */}
                <span
                  style={{
                    background: "#FFE5E5",
                    color: "#D63333",
                    padding: "3px 10px",
                    borderRadius: "10px",
                    fontSize: "12px",
                    fontWeight: 600,
                  }}
                >
                  Danger
                </span>
              </div>

              <span
                style={{
                  background: "#E3F3FF",
                  color: "#007BCD",
                  padding: "6px 16px",
                  borderRadius: "14px",
                  fontSize: "12px",
                  fontWeight: 600,
                }}
              >
                Reviewed
              </span>
            </div>

            <p
              style={{
                margin: 0,
                fontSize: "13px",
                color: colors.purpleDark,
                opacity: 0.7,
                marginBottom: "10px",
              }}
            >
              EDSA Busway Station 3 • 5 hours ago
            </p>

            <p
              style={{
                margin: 0,
                fontSize: "14px",
                lineHeight: "20px",
                color: colors.purpleDark,
              }}
            >
              Nire-report ko po yung verbal harassment na akin sa EDSA Busway Station 3...
            </p>
          </div>

          {/* ===== REPORT ITEM 3 ===== */}
          <div
            style={{
              background: "#ffffff",
              borderRadius: "14px",
              padding: "20px 25px",
              boxShadow: "0px 2px 8px rgba(0,0,0,0.06)",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "6px",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <h3
                  style={{
                    margin: 0,
                    fontSize: "18px",
                    fontWeight: 700,
                    color: colors.purpleDark,
                  }}
                >
                  Other Concern
                </h3>

                {/* Safe Badge */}
                <span
                  style={{
                    background: "#E7F8E7",
                    color: "#27A327",
                    padding: "3px 10px",
                    borderRadius: "10px",
                    fontSize: "12px",
                    fontWeight: 600,
                  }}
                >
                  Safe
                </span>
              </div>

              <span
                style={{
                  background: "#E3F3FF",
                  color: "#007BCD",
                  padding: "6px 16px",
                  borderRadius: "14px",
                  fontSize: "12px",
                  fontWeight: 600,
                }}
              >
                Reviewed
              </span>
            </div>

            <p
              style={{
                margin: 0,
                fontSize: "13px",
                color: colors.purpleDark,
                opacity: 0.7,
                marginBottom: "10px",
              }}
            >
              PITX • 5 hours ago
            </p>

            <p
              style={{
                margin: 0,
                fontSize: "14px",
                lineHeight: "20px",
                color: colors.purpleDark,
              }}
            >
              Nire-report ko po ang minor issue dito sa PITX...
            </p>
          </div>
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
