import React from "react";
import calender from "../assets/BirthIcon.svg";
import gender from "../assets/FemaleIcon.svg";
import callicon from "../assets/PhoneIcon.svg";
import insuranceIcon from "../assets/InsuranceIcon.svg";

function RightSideBar({ profile }) {
  console.log(profile);
  if (!profile) {
    // Render a placeholder when no profile is selected
    return (
      <div className="bg-white rounded-xl p-4 w-full md:w-1/3 lg:w-1/5 shadow-md h-fit">
        <p className="text-center text-gray-500">
          Select a profile to view details
        </p>
      </div>
    );
  } else {
    return (
      <div className="bg-white rounded-xl p-4 w-full md:w-1/3 lg:w-1/5 shadow-md h-fit">
        {/* Profile Picture */}
        <div className="flex justify-center pt-4">
          <img
            src={profile.profile_picture}
            alt="profile"
            className="w-24 h-24 rounded-full object-cover"
          />
        </div>

        {/* Profile Name */}
        <div className="flex justify-center mt-4">
          <p className="font-bold text-lg text-gray-800">{profile.name}</p>
        </div>

        {/* Profile Details */}
        <div className="mt-6 space-y-4">
          {/* Date of Birth */}
          <div className="flex items-center gap-3">
            <img src={calender} alt="Date of Birth" className="h-6 w-6" />
            <div>
              <p className="text-sm text-gray-600">Date Of Birth</p>
              <p className="text-gray-800">{profile.date_of_birth}</p>
            </div>
          </div>

          {/* Gender */}
          <div className="flex items-center gap-3">
            <img src={gender} alt="Gender" className="h-6 w-6" />
            <div>
              <p className="text-sm text-gray-600">Gender</p>
              <p className="text-gray-800">{profile.gender}</p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex items-center gap-3">
            <img src={callicon} alt="Contact Info" className="h-6 w-6" />
            <div>
              <p className="text-sm text-gray-600">Contact Info</p>
              <p className="text-gray-800">{profile.phone_number}</p>
            </div>
          </div>

          {/* Emergency Contact */}
          <div className="flex items-center gap-3">
            <img src={callicon} alt="Emergency Contact" className="h-6 w-6" />
            <div>
              <p className="text-sm text-gray-600">Emergency Contacts</p>
              <p className="text-gray-800">{profile.emergency_contact}</p>
            </div>
          </div>

          {/* Insurance Provider */}
          <div className="flex items-center gap-3">
            <img src={insuranceIcon} alt="Insurance Provider" className="h-6 w-6" />
            <div>
              <p className="text-sm text-gray-600">Insurance Provider</p>
              <p className="text-gray-800">{profile.insurance_type}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RightSideBar;
