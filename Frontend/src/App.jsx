import React, { useState } from "react";
import StepsTab from "./Components/StepsTab";
import Step1 from "./Components/Step1";
import Step2 from "./Components/Step2";
import Step3 from "./Components/Step3";
import Summary from "./Components/Summary";
import { API_URL } from "./api";

const App = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleNext = () => setCurrentStep((prev) => Math.min(prev + 1, 3));
  const handleBack = () => setCurrentStep((prev) => Math.max(prev - 1, 0));

  const handleSubmit = async () => {
    setLoading(true);
    setError("");
    setSuccess(false);
    try {
      const res = await fetch(`${API_URL}/profile`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error("Failed to submit profile");
      setSuccess(true);
      setCurrentStep(0);
      setFormData({});
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <StepsTab currentStep={currentStep} />
      {error && <div className="max-w-md mx-auto bg-red-100 text-red-700 px-4 py-2 rounded mb-4">{error}</div>}
      {success && <div className="max-w-md mx-auto bg-green-100 text-green-700 px-4 py-2 rounded mb-4">Profile submitted successfully!</div>}
      {currentStep === 0 && <Step1 onNext={handleNext} onBack={handleBack} formData={formData} setFormData={setFormData} />}
      {currentStep === 1 && <Step2 onNext={handleNext} onBack={handleBack} formData={formData} setFormData={setFormData} />}
      {currentStep === 2 && <Step3 onNext={handleNext} onBack={handleBack} formData={formData} setFormData={setFormData} />}
      {currentStep === 3 && <Summary onBack={handleBack} onSubmit={handleSubmit} formData={formData} loading={loading} />}
    </div>
  );
};

export default App;
