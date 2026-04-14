"use client"

import { ArrowLeft, User } from "lucide-react"
import { UserProfile } from "./sign-up-screen"

interface ProfileScreenProps {
  userProfile: UserProfile
  onBack: () => void
}

export function ProfileScreen({ userProfile, onBack }: ProfileScreenProps) {
  const profileDetails = [
    { label: "Roll Number",       value: userProfile.rollNumber,       color: "text-[#4A4A9E]" },
    { label: "Date of Birth",     value: userProfile.dob,              color: "text-[#4A4A9E]" },
    { label: "Blood Group",       value: userProfile.bloodGroup,       color: "text-[#4A4A9E]"   },
    { label: "Emergency Contact", value: userProfile.emergencyContact, color: "text-[#4A4A9E]" },
    { label: "Father's Name",     value: userProfile.fatherName,       color: "text-[#4A4A9E]" },
    { label: "Mother's Name",     value: userProfile.motherName,       color: "text-[#4A4A9E]" },
  ]

  return (
    <div className="h-full w-full flex flex-col" style={{ backgroundColor: "#F5F5F5" }}>

      {/* ── Purple header ── */}
      <div
        className="relative overflow-hidden px-4 pt-12 pb-16"
        style={{ backgroundColor: "#4A4A9E" }}
      > 

        {/* Back + title */}
        <div className="relative z-10 flex items-center gap-3 mb-8">
          <button onClick={onBack} className="text-white">
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h1 className="text-white font-light text-lg">Profile</h1>
        </div>

        {/* Avatar + name */}
        <div className="relative z-10 flex flex-col items-center">
          <div className="w-24 h-24 rounded-full border-4 border-white overflow-hidden bg-white/20 flex items-center justify-center shadow-lg">
            <User className="w-12 h-12 text-white" />
          </div>
          <h2 className="text-white text-xl font-semibold mt-4">
            {userProfile.name}
          </h2>
          <p className="text-white/50 text-sm mt-0.5">
            {`Class ${userProfile.className} ${userProfile.section}`}
          </p>
        </div>
      </div>

      {/* ── White card pulled up over header ── */}
      <div
        className="flex-1 overflow-auto -mt-5 rounded-t-3xl bg-white flex flex-col"
      >
        {/* Details table */}
        <div className="px-5 pt-4">
          {profileDetails.map((item, index) => (
            <div
              key={index}
              className={`grid grid-cols-2 items-center py-4 ${
                index !== profileDetails.length - 1
                  ? "border-b border-gray-100"
                  : ""
              }`}
            >
              <span className="text-gray-600 text-sm font-medium">{item.label}</span>
              <span className={`text-sm font-medium ${item.color}`}>
                {item.value}
              </span>
            </div>
          ))}
        </div>

        {/* Ask for Update button */}
        <div className="px-6 py-6 mt-auto">
          <button
            onClick={() => alert("Request sent to school admin")}
            className="w-full py-4 rounded-full font-semibold text-white text-base"
            style={{
              background: "linear-gradient(90deg, #FF4D7E 0%, #FD3667 100%)",
            }}
          >
            Ask for Update
          </button>
        </div>
      </div>
    </div>
  )
}