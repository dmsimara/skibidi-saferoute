import { useLocation, useNavigate } from "react-router-dom";
import colors from "../styles/colors";

import homeIcon from "../assets/icons/home.png";
import reportIcon from "../assets/icons/report.png";
import communityIcon from "../assets/icons/community.png";
import dashboardIcon from "../assets/icons/dashboard.png";
import settingsIcon from "../assets/icons/settings.png";

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const items = [
    { label: "Home", icon: homeIcon, path: "/home" },
    { label: "Report", icon: reportIcon, path: "/report" },
    { label: "Community", icon: communityIcon, path: "/community" },
    { label: "Dashboard", icon: dashboardIcon, path: "/dashboard" },
    { label: "Settings", icon: settingsIcon, path: "/settings" },
  ];

  return (
    <div
      style={{
        width: "85%",
        height: "70px",
        backgroundColor: colors.offWhite,
        borderRadius: "18px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 35px",
        boxShadow: "0px 3px 12px rgba(0,0,0,0.08)",
      }}
    >
      {items.map((item) => {
        const isActive = location.pathname === item.path;

        return (
          <div
            key={item.label}
            onClick={() => navigate(item.path)}
            style={{
              width: "80px",
              height: "58px",
              borderRadius: "14px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "6px",
              cursor: "pointer",

              backgroundColor: isActive
                ? `${colors.purpleLight}33`
                : "transparent",
            }}
          >
            <img src={item.icon} alt={item.label} style={{ width: 22 }} />
            <p
              style={{
                margin: 0,
                fontSize: 12,
                fontWeight: isActive ? 600 : 500,
                color: colors.purpleDark,
              }}
            >
              {item.label}
            </p>
          </div>
        );
      })}
    </div>
  );
}
