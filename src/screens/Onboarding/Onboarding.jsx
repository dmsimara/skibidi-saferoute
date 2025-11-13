import { useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Step5 from "./Step5";    

import { loadStep, saveStep } from "../../utils/preferences";

export default function Onboarding() {
  // Load saved step or default to 1
  const [step, setStep] = useState(loadStep());

  // Wrap step setter to auto-save
  const goToStep = (num) => {
    saveStep(num);
    setStep(num);
  };

  return (
    <>
      {step === 1 && <Step1 onNext={() => goToStep(2)} />}

      {step === 2 && (
        <Step2
          onNext={() => goToStep(3)}
          onBack={() => goToStep(1)}
        />
      )}

      {step === 3 && (
        <Step3
          onNext={() => goToStep(4)}
          onBack={() => goToStep(2)}
        />
      )}

      {step === 4 && (
        <Step4
          onNext={() => goToStep(5)}
          onBack={() => goToStep(3)}
        />
      )}

      {step === 5 && (
        <Step5
          onFinish={() => {
            console.log("Onboarding complete!");
          }}
        />
      )}
    </>
  );
}
