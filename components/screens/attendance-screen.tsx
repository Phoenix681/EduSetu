"use client"

import { ArrowLeft, ChevronDown } from "lucide-react"
import { useState } from "react"

interface AttendanceScreenProps {
  onBack: () => void
}

const attendanceData2025 = [
  { month: "APR", present: 23, absent: 3, leave: 0 },
  { month: "MAY", present: 24, absent: 0, leave: 3 },
  { month: "JUN", present: 25, absent: 0, leave: 1 },
  { month: "JUL", present: 26, absent: 0, leave: 0 },
  { month: "AUG", present: 23, absent: 3, leave: 0 },
  { month: "SEP", present: 23, absent: 3, leave: 0 },
  { month: "OCT", present: 23, absent: 3, leave: 0 },
  { month: "NOV", present: 23, absent: 3, leave: 0 },
  { month: "DEC", present: 23, absent: 3, leave: 0 },
]

const attendanceData2026 = [
  { month: "JAN", present: 23, absent: 3, leave: 0 },
]

// March 2026: starts on Sunday. In M-T-W-T-F-S-S grid, Sunday = index 6 → 6 empty cells
const calendarData = {
  month: "March 2026",
  // present=23 days, absent=3 (days 3,15,23), weekends=5 Sat+5 Sun
  days: [
    { day: null }, { day: null }, { day: null }, { day: null }, { day: null }, { day: null }, // offset: March 2026 starts on Sunday
    { day: 1, status: "present" },
    { day: 2, status: "present" },
    { day: 3, status: "absent" },
    { day: 4, status: "present" },
    { day: 5, status: "present" },
    { day: 6, status: "present" },
    { day: 7, status: "present" },
    { day: 8, status: "weekend" },
    { day: 9, status: "weekend" },
    { day: 10, status: "present" },
    { day: 11, status: "present" },
    { day: 12, status: "present" },
    { day: 13, status: "present" },
    { day: 14, status: "present" },
    { day: 15, status: "absent" },
    { day: 16, status: "weekend" },
    { day: 17, status: "weekend" },
    { day: 18, status: "present" },
    { day: 19, status: "present" },
    { day: 20, status: "present" },
    { day: 21, status: "present" },
    { day: 22, status: "present" },
    { day: 23, status: "absent" },
    { day: 24, status: "weekend" },
    { day: 25, status: "weekend" },
    { day: 26, status: "present" },
    { day: 27, status: "present" },
    { day: 28, status: "present" },
    { day: 29, status: "present" },
    { day: 30, status: "present" },
    { day: 31, status: "present" },
  ]
}

type ViewType = "yearly" | "monthly"

export function AttendanceScreen({ onBack }: AttendanceScreenProps) {
  const [year, setYear] = useState("2025")
  const [view, setView] = useState<ViewType>("yearly")

  const getDayStyle = (status: string) => {
    switch (status) {
      case "present":
        return "bg-[#D4FFEA] text-[#333333]"
      case "absent":
        return "bg-[#FFF1EC] text-[#333333]"
      case "leave":
        return "bg-[#B3E5FC] text-[#333333]"
      case "weekend":
        return "bg-transparent text-gray-400"
      default:
        return "bg-transparent"
    }
  }

  return (
    <div className="h-full w-full flex flex-col bg-[#F5F5F5]">
      {/* Header */}
      <div className="bg-[#4A4A9E] pt-12 pb-4 px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button onClick={onBack} className="text-white">
              <ArrowLeft className="w-6 h-6" />
            </button>
            <h1 className="text-white font-light text-lg">Attendance</h1>
          </div>
          {view === "yearly" && (
            <button
              onClick={() => setView("monthly")}
              className="flex items-center gap-1 text-white text-sm"
            >
              {year}
              <ChevronDown className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-auto">
        {view === "yearly" ? (
          <>
            {/* Year 2025 */}
            <div className="px-4 py-4">
              <h2 className="text-[#4A4A9E] font-semibold mb-3">Year 2025</h2>
              <div className="space-y-2">
                {attendanceData2025.map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    {/* Pink pill */}
                    <div className="w-11 h-11 bg-[#FD3667] text-white rounded-full flex items-center justify-center text-[14px] font-light flex-shrink-0">
                      {item.month}
                    </div>
                    <div className="flex-1 flex gap-2">
                      <div className="flex-1 bg-[#D4FFEA] rounded-xl py-2 px-1 text-center">
                        <span className="block text-[#12B264] font-medium text-[16px]">{item.present}</span>
                        <span className="text-[14px] text-[#12B264]">Present</span>
                      </div>
                      <div className="flex-1 bg-[#FFF1EC] rounded-xl py-2 px-1 text-center">
                        <span className="block text-[#FD3667] font-medium text-[16px]">{item.absent}</span>
                        <span className="text-[14px] text-[#FD3667]">Absent</span>
                      </div>
                      <div className="flex-1 bg-[#D4F5FF] rounded-xl py-2 px-1 text-center">
                        <span className="block text-[#473F97] font-medium text-[16px]">{item.leave}</span>
                        <span className="text-[14px] text-[#473F97]">Leave</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Year 2026 */}
            <div className="px-4 pb-4">
              <h2 className="text-[#4A4A9E] font-semibold mb-3">Year 2026</h2>
              <div className="space-y-2">
                {attendanceData2026.map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-11 h-11 bg-[#FF5959] text-white rounded-full flex items-center justify-center text-[14px] font-light flex-shrink-0">
                      {item.month}
                    </div>
                    <div className="flex-1 flex gap-2">
                      <div className="flex-1 bg-[#D4FFEA] rounded-xl py-2 px-1 text-center">
                        <span className="block text-[#12B264] font-medium text-[16px]">{item.present}</span>
                        <span className="text-[14px] text-[#12B264]">Present</span>
                      </div>
                      <div className="flex-1 bg-[#FFF1EC] rounded-xl py-2 px-1 text-center">
                        <span className="block text-[#FD3667] font-medium text-[16px]">{item.absent}</span>
                        <span className="text-[14px] text-[#FD3667]">Absent</span>
                      </div>
                      <div className="flex-1 bg-[#D4F5FF] rounded-xl py-2 px-1 text-center">
                        <span className="block text-[#473F97] font-medium text-[16px]">{item.leave}</span>
                        <span className="text-[14px] text-[#473F97]">Leave</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        ) : (
          /* Monthly Calendar View */
          <div className="px-4 py-4">
            <h2 className="text-[#473F97] font-medium mb-4">{calendarData.month}</h2>

            {/* Days of week header */}
            <div className="grid grid-cols-7 gap-4 mb-1">
              {["M", "T", "W", "T", "F", "S", "S"].map((day, index) => (
                <div key={index} className="text-center text-gray-400 text-sm py-1">
                  {day}
                </div>
              ))}
            </div>

            {/* Calendar days */}
            <div className="grid grid-cols-7 gap-4">
              {calendarData.days.map((item, index) => (
                <div
                  key={index}
                  className={`aspect-square flex items-center justify-center rounded-b-md rounded-t-md text-[14px] font-normal ${
                    item.day ? getDayStyle(item.status || "") : ""
                  }`}
                >
                  {item.day}
                </div>
              ))}
            </div>

            {/* Legend cards — large rounded boxes like Figma */}
            <div className="flex gap-3 mt-6">
              <div className="flex-1 bg-[#D4FFEA] rounded-2xl py-3 text-center">
                <span className="block text-[#12B264] font-bold text-[16px]">23</span>
                <span className="text-[14px] text-[#12B264]">Present</span>
              </div>
              <div className="flex-1 bg-[#FFF1EC] rounded-2xl py-3 text-center">
                <span className="block text-[#FD3667] font-bold text-[16px]">3</span>
                <span className="text-[14px] text-[#FD3667]">Absent</span>
              </div>
              <div className="flex-1 bg-[#D4F5FF] rounded-2xl py-3 text-center">
                <span className="block text-[#473F97] font-bold text-[16px]">0</span>
                <span className="text-[14px] text-[#473F97]">Leave</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}