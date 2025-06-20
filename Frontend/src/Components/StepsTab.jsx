import React from "react";

const steps = [
  { label: "Personal Info" },
  { label: "Professional Details" },
  { label: "Preferences" },
  { label: "Summary" }
];

const StepsTab = ({ currentStep }) => {
  return (
    <div className="flex justify-center mb-8">
      {steps.map((step, idx) => (
        <div key={step.label} className="flex items-center mt-10">
          <div
            className={`w-8 h-8 flex items-center justify-center rounded-full border-2 text-sm font-bold transition-all duration-300 
              ${idx === currentStep ? "bg-blue-500 text-white border-blue-500" : idx < currentStep ? "bg-green-500 text-white border-green-500" : "bg-white text-gray-500 border-gray-300"}
            `}
          >
            {idx + 1}
          </div>
          <span className={`ml-2 mr-4 text-sm font-medium ${idx === currentStep ? "text-blue-600" : "text-gray-600"}`}>{step.label}</span>
          {idx < steps.length - 1 && (
            <div className="w-8 h-1 bg-gray-300 rounded-full mx-2" />
          )}
        </div>
      ))}
    </div>
  );
};

export default StepsTab;
