// src/screens/Report/Report.jsx
import { useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import { useNavigate } from "react-router-dom";

export default function Report() {
  const navigate = useNavigate();

  const [step, setStep] = useState(1);

  // Store all report data
  const [reportData, setReportData] = useState({
    concern: "",
    otherConcern: "",
    location: "",
    details: "",
    media: [],
  });

  // Go to the next step & merge new data
  const goNext = (data = {}) => {
    setReportData((prev) => ({ ...prev, ...data }));
    setStep((prev) => prev + 1);
  };

  // Go back to previous step
  const goBack = () => {
    setStep((prev) => prev - 1);
  };

  // When user clicks "Submit Report" in Step3
  const handleSubmit = () => {
    console.log("FINAL REPORT:", reportData);

    // After storing data... navigate to Step4
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
          onNewReport={startNewReport}
          onViewReports={viewReports}
        />
      )}
    </>
  );
}
