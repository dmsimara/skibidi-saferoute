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

/* 💜 SAME DUMMY PLACES AS HOME.JSX */
const PLACES = [
  { id: "moa", name: "SM Mall of Asia", city: "Pasay, Metro Manila", lat: 14.5353, lng: 120.9822 },
  { id: "bgc", name: "BGC High Street", city: "Taguig, Metro Manila", lat: 14.5526, lng: 121.0443 },
  { id: "intramuros", name: "Intramuros", city: "Manila, Metro Manila", lat: 14.5896, lng: 120.9747 },
  { id: "rizal-park", name: "Rizal Park (Luneta)", city: "Manila, Metro Manila", lat: 14.5829, lng: 120.9790 },
  { id: "up-diliman", name: "UP Diliman", city: "Quezon City, Metro Manila", lat: 14.6549, lng: 121.0647 },
  { id: "greenbelt", name: "Greenbelt", city: "Makati, Metro Manila", lat: 14.5518, lng: 121.0223 },

  { id: "vigan", name: "Calle Crisologo", city: "Vigan, Ilocos Sur", lat: 17.5747, lng: 120.3860 },
  { id: "baguio", name: "Session Road", city: "Baguio City", lat: 16.4120, lng: 120.5960 },
  { id: "la-union", name: "San Juan Surf Town", city: "La Union", lat: 16.6702, lng: 120.3186 },

  { id: "cebu-it-park", name: "Cebu IT Park", city: "Cebu City", lat: 10.3291, lng: 123.9054 },
  { id: "panglao", name: "Alona Beach", city: "Panglao, Bohol", lat: 9.5487, lng: 123.7641 },

  { id: "davao-park", name: "People’s Park", city: "Davao City", lat: 7.0733, lng: 125.6128 },
  { id: "siargao", name: "General Luna Beach", city: "Siargao Island", lat: 9.7963, lng: 126.1653 },
];

export default function Step2({ onNext, onBack }) {
  const [location, setLocation] = useState("");
  const [details, setDetails] = useState("");
  const [media, setMedia] = useState([]);
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [typing, setTyping] = useState(false);

  /* FILE UPLOAD HANDLING */
  const handleMediaUpload = (e) => {
    const files = Array.from(e.target.files || []);
    setMedia([...media, ...files]);
  };

  const removeFile = (index) => {
    setMedia((prev) => prev.filter((_, i) => i !== index));
  };

  /* ⭐ LOCAL SEARCH (REPLACES API AUTOCOMPLETE) */
  function handleLocationSearch(value) {
    setTyping(true);
    setLocation(value);

    if (!value.trim()) {
      setSuggestions([]);
      return;
    }

    const lower = value.toLowerCase();
    const matches = PLACES.filter(
      (p) =>
        p.name.toLowerCase().includes(lower) ||
        p.city.toLowerCase().includes(lower)
    );

    setSuggestions(matches);
  }

  /* SELECT PLACE FROM SUGGESTION */
  function selectPlace(place) {
    setTyping(false);
    setLocation(`${place.name}, ${place.city}`);
    setLatitude(place.lat);
    setLongitude(place.lng);
    setSuggestions([]);
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
        <img src={logo} alt="Liwa" style={{ width: 120, marginBottom: "25px" }} />

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
            <label style={{ fontSize: 14, color: colors.purpleDark, fontWeight: 700, marginLeft: "-10px" }}>
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
              <img src={locationIcon} alt="" style={{ width: 18, marginRight: 8, opacity: 0.6 }} />

              <input
                type="text"
                value={location}
                onChange={(e) => handleLocationSearch(e.target.value)}
                placeholder="Enter Location Name"
                style={{
                  width: "100%",
                  border: "none",
                  outline: "none",
                  fontSize: 14,
                  background: "transparent",
                }}
              />
            </div>

            {/* LOCAL SUGGESTIONS */}
            {typing && suggestions.length > 0 && (
              <div
                style={{
                  width: "100%",
                  backgroundColor: "white",
                  borderRadius: "10px",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                  marginTop: "-18px",
                  marginBottom: "20px",
                  position: "relative",
                  zIndex: 50,
                  padding: "5px 0",
                  marginLeft: "-15px",
                }}
              >
                {suggestions.map((p, i) => (
                  <div
                    key={i}
                    onClick={() => selectPlace(p)}
                    style={{
                      padding: "12px 15px",
                      cursor: "pointer",
                      borderBottom: "1px solid rgba(0,0,0,0.08)",
                      fontSize: 14,
                      color: colors.purpleDark,
                    }}
                  >
                    <strong>{p.name}</strong>
                    <br />
                    <span style={{ fontSize: 12, opacity: 0.7 }}>{p.city}</span>
                  </div>
                ))}
              </div>
            )}

            {/* LATITUDE */}
            <label style={{ fontSize: 14, color: colors.purpleDark, fontWeight: 700, marginLeft: "-10px" }}>
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
            <label style={{ fontSize: 14, color: colors.purpleDark, fontWeight: 700, marginLeft: "-10px" }}>
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
