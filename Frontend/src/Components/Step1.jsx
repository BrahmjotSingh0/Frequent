import { useState } from "react";

const Step1 = ({ onNext, onBack }) => {
    const [username, setUsername] = useState("");
    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [profilePicture, setProfilePicture] = useState(null);
    return(
        <div className="container mx-auto p-6 bg-white shadow-lg rounded-lg max-w-md mt-10 justify-center items-center ">
            <h2 className="text-2xl font-bold mb-4">Step 1: Personal Info</h2>
            <form className="space-y-4">
                {/* add profile picture with Preview */}
                <div className="flex items-center space-x-4">
                    <img src="https://via.placeholder.com/100" alt="Profile" className="w-24 h-24 rounded-full border-2 border-gray-300" />
                    <button type="button" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300">
                        Change Picture
                    </button>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Username:</label>
                    <input type="text" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500" />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Current Password:</label>
                    <input type="password" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500" />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">New Password:</label>
                    <input type="password" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500" />
                </div>
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
}

export default Step1;