import colors from "../styles/colors";
import homeIcon from "../assets/icons/home.png";
import reportIcon from "../assets/icons/report.png";
import communityIcon from "../assets/icons/community.png";
import dashboardIcon from "../assets/icons/dashboard.png";
import settingsIcon from "../assets/icons/settings.png";

export default function Navbar() {
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

      {/* ---- ACTIVE MENU ITEM ---- */}
      <NavItemActive icon={homeIcon} label="Home" />

      {/* ---- INACTIVE ITEMS ---- */}
      <NavItem icon={reportIcon} label="Report" />
      <NavItem icon={communityIcon} label="Community" />
      <NavItem icon={dashboardIcon} label="Dashboard" />
      <NavItem icon={settingsIcon} label="Settings" />

    </div>
  );
}

function NavItemActive({ icon, label }) {
  return (
    <div
      style={{
        width: "80px",
        height: "58px",
        borderRadius: "14px",
        backgroundColor: `${colors.purpleLight}33`, 
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "6px",
      }}
    >
      <img src={icon} alt={label} style={{ width: 22 }} />
      <p
        style={{
          margin: 0,
          fontSize: 12,
          fontWeight: 600,
          color: colors.purpleDark,
        }}
      >
        {label}
      </p>
    </div>
  );
}

function NavItem({ icon, label }) {
  return (
    <div
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
      }}
    >
      <img src={icon} alt={label} style={{ width: 22 }} />
      <p
        style={{
          margin: 0,
          fontSize: 12,
          color: colors.purpleDark,
          fontWeight: 500,
        }}
      >
        {label}
      </p>
    </div>
  );
}
