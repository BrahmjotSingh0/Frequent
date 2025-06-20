import { useState } from "react";

const Step2 = ({ onNext, onBack }) => {
    const [profession, setProfession] = useState("");
    const [companyName, setCompanyName] = useState("");

    return (
        <div className="container mx-auto p-6 bg-white shadow-lg rounded-lg max-w-md mt-10 justify-center items-center ">
            <h2 className="text-2xl font-bold mb-4">Step 2: Professional Details</h2>
            <form className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700">Profession:</label>
                    <select
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        value={profession}
                        onChange={e => setProfession(e.target.value)}
                    >
                        <option value="">Select Profession</option>
                        <option value="Student">Student</option>
                        <option value="Developer">Developer</option>
                        <option value="Entrepreneur">Entrepreneur</option>
                    </select>
                </div>
                {profession === "Entrepreneur" && (
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Company Name:</label>
                        <input
                            type="text"
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                            value={companyName}
                            onChange={e => setCompanyName(e.target.value)}
                        />
                    </div>
                )}
                <div className="flex justify-between mt-6">
                    <button type="button" onClick={onBack} className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400 transition duration-300">
                        Back
                    </button>
                    <button type="button" onClick={onNext} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300">
                        Next
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Step2;
