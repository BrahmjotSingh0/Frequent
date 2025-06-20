import React from "react";

const Summary = ({ formData = {}, onBack, onSubmit, loading }) => {
  return (
    <div className="container mx-auto p-6 bg-white shadow-lg rounded-lg max-w-md mt-10 justify-center items-center ">
      <h2 className="text-3xl font-extrabold mb-6 text-center text-blue-700">Review Your Details</h2>
      <div className="space-y-6 text-gray-800">
        <div className="flex flex-col items-center mb-4">
          <span className="font-semibold text-lg">Profile Photo</span>
          {formData.profilePhoto ? (
            <img src={formData.profilePhoto} alt="Profile" className="w-20 h-20 rounded-full border-2 border-blue-400 mt-2 shadow" />
          ) : (
            <span className="mt-2 text-gray-400">Not uploaded</span>
          )}
        </div>
        <div className="grid grid-cols-2 gap-x-2 gap-y-3">
          <span className="font-semibold">Username:</span>
          <span>{formData.username || <span className="text-gray-400">-</span>}</span>
          <span className="font-semibold">Profession:</span>
          <span>{formData.profession || <span className="text-gray-400">-</span>}</span>
          {formData.profession === "Entrepreneur" && (
            <>
              <span className="font-semibold">Company Name:</span>
              <span>{formData.companyName || <span className="text-gray-400">-</span>}</span>
            </>
          )}
          <span className="font-semibold">Address Line 1:</span>
          <span>{formData.address1 || <span className="text-gray-400">-</span>}</span>
          <span className="font-semibold">Country:</span>
          <span>{formData.country || <span className="text-gray-400">-</span>}</span>
          <span className="font-semibold">State:</span>
          <span>{formData.state || <span className="text-gray-400">-</span>}</span>
          <span className="font-semibold">City:</span>
          <span>{formData.city || <span className="text-gray-400">-</span>}</span>
          <span className="font-semibold">Subscription Plan:</span>
          <span>{formData.plan || <span className="text-gray-400">-</span>}</span>
          <span className="font-semibold">Newsletter:</span>
          <span>{formData.newsletter ? "Yes" : "No"}</span>
        </div>
      </div>
      <div className="flex justify-between mt-10">
        <button type="button" onClick={onBack} className="px-5 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400 transition duration-300 font-semibold" disabled={loading}>
          Back
        </button>
        <button type="button" onClick={onSubmit} className="px-5 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition duration-300 font-semibold flex items-center" disabled={loading}>
          {loading ? (
            <svg className="animate-spin h-5 w-5 mr-2 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path></svg>
          ) : null}
          Submit
        </button>
      </div>
    </div>
  );
};

export default Summary;
