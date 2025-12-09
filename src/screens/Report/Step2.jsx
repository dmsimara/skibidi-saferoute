// src/screens/Report/Step2.jsx
import { useState } from "react";
import colors from "../../styles/colors";
import PrimaryButton from "../../components/PrimaryButton";
import Navbar from "../../components/Navbar";
import logo from "../../assets/images/splash/logo-text.png";
import uploadIcon from "../../assets/images/report/upload.png";
import locationIcon from "../../assets/images/report/location.png";
import OutlineButton from "../../components/OutlineButton";

<style>
  {`
    input::placeholder {
      color: ${colors.purple};
      opacity: 0.8;
    }
    textarea::placeholder {
      color: ${colors.purple};
      opacity: 0.8;
    }
  `}
</style>

export default function Step2({ onNext, onBack }) {
  const [location, setLocation] = useState("");
  const [details, setDetails] = useState("");
  const [media, setMedia] = useState([]);
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const orsKey = process.env.REACT_APP_ORS_KEY;

  const handleMediaUpload = (e) => {
    const files = Array.from(e.target.files || []);
    setMedia([...media, ...files]);
  };

  const removeFile = (index) => {
    setMedia((prev) => prev.filter((_, i) => i !== index));
  };

  async function fetchSuggestions(query) {
    if (!query) {
      setSuggestions([]);
      return;
    }

    try {
      const url = `https://api.openrouteservice.org/geocode/autocomplete?api_key=${orsKey}&text=${encodeURIComponent(
        query
      )}&size=5`;

      const resp = await fetch(url);
      const data = await resp.json();

      if (data?.features) {
        setSuggestions(data.features);
      }
    } catch (err) {
      console.error("Location autocomplete error:", err);
    }
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
            }}
          >
            {/* PROGRESS STEPS */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "20px",
                marginBottom: "25px",
                alignItems: "center",
              }}
            >
              {/* Step 1 Complete */}
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

              {/* Step 2 Active */}
              <div
                style={{
                  width: "50px",
                  height: "4px",
                  backgroundColor: "#E5E5F0",
                  borderRadius: "2px",
                }}
              />
              <div
                style={{
                  width: "26px",
                  height: "26px",
                  borderRadius: "50%",
                  backgroundColor: "#E5E5F0",
                  color: "#444",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "13px",
                  fontWeight: "700",
                }}
              >
                2
              </div>

              {/* Step 3 */}
              <div
                style={{
                  width: "50px",
                  height: "4px",
                  backgroundColor: "#E5E5F0",
                  borderRadius: "2px",
                }}
              />
              <div
                style={{
                  width: "26px",
                  height: "26px",
                  borderRadius: "50%",
                  backgroundColor: "#E5E5F0",
                  color: "#444",
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

            {/* Title */}
            <h2
              style={{
                textAlign: "center",
                fontSize: "22px",
                color: colors.purpleDark,
                marginBottom: "30px",
                fontWeight: "700",
              }}
            >
              Add Details
            </h2>

            {/* LOCATION INPUT */}
            <label
              style={{
                fontSize: "14px",
                color: colors.purpleDark,
                fontWeight: 700,
                marginLeft: "-10px",
              }}
            >
              Location
            </label>

            <div
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                backgroundColor: "#ffffff",
                borderRadius: "10px",
                padding: "10px 12px",
                border: "2px solid #e5e5e5",
                marginTop: "6px",
                marginBottom: "25px",
                marginLeft: "-15px",
              }}
            >
              <img
                src={locationIcon}
                alt="Location Icon"
                style={{
                  width: 18,
                  height: 18,
                  marginRight: "8px",
                  opacity: 0.6,
                  objectFit: "contain",
                }}
              />
              <input
                type="text"
                value={location}
                onChange={(e) => {
                  setLocation(e.target.value);
                  fetchSuggestions(e.target.value);
                }}
                placeholder="Enter Location Name or Area Name"
                style={{
                  width: "100%",
                  border: "none",
                  outline: "none",
                  fontSize: "14px",
                  background: "transparent",
                }}
              />
            </div>

            {/* Suggestions Dropdown */}
            {suggestions.length > 0 && (
              <div
                style={{
                  width: "100%",
                  backgroundColor: "white",
                  borderRadius: "10px",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                  marginTop: "5px",
                  marginBottom: "15px",
                  position: "relative",
                  zIndex: 50,
                  marginLeft: "-15px",
                  padding: "5px 0",
                }}
              >
                {suggestions.map((s, i) => (
                  <div
                    key={i}
                    onClick={() => {
                      const lat = s.geometry.coordinates[1];
                      const lng = s.geometry.coordinates[0];

                      // Fill fields automatically
                      setLocation(s.properties.label);
                      setLatitude(lat);
                      setLongitude(lng);
                      setSuggestions([]);

                      console.log("📌 Selected location:", {
                        name: s.properties.label,
                        lat,
                        lng,
                      });
                    }}
                    style={{
                      padding: "12px 15px",
                      cursor: "pointer",
                      fontSize: "14px",
                      color: colors.purpleDark,
                      borderBottom: "1px solid rgba(0,0,0,0.08)",
                    }}
                  >
                    {s.properties.label}
                  </div>
                ))}
              </div>
            )}


            {/* LATITUDE */}
            <label
              style={{
                fontSize: "14px",
                color: colors.purpleDark,
                fontWeight: 700,
                marginLeft: "-10px",
                marginTop: "10px",
              }}
            >
              Latitude
            </label>

            <input
              type="number"
              step="any"
              value={latitude}
              onChange={(e) => setLatitude(e.target.value)}
              placeholder="Latitude"
              style={{
                width: "97%",
                border: "2px solid #e5e5e5",
                borderRadius: "10px",
                padding: "10px 12px",
                fontSize: "14px",
                outline: "none",
                marginTop: "6px",
                marginBottom: "20px",
                marginLeft: "-15px",
              }}
            />

            {/* LONGITUDE */}
            <label
              style={{
                fontSize: "14px",
                color: colors.purpleDark,
                fontWeight: 700,
                marginLeft: "-10px",
              }}
            >
              Longitude
            </label>

            <input
              type="number"
              step="any"
              value={longitude}
              onChange={(e) => setLongitude(e.target.value)}
              placeholder="Longitude"
              style={{
                width: "97%",
                border: "2px solid #e5e5e5",
                borderRadius: "10px",
                padding: "10px 12px",
                fontSize: "14px",
                outline: "none",
                marginTop: "6px",
                marginBottom: "25px",
                marginLeft: "-15px",
              }}
            />


            {/* DETAILS INPUT */}
            <label
              style={{
                fontSize: "14px",
                color: colors.purpleDark,
                fontWeight: 700,
                marginLeft: "-10px",
              }}
            >
              Additional Details
            </label>

            <textarea
              placeholder="Share any additional information that might help others"
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              style={{
                width: "100%",
                minHeight: "120px",
                resize: "none",
                borderRadius: "10px",
                border: "2px solid #e5e5e5",
                padding: "12px",
                outline: "none",
                fontSize: "14px",
                marginTop: "6px",
                marginBottom: "25px",
                marginLeft: "-15px",
              }}
            />

            {/* UPLOAD MEDIA */}
            <label
              style={{
                fontSize: "14px",
                color: colors.purpleDark,
                fontWeight: 700,
                marginLeft: "-10px",
              }}
            >
              Upload Media
            </label>

            <label
              htmlFor="file-upload"
              onDragOver={(e) => {
                e.preventDefault();
                e.stopPropagation();
              }}
              onDrop={(e) => {
                e.preventDefault();
                e.stopPropagation();
                const files = Array.from(e.dataTransfer.files || []);
                setMedia((prev) => [...prev, ...files]);
              }}
              style={{
                width: "97%",
                minHeight: "150px",
                border: "2px dashed #cfcff8",
                borderRadius: "14px",
                marginTop: "10px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                color: colors.purpleDark,
                cursor: "pointer",
                padding: "20px",
                textAlign: "center",
                marginLeft: "-15px",
              }}
            >
              <img
                src={uploadIcon}
                alt="Upload"
                style={{
                  width: 40,
                  height: 40,
                  marginBottom: "8px",
                  objectFit: "contain",
                }}
              />
              <p
                style={{
                  fontSize: "14px",
                  fontWeight: 600,
                  margin: 0,
                }}
              >
                Add Photo and Video
              </p>
              <p
                style={{
                  fontSize: "12px",
                  opacity: 0.6,
                  marginTop: "3px",
                }}
              >
                Choose a file or drag & drop it here
              </p>
            </label>

            <input
              id="file-upload"
              type="file"
              multiple
              accept="image/*,video/*"
              onChange={handleMediaUpload}
              style={{ display: "none" }}
            />

            {media.length > 0 && (
              <div
                style={{
                  marginTop: "15px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                {media.map((file, index) => (
                  <div
                    key={index}
                    style={{
                      padding: "10px",
                      borderRadius: "10px",
                      border: "1px solid #e5e5e5",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: "12px",
                    }}
                  >
                    {/* Left side: thumbnail + name */}
                    <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                      {/* Thumbnail for images */}
                      {file.type.startsWith("image/") && (
                        <img
                          src={URL.createObjectURL(file)}
                          alt="preview"
                          style={{
                            width: 50,
                            height: 50,
                            borderRadius: "8px",
                            objectFit: "cover",
                          }}
                        />
                      )}

                      {/* Video icon */}
                      {file.type.startsWith("video/") && (
                        <span style={{ fontSize: "32px" }}>🎥</span>
                      )}

                      {/* File name */}
                      <p style={{ margin: 0, fontSize: "14px", color: colors.purpleDark }}>
                        {file.name}
                      </p>
                    </div>

                    {/* DELETE BUTTON */}
                    <button
                      onClick={() => removeFile(index)}
                      style={{
                        background: "transparent",
                        border: "none",
                        cursor: "pointer",
                        fontSize: "18px",
                        color: colors.purpleDark,
                        fontWeight: "bold",
                        padding: "4px 8px",
                      }}
                    >
                      ✕
                    </button>
                  </div>
                ))}
              </div>
            )}

            {/* TERMS */}
            <p
              style={{
                textAlign: "center",
                fontSize: 11,
                opacity: 0.6,
                marginTop: 20,
              }}
            >
              By continuing, you agree to our{" "}
              <span style={{ color: colors.darkPurple }}>Terms & Conditions</span>{" "}
              and{" "}
              <span style={{ color: colors.darkPurple }}>Privacy Policies</span>.
            </p>

            {/* BUTTONS */}
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                gap: "12px",
                marginTop: "25px",
              }}
            >
              <OutlineButton
                onClick={onBack}
                style={{
                  padding: "8px 22px",
                  fontSize: "14px",
                }}
              >
                Back
              </OutlineButton>

              <PrimaryButton
                onClick={() =>
                  onNext({
                    location,
                    latitude: latitude ? parseFloat(latitude) : null,
                    longitude: longitude ? parseFloat(longitude) : null,
                    details,
                    media,
                  })
                }
                style={{
                  padding: "8px 30px",
                  fontSize: "14px",
                }}
              >
                Next
              </PrimaryButton>
            </div>
          </div>
        </div>

        {/* BOTTOM NAVBAR */}
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
