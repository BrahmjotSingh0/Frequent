import React from "react";

const Summary = ({ formData = {}, onBack, onSubmit }) => {
  return (
    <div className="container mx-auto p-6 bg-white shadow-lg rounded-lg max-w-md mt-10 justify-center items-center ">
      <h2 className="text-2xl font-bold mb-4">Summary</h2>
      <div className="space-y-4 text-gray-800">
        <div>
          <span className="font-semibold">Profile Photo:</span>
          {formData.profilePhoto ? (
            <img src={formData.profilePhoto} alt="Profile" className="w-16 h-16 rounded-full border ml-2 inline-block align-middle" />
          ) : (
            <span className="ml-2 text-gray-500">Not uploaded</span>
          )}
        </div>
        <div><span className="font-semibold">Username:</span> <span className="ml-2">{formData.username || "-"}</span></div>
        <div><span className="font-semibold">Profession:</span> <span className="ml-2">{formData.profession || "-"}</span></div>
        {formData.profession === "Entrepreneur" && (
          <div><span className="font-semibold">Company Name:</span> <span className="ml-2">{formData.companyName || "-"}</span></div>
        )}
        <div><span className="font-semibold">Address Line 1:</span> <span className="ml-2">{formData.address1 || "-"}</span></div>
        <div><span className="font-semibold">Country:</span> <span className="ml-2">{formData.country || "-"}</span></div>
        <div><span className="font-semibold">State:</span> <span className="ml-2">{formData.state || "-"}</span></div>
        <div><span className="font-semibold">City:</span> <span className="ml-2">{formData.city || "-"}</span></div>
        <div><span className="font-semibold">Subscription Plan:</span> <span className="ml-2">{formData.plan || "-"}</span></div>
        <div><span className="font-semibold">Newsletter:</span> <span className="ml-2">{formData.newsletter ? "Yes" : "No"}</span></div>
      </div>
      <div className="flex justify-between mt-8">
        <button type="button" onClick={onBack} className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400 transition duration-300">
          Back
        </button>
        <button type="button" onClick={onSubmit} className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition duration-300">
          Submit
        </button>
      </div>
    </div>
  );
};

export default Summary;
