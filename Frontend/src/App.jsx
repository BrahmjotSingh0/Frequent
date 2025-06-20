import React, { useState } from "react";
import StepsTab from "./Components/StepsTab";
import Step1 from "./Components/Step1";
import Step2 from "./Components/Step2";
import Step3 from "./Components/Step3";
import Summary from "./Components/Summary";

const App = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({});

  const handleNext = () => setCurrentStep((prev) => Math.min(prev + 1, 3));
  const handleBack = () => setCurrentStep((prev) => Math.max(prev - 1, 0));
  const handleSubmit = () => {
    // TODO: send formData to backend
    alert("Form submitted! (see console for data)");
    console.log(formData);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <StepsTab currentStep={currentStep} />
      {currentStep === 0 && <Step1 onNext={handleNext} onBack={handleBack} formData={formData} setFormData={setFormData} />}
      {currentStep === 1 && <Step2 onNext={handleNext} onBack={handleBack} formData={formData} setFormData={setFormData} />}
      {currentStep === 2 && <Step3 onNext={handleNext} onBack={handleBack} formData={formData} setFormData={setFormData} />}
      {currentStep === 3 && <Summary onBack={handleBack} onSubmit={handleSubmit} formData={formData} />}
    </div>
  );
};

export default App;
