import { useEffect, useRef, useState } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";

import colors from "../../styles/colors";
import Navbar from "../../components/Navbar";
import logo from "../../assets/images/splash/logo-text.png";
import { supabase } from "../../supabaseClient";

export default function Community() {
  const [reports, setReports] = useState([]);
  const [showSortMenu, setShowSortMenu] = useState(false);
  const [sortOption, setSortOption] = useState("date");

  useEffect(() => {
    async function fetchReports() {
      const { data, error } = await supabase
        .from("reports")
        .select("*")
        .order("created_at", { ascending: false })
        .limit(50);

      if (!error && data) {
        setReports(data);

        // Compute dynamic counts
        const safe = data.filter(r => r.severity === "Safe").length;
        const moderate = data.filter(r => r.severity === "Moderate").length;
        const danger = data.filter(r => r.severity === "Danger").length;

        setStats({ safe, moderate, danger });
      }
    }

    fetchReports();
  }, []);

  const [stats, setStats] = useState({
    safe: 0,
    moderate: 0,
    danger: 0,
  });


  const mapContainerRef = useRef(null);

  useEffect(() => {
    if (!mapContainerRef.current) return;

    const map = new maplibregl.Map({
      container: mapContainerRef.current,
      style: "https://tiles.openfreemap.org/styles/liberty/style.json",
      center: [0, 0],
      zoom: 1,
    });

    // Mock safety incident data
    const mockPoints = {
      type: "FeatureCollection",
      features: [
        { type: "Feature", geometry: { type: "Point", coordinates: [121.056, 14.554] } },
        { type: "Feature", geometry: { type: "Point", coordinates: [121.060, 14.552] } },
        { type: "Feature", geometry: { type: "Point", coordinates: [121.058, 14.556] } },
        { type: "Feature", geometry: { type: "Point", coordinates: [121.062, 14.553] } },
        { type: "Feature", geometry: { type: "Point", coordinates: [121.055, 14.551] } },
        { type: "Feature", geometry: { type: "Point", coordinates: [121.063, 14.557] } },
      ],
    };

    map.on("load", () => {
      // 🔐 Ensure correct sizing
      map.resize();

      map.addSource("heatmap-points", {
        type: "geojson",
        data: mockPoints,
      });

      map.on("style.load", () => {
        map.resize();

        map.addSource("heatmap-points", {
          type: "geojson",
          data: mockPoints,
        });

        map.addLayer({
          id: "heatmap-layer",
          type: "heatmap",
          source: "heatmap-points",
          paint: {
            "heatmap-weight": 1,
            "heatmap-intensity": 1.3,
            "heatmap-radius": 40,
            "heatmap-opacity": 0.55,
            "heatmap-color": [
              "interpolate",
              ["linear"],
              ["heatmap-density"],
              0, "rgba(0,0,0,0)",
              0.2, "#7DD3FC",
              0.4, "#34D399",
              0.6, "#FACC15",
              0.8, "#FB923C",
              1, "#EF4444"
            ]
          }
        });
      });
    });

    return () => map.remove();
  }, []);

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

          {/* Stats Row */}
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
                {stats.safe}
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
                {stats.moderate}
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
                {stats.danger}
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
          <h2
            style={{
              fontSize: "22px",
              margin: 0,
              color: colors.purpleDark,
              fontWeight: 700,
              marginBottom: "18px",
            }}
          >
            Community Safety Heat Map
          </h2>

          {/* ACTUAL MAPLIRE HEATMAP */}
          <div
            ref={mapContainerRef}
            style={{
              width: "100%",
              height: "350px",
              borderRadius: "14px",
              overflow: "hidden",
              boxShadow: "0px 3px 12px rgba(0,0,0,0.08)",
            }}
          />
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
          {/* Section Title + Sort Button */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "20px",
            }}
          >
            <h2
              style={{
                fontSize: "22px",
                margin: 0,
                color: colors.purpleDark,
                fontWeight: 700,
              }}
            >
              Recent Reports
            </h2>

            {/* SORT BUTTON */}
            <div style={{ position: "relative" }}>
              <button
                onClick={() => setShowSortMenu(!showSortMenu)}
                style={{
                  background: "white",
                  padding: "2px 25px",
                  borderRadius: "12px",
                  border: "2px solid #D8D8FF",
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  cursor: "pointer",
                  fontWeight: 600,
                  color: colors.purple,
                  boxShadow: "0px 2px 6px rgba(0,0,0,0.05)",
                }}
              >
                {/* Sort Icon */}
                <span style={{ display: "flex", flexDirection: "column", marginRight: "4px" }}>
                  <span style={{ color: colors.purpleDark }}>↑</span>
                  <span style={{ color: colors.purple }}>↓</span>
                </span>
                Sort
              </button>

              {/* DROPDOWN MENU */}
              {showSortMenu && (
                <div
                  style={{
                    position: "absolute",
                    right: 0,
                    top: "48px",
                    background: "white",
                    borderRadius: "12px",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.12)",
                    width: "150px",
                    padding: "10px 0",
                    zIndex: 50,
                  }}
                >
                  {[
                    { key: "safety", label: "by Safety" },
                    { key: "date", label: "by Date" },
                    { key: "rating", label: "by Rating" },
                    { key: "area", label: "by Area" },
                  ].map((item) => (
                    <div
                      key={item.key}
                      onClick={() => {
                        setSortOption(item.key);
                        setShowSortMenu(false);
                      }}
                      style={{
                        padding: "10px 16px",
                        cursor: "pointer",
                        color: colors.purple,
                        fontSize: "14px",
                      }}
                      onMouseOver={(e) => (e.target.style.background = "#F2EEFF")}
                      onMouseOut={(e) => (e.target.style.background = "white")}
                    >
                      {item.label}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* RECENT REPORTS LIST — DYNAMIC */}
          {reports.length === 0 ? (
            <p style={{ opacity: 0.6, fontSize: "14px", textAlign: "center" }}>
              No recent reports available.
            </p>
          ) : (
            reports.map((rep) => {
              const title = rep.concern === "Other" ? rep.other_concern : rep.concern;

              const statusStyles =
                rep.status === "Reviewed"
                  ? { bg: "#1E90FF", text: "#ffffff", icon: "✓" } 
                  : { bg: "#FFC107", text: "#ffffff", icon: "⏱" }; 

              const showDot = rep.severity === "Moderate"; 

              // Avatar: if you don't have an avatar field, show initials fallback
              const initials =
                (rep.reporter_name || rep.user_name || "U")
                  .split(" ")
                  .filter(Boolean)
                  .slice(0, 2)
                  .map((w) => w[0].toUpperCase())
                  .join("") || "U";

              return (
                <div
                  key={rep.id}
                  style={{
                    background: "#ffffff",
                    borderRadius: "14px",
                    padding: "22px 26px",
                    boxShadow: "0px 2px 8px rgba(0,0,0,0.06)",
                    marginBottom: "18px",
                    border: "1px solid #E9E6FF",
                  }}
                >
                  {/* Top Row: Title + Status */}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      gap: "14px",
                    }}
                  >
                    <h3
                      style={{
                        margin: 0,
                        fontSize: "22px",
                        fontWeight: 800,
                        color: colors.purpleDark,
                      }}
                    >
                      {title}
                    </h3>

                    {/* Status pill (Pending/Reviewed) */}
                    <span
                      style={{
                        background: statusStyles.bg,
                        color: statusStyles.text,
                        padding: "6px 12px",
                        borderRadius: "14px",
                        fontSize: "13px",
                        fontWeight: 700,
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "10px",
                        minWidth: "100px",
                        justifyContent: "center",
                      }}
                    >
                      <span
                        style={{
                          width: "22px",
                          height: "22px",
                          borderRadius: "50%",
                          background: "rgba(255,255,255,0.25)",
                          display: "inline-flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "13px",
                          fontWeight: 900,
                          lineHeight: 1,
                        }}
                      >
                        {statusStyles.icon}
                      </span>
                      {rep.status?.[0]?.toUpperCase() + rep.status?.slice(1)}
                    </span>
                  </div>

                  {/* Location line */}
                  <div
                    style={{
                      marginTop: "10px",
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <p
                      style={{
                        margin: 0,
                        fontSize: "14px",
                        color: colors.purple,
                        opacity: 0.9,
                      }}
                    >
                      {rep.location_name}
                    </p>

                    {showDot && (
                      <span
                        style={{
                          width: "6px",
                          height: "6px",
                          borderRadius: "50%",
                          background: "#FACC15",
                          display: "inline-block",
                          transform: "translateY(1px)",
                        }}
                      />
                    )}
                  </div>

                  {/* Divider with centered avatar */}
                  <div style={{ position: "relative", marginTop: "14px", marginBottom: "14px" }}>
                    <div
                      style={{
                        height: "1px",
                        background: "#E6E0FF",
                        width: "100%",
                      }}
                    />
                  </div>

                  {/* Description */}
                  <p
                    style={{
                      margin: 0,
                      fontSize: "14px",
                      lineHeight: "1.5",
                      color: colors.purple,
                      opacity: 0.9,
                    }}
                  >
                    {rep.details}
                  </p>
                </div>
              );
            })

          )}

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
