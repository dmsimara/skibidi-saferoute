// src/screens/Report/Report.jsx
import { useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../supabaseClient";

export default function Report() {
  const navigate = useNavigate();

  const [step, setStep] = useState(1);

  // Store all report data
  const [reportData, setReportData] = useState({
    concern: "",
    otherConcern: "",
    location: "",
    latitude: null,
    longitude: null,
    details: "",
    media: [],
  });

  // STEP CHANGERS
  const goNext = (data = {}) => {
    setReportData((prev) => ({ ...prev, ...data }));
    setStep((prev) => prev + 1);
  };

  const goBack = () => {
    setStep((prev) => prev - 1);
  };

  // ---------------------------------------------------------
  // 🚀 MAIN REPORT SUBMISSION FUNCTION (Supabase)
  // ---------------------------------------------------------
  const handleSubmit = async () => {
    console.log("Submitting report...");

    // ------------------------------
    // 1. Upload media to Supabase Storage
    // ------------------------------
    let mediaUrls = [];

    for (const file of reportData.media) {
      const filePath = `reports/${Date.now()}-${file.name}`;

      const { error: uploadError } = await supabase.storage
        .from("report-media")
        .upload(filePath, file);

      if (uploadError) {
        console.error("Upload failed:", uploadError);
        continue;
      }

      // Get public URL
      const publicUrl = supabase.storage
        .from("report-media")
        .getPublicUrl(filePath).data.publicUrl;

      mediaUrls.push(publicUrl);
    }

    // ------------------------------
    // 2. Guest Identifier (Device ID)
    // ------------------------------
    let deviceId = localStorage.getItem("deviceId");
    if (!deviceId) {
      deviceId = crypto.randomUUID();
      localStorage.setItem("deviceId", deviceId);
    }

    // ------------------------------
    // 3. Insert Report into Supabase
    // ------------------------------
    const { data, error } = await supabase
      .from("reports")
      .insert({
        concern: reportData.concern,
        other_concern: reportData.otherConcern,
        location_name: reportData.location,
        latitude: reportData.latitude,
        longitude: reportData.longitude,
        details: reportData.details,
        media_urls: mediaUrls,
        is_anonymous: true,
        device_id: deviceId,
      })
      .select()
      .single();

    if (error) {
      console.error("Report insert failed:", error);
      alert("Failed to submit report. Please try again.");
      return;
    }

    console.log("Report saved:", data);

    // ------------------------------
    // 4. Move to Step 4 (Success Page)
    // ------------------------------
    setReportData((prev) => ({ ...prev, tracking_id: data.tracking_id }));

    setStep(4);
  };

  // After Step4: submit another report
  const startNewReport = () => {
    setReportData({
      concern: "",
      otherConcern: "",
      location: "",
      details: "",
      media: [],
    });
    setStep(1);
  };

  // Step4: View Community Reports
  const viewReports = () => {
    navigate("/community");
  };

  return (
    <>
      {step === 1 && <Step1 onNext={goNext} />}
      {step === 2 && <Step2 onNext={goNext} onBack={goBack} />}
      {step === 3 && (
        <Step3
          data={reportData}
          onBack={goBack}
          onSubmit={handleSubmit}
        />
      )}
      {step === 4 && (
        <Step4
          trackingId={reportData.tracking_id}
          onNewReport={startNewReport}
          onViewReports={viewReports}
        />
      )}
    </>
  );
}
