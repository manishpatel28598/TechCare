import React, { useEffect, useState } from "react";
import searchBar from "../assets/search_FILL0_wght300_GRAD0_opsz24.svg";
import axios from "axios";

function LeftSideBar({ onSelectProfile }) {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  const fetchData = async () => {
    const url = "https://fedskillstest.coalitiontechnologies.workers.dev/";

    // Encode the username and password for Basic Authentication
    const username = "coalition";
    const password = "skills-test";
    const auth = `Basic ${btoa(`${username}:${password}`)}`; // Encodes the credentials

    try {
      const response = await axios.get(url, {
        headers: {
          Authorization: auth, // Add the Authorization header
        },
      });
      setData(response.data);
      console.log("Data fetched successfully:", response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Handle search
  const handleSearch = (e) => {
    setSearch(e.target.value);
    console.log(e.target.value);
  };

  // Filtered data based on search
  const filteredData = data.filter((profile) =>
    profile.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-white w-full md:w-1/3 lg:w-1/4 rounded-xl shadow-md p-4 h-fit" >
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-4">
        <p className="text-xl font-bold text-gray-800">Patients</p>
        <div className="flex items-center w-full md:w-auto mt-2 md:mt-0 border border-gray-300 rounded-lg px-2 py-1">
          <input
            type="text"
            placeholder="Search..."
            value={search}
            className="flex-grow focus:outline-none text-sm text-gray-700"
            onChange={handleSearch}
          />
          <img src={searchBar} alt="search" className="w-5 h-5" />
        </div>
      </div>

      {/* Patient List */}
      <div className="overflow-y-auto h-[60vh] space-y-2">
        {filteredData.map((profile) => (
          <div
            key={profile.id}
            className="flex justify-between items-center px-2 py-2 hover:cursor-pointer hover:bg-gray-100 rounded-lg"
            onClick={() => onSelectProfile(profile)}
          >
            <div className="flex items-center gap-3">
              <img
                src={profile.profile_picture}
                alt="profile_picture"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <p className="text-lg font-medium text-gray-800">{profile.name}</p>
                <p className="text-sm text-gray-600">
                  {profile.gender}, {profile.age}
                </p>
              </div>
            </div>
            <div className="text-gray-500 hover:font-extrabold">...</div>
          </div>
        ))}
        {filteredData.length === 0 && (
          <p className="text-gray-500 text-center mt-4">No patients found.</p>
        )}
      </div>
    </div>
  );
}

export default LeftSideBar;





