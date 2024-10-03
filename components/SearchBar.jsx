import { useState, useEffect } from "react";
import { FaLocationArrow, FaSearch } from "react-icons/fa";

// Demo data
const demoStates = [
  "Andhra Pradesh",
  "Bihar",
  "Delhi",
  "Goa",
  "Karnataka",
  "Maharashtra",
  "Tamil Nadu",
  "Uttar Pradesh",
  "West Bengal",
];

const demoTutors = [
  { name: "John Doe", specialty: "Mathematics", location: "Delhi" },
  { name: "Jane Smith", specialty: "Physics", location: "Goa" },
  { name: "Alice Brown", specialty: "Chemistry", location: "Maharashtra" },
  { name: "David Lee", specialty: "Biology", location: "Delhi" },
  { name: "Emily Davis", specialty: "English", location: "Goa" },
];

export default function SearchBar() {
  const [locationInput, setLocationInput] = useState("");
  const [filteredStates, setFilteredStates] = useState([]);
  const [selectedState, setSelectedState] = useState("");
  const [tutorInput, setTutorInput] = useState("");
  const [filteredTutors, setFilteredTutors] = useState([]);

  // Handle location input change
  const handleLocationChange = (e) => {
    const value = e.target.value;
    setLocationInput(value);

    // Filter the states based on input
    if (value) {
      const filtered = demoStates.filter((state) =>
        state.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredStates(filtered);
    } else {
      setFilteredStates([]);
    }
  };

  // Handle selecting a state from the list
  const handleStateSelect = (state) => {
    setSelectedState(state);
    setLocationInput(state); // Set the input value to the selected state
    setFilteredStates([]); // Clear the filtered states
    filterTutorsByLocation(state); // Filter tutors based on selected location
  };

  // Filter tutors based on location
  const filterTutorsByLocation = (location) => {
    const filtered = demoTutors.filter((tutor) => tutor.location === location);
    setFilteredTutors(filtered); // Set the filtered tutors based on the location
  };

  // Handle tutor search input
  const handleTutorChange = (e) => {
    const value = e.target.value;
    setTutorInput(value);

    // Filter tutors based on the location and the input value
    if (value) {
      const filtered = filteredTutors.filter((tutor) =>
        tutor.name.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredTutors(filtered);
    } else {
      // Reset to show all tutors for the selected location if input is cleared
      filterTutorsByLocation(selectedState);
    }
  };

  // Handle clicking on a tutor from the list
  const handleTutorSelect = (tutor) => {
    console.log("Selected tutor:", tutor);
    // You can add more functionality here when a tutor is selected
  };

  return (
    <div className="pb-20">
      <div className="flex">
        {/* Location Input */}
        <div className="relative w-full">
          <input
            type="text"
            placeholder="Search location"
            value={locationInput}
            onChange={handleLocationChange}
            onClick={() => setFilteredStates(demoStates)} // Show all states on click
            className="w-full border border-gray-300 rounded pl-10 pr-3 py-3 focus:outline focus:border focus:border-brightblueClr"
          />
          <i className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
            <FaLocationArrow /> {/* Location Icon */}
          </i>

          {/* Show filtered states */}
          {filteredStates.length > 0 && (
            <ul className="absolute left-0 top-full w-full bg-white shadow-lg mt-1 border border-gray-300 rounded">
              {filteredStates.map((state) => (
                <li
                  key={state}
                  className="cursor-pointer p-2 hover:bg-gray-200"
                  onClick={() => handleStateSelect(state)}
                >
                  {state}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Tutor Search Input */}
        <div className="relative w-full ml-4">
          <input
            type="text"
            placeholder="Search tutors"
            value={tutorInput}
            onChange={handleTutorChange}
            className="w-full border border-gray-300 rounded pl-10 pr-3 py-3 focus:outline focus:border focus:border-brightblueClr"
          />
          <i className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
            <FaSearch /> {/* Search Icon */}
          </i>

          {/* Show filtered tutors based on the selected location and tutor input */}
          {filteredTutors.length > 0 && (
            <ul className="absolute left-0 top-full w-full bg-white shadow-lg mt-1 border border-gray-300 rounded">
              {filteredTutors.map((tutor) => (
                <li
                  key={tutor.name}
                  className="cursor-pointer p-2 hover:bg-gray-200"
                  onClick={() => handleTutorSelect(tutor)}
                >
                  {tutor.name} - {tutor.specialty}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
