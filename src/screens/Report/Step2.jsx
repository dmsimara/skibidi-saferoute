// src/screens/Report/Step2.jsx
import { useState } from "react";
import colors from "../../styles/colors";
import PrimaryButton from "../../components/PrimaryButton";

export default function Step2({ onNext, onBack }) {
  const [location, setLocation] = useState("");
  const [details, setDetails] = useState("");
  const [media, setMedia] = useState([]);

  const handleMediaUpload = (e) => {
    const files = Array.from(e.target.files || []);
    setMedia([...media, ...files]);
  };

  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "#ffffff",
        borderRadius: "16px",
        padding: "35px 40px",
        boxShadow: "0px 3px 12px rgba(0,0,0,0.08)",
      }}
    >
      {/* ---------------------- */}
      {/* PROGRESS STEPS */}
      {/* ---------------------- */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "40px",
          marginBottom: "25px",
          alignItems: "center",
        }}
      >
        {/* Step 1 Complete */}
        <div
          style={{
            width: "40px",
            height: "3px",
            backgroundColor: colors.purpleLight,
            borderRadius: "2px",
          }}
        />
        <div
          style={{
            width: "22px",
            height: "22px",
            borderRadius: "50%",
            backgroundColor: colors.purpleDark,
            color: "white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "12px",
            fontWeight: "600",
          }}
        >
          1
        </div>

        {/* Step 2 Active */}
        <div
          style={{
            width: "40px",
            height: "3px",
            backgroundColor: colors.purpleLight,
            borderRadius: "2px",
          }}
        />
        <div
          style={{
            width: "22px",
            height: "22px",
            borderRadius: "50%",
            backgroundColor: colors.purpleDark,
            color: "white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "12px",
            fontWeight: "600",
          }}
        >
          2
        </div>

        {/* Step 3 */}
        <div
          style={{
            width: "40px",
            height: "3px",
            backgroundColor: "#ddd",
            borderRadius: "2px",
          }}
        />
        <div
          style={{
            width: "22px",
            height: "22px",
            borderRadius: "50%",
            backgroundColor: "#ddd",
            color: "#555",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "12px",
            fontWeight: "600",
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

      {/* ---------------------- */}
      {/* LOCATION INPUT */}
      {/* ---------------------- */}
      <label
        style={{
          fontSize: "14px",
          color: colors.purpleDark,
          fontWeight: 700,
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
        }}
      >
        <span style={{ marginRight: "8px", opacity: 0.5 }}>📍</span>
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
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

      {/* ---------------------- */}
      {/* ADDITIONAL DETAILS */}
      {/* ---------------------- */}
      <label
        style={{
          fontSize: "14px",
          color: colors.purpleDark,
          fontWeight: 700,
        }}
      >
        Additional Details
      </label>

      <textarea
        placeholder="Share any additional information that might help other"
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
        }}
      />

      {/* ---------------------- */}
      {/* UPLOAD MEDIA */}
      {/* ---------------------- */}
      <label
        style={{
          fontSize: "14px",
          color: colors.purpleDark,
          fontWeight: 700,
        }}
      >
        Upload Media
      </label>

      <label
        htmlFor="file-upload"
        style={{
          width: "100%",
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
        }}
      >
        <div
          style={{
            fontSize: "32px",
            marginBottom: "8px",
            color: colors.purple,
          }}
        >
          ➕
        </div>
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

      {/* ---------------------- */}
      {/* BUTTONS */}
      {/* ---------------------- */}
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          gap: "12px",
          marginTop: "25px",
        }}
      >
        <PrimaryButton
          onClick={onBack}
          style={{
            padding: "8px 22px",
            fontSize: "14px",
            backgroundColor: "#e6e6e6",
            color: colors.purpleDark,
          }}
        >
          Back
        </PrimaryButton>

        <PrimaryButton
          onClick={() => onNext({ location, details, media })}
          style={{
            padding: "8px 30px",
            fontSize: "14px",
          }}
        >
          Next
        </PrimaryButton>
      </div>
    </div>
  );
}
