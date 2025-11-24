import colors from "../../styles/colors";
import Navbar from "../../components/Navbar";
import logo from "../../assets/images/splash/logo-text.png";

export default function Community() {
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
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
          position: "relative",
          paddingBottom: "150px",  
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

        <h2 style={{ color: colors.offWhite, marginTop: 20 }}>
          Report an Incident
        </h2>

        {/* CONTENT will be added soon */}
        <p style={{ color: "white", opacity: 0.8 }}>
          (Building the report UI next…)
        </p>

        {/* Persistent Navbar */}
        <div
          style={{
            position: "fixed",
            bottom: "25px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "80%", // same as purple mid container
            display: "flex",
            justifyContent: "center",
            zIndex: 9999
          }}
        >
          <Navbar />
        </div>
      </div>
    </div>
  );
}
