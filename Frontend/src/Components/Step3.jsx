import { useState, useEffect } from "react";

const Step3 = ({ onNext, onBack }) => {
    const [countries, setCountries] = useState([]);
    const [states, setStates] = useState([]);
    const [cities, setCities] = useState([]);
    const [country, setCountry] = useState("");
    const [state, setState] = useState("");
    const [city, setCity] = useState("");

// Country States and cities (hardcoded because of no Api Restriction)
    useEffect(() => {
        setCountries([
            { name: "USA", states: [
                { name: "California", cities: ["Los Angeles", "San Francisco"] },
                { name: "Texas", cities: ["Houston", "Austin"] },
                { name: "New York", cities: ["New York City", "Buffalo"] },
                { name: "Florida", cities: ["Miami", "Orlando"] },
                { name: "Illinois", cities: ["Chicago", "Springfield"] }
            ] },
            { name: "India", states: [
                { name: "Maharashtra", cities: ["Mumbai", "Pune"] },
                { name: "Karnataka", cities: ["Bangalore", "Mysore"] },
                { name: "Delhi", cities: ["New Delhi", "Gurgaon"] },
                { name: "Uttar Pradesh", cities: ["Lucknow", "Noida"] },
                { name: "West Bengal", cities: ["Kolkata", "Siliguri"] }
            ] },
            { name: "Canada", states: [
                { name: "Ontario", cities: ["Toronto", "Ottawa"] },
                { name: "Quebec", cities: ["Montreal", "Quebec City"] },
                { name: "British Columbia", cities: ["Vancouver", "Victoria"] },
                { name: "Alberta", cities: ["Calgary", "Edmonton"] },
                { name: "Nova Scotia", cities: ["Halifax", "Sydney"] }
            ] },
            { name: "Australia", states: [
                { name: "New South Wales", cities: ["Sydney", "Newcastle"] },
                { name: "Victoria", cities: ["Melbourne", "Geelong"] },
                { name: "Queensland", cities: ["Brisbane", "Gold Coast"] },
                { name: "Western Australia", cities: ["Perth", "Fremantle"] },
                { name: "South Australia", cities: ["Adelaide", "Mount Gambier"] }
            ] },
        ]);
    }, []);

    // Update states when country changes
    useEffect(() => {
        setState("");
        setCity("");
        if (country) {
            const found = countries.find(c => c.name === country);
            setStates(found ? found.states : []);
        } else {
            setStates([]);
        }
    }, [country, countries]);

    // Update cities when state changes
    useEffect(() => {
        setCity("");
        if (state) {
            const found = states.find(s => s.name === state);
            setCities(found ? found.cities : []);
        } else {
            setCities([]);
        }
    }, [state, states]);

    return (
        <div className="container mx-auto p-6 bg-white shadow-lg rounded-lg max-w-md mt-10 justify-center items-center ">
            <h2 className="text-2xl font-bold mb-4">Step 3: Preferences</h2>
            <form className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700">Country:</label>
                    <select
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        value={country}
                        onChange={e => setCountry(e.target.value)}
                    >
                        <option value="">Select Country</option>
                        {countries.map(c => (
                            <option key={c.name} value={c.name}>{c.name}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">State:</label>
                    <select
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        value={state}
                        onChange={e => setState(e.target.value)}
                        disabled={!country}
                    >
                        <option value="">Select State</option>
                        {states.map(s => (
                            <option key={s.name} value={s.name}>{s.name}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">City:</label>
                    <select
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        value={city}
                        onChange={e => setCity(e.target.value)}
                        disabled={!state}
                    >
                        <option value="">Select City</option>
                        {cities.map(cityName => (
                            <option key={cityName} value={cityName}>{cityName}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Subscription Plan:</label>
                    <div className="flex space-x-4">
                        <label className="inline-flex items-center">
                            <input type="radio" name="plan" value="Basic" className="form-radio text-blue-500" defaultChecked />
                            <span className="ml-2">Basic</span>
                        </label>
                        <label className="inline-flex items-center">
                            <input type="radio" name="plan" value="Pro" className="form-radio text-blue-500" />
                            <span className="ml-2">Pro</span>
                        </label>
                        <label className="inline-flex items-center">
                            <input type="radio" name="plan" value="Enterprise" className="form-radio text-blue-500" />
                            <span className="ml-2">Enterprise</span>
                        </label>
                    </div>
                </div>
                <div className="flex items-center">
                    <input
                        type="checkbox"
                        id="newsletter"
                        className="form-checkbox text-blue-500"
                        defaultChecked
                    />
                    <label htmlFor="newsletter" className="ml-2 text-sm text-gray-700">Subscribe to newsletter</label>
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
};

export default Step3;
