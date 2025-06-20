import { useState } from "react";
import { useUsernameAvailability } from "../hooks";

const Step1 = ({ onNext, onBack, formData = {}, setFormData }) => {
    const [username, setUsername] = useState(formData.username || "");
    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [profilePicture, setProfilePicture] = useState(formData.profilePhoto || null);
    const [preview, setPreview] = useState(formData.profilePhoto || "https://via.placeholder.com/100");
    const { available, checking } = useUsernameAvailability(username);

    const handlePictureChange = (e) => {
        const file = e.target.files[0];
        if (file && (file.type === "image/jpeg" || file.type === "image/png")) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreview(reader.result);
                setProfilePicture(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleNext = () => {
        setFormData({
            ...formData,
            username,
            currentPassword,
            newPassword,
            profilePhoto: profilePicture
        });
        onNext();
    };

    return(
        <div className="container mx-auto p-6 bg-white shadow-lg rounded-lg max-w-md mt-10 justify-center items-center ">
            <h2 className="text-2xl font-bold mb-4">Step 1: Personal Info</h2>
            <form className="space-y-4" onSubmit={e => e.preventDefault()}>
                {/* add profile picture with Preview */}
                <div className="flex items-center space-x-4">
                    <img src={preview} alt="Profile" className="w-24 h-24 rounded-full border-2 border-gray-300 object-cover" />
                    <label className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300 cursor-pointer">
                        Change Picture
                        <input type="file" accept="image/jpeg,image/png" className="hidden" onChange={handlePictureChange} />
                    </label>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Username:</label>
                    <input type="text" value={username} onChange={e => setUsername(e.target.value)} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500" />
                    {username.length >= 4 && (
                        <div className="mt-1 text-sm">
                            {checking && <span className="text-gray-500">Checking availability...</span>}
                            {!checking && available === false && <span className="text-red-500">This username is already taken</span>}
                            {!checking && available === true && <span className="text-green-600">Username is available</span>}
                        </div>
                    )}
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Current Password:</label>
                    <input type="password" value={currentPassword} onChange={e => setCurrentPassword(e.target.value)} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500" />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">New Password:</label>
                    <input type="password" value={newPassword} onChange={e => setNewPassword(e.target.value)} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500" />
                </div>
                <div className="flex justify-between mt-6">
                    <button type="button" onClick={onBack} className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400 transition duration-300">
                        Back
                    </button>
                    <button type="button" onClick={handleNext} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300">
                        Next
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Step1;