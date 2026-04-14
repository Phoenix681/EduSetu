"use client"

import { ArrowLeft, ChevronDown } from "lucide-react"
import { useState } from "react"

interface CalendarScreenProps {
  onBack: () => void
}

const events = [
  { day: 1,  month: "APR", title: "National Day",         type: "Holiday", badgeBg: "bg-[#FD3667]", cardBg: "bg-[#FFF1EC]", typColor: "text-[#a2a0a0]" },
  { day: 10, month: "APR", title: "Summer Holiday Event", type: "Event",   badgeBg: "bg-[#FD3667]", cardBg: "bg-[#D4F5FF]", typColor: "text-[#a2a0a0]" },
  { day: 22, month: "APR", title: "School Function",      type: "Event",   badgeBg: "bg-[#FD3667]", cardBg: "bg-[#FFD4D4]", typColor: "text-[#a2a0a0]" },
  { day: 26, month: "APR", title: "Dean Meeting",         type: "Event",   badgeBg: "bg-[#FD3667]", cardBg: "bg-[#D4FFEA]", typColor: "text-[#a2a0a0]" },
  { day: 30, month: "APR", title: "Carnival in the City", type: "Holiday", badgeBg: "bg-[#FD3667]", cardBg: "bg-[#FFF1EC]", typColor: "text-[#a2a0a0]" },
]

// dots: array of colors for that day's event dots
const calendarDays: { day: number | null; dots: string[]; isToday?: boolean }[] = [
  { day: null, dots: [] },
  { day: null, dots: [] },
  { day: 1,  dots: [] },
  { day: 2,  dots: ["#FD3667", "#FD3667"] },
  { day: 3,  dots: [] },
  { day: 4,  dots: ["#FD3667", "#FD3667", "#FD3667"] },
  { day: 5,  dots: ["#FD3667"] },
  { day: 6,  dots: [] },
  { day: 7,  dots: [] },
  { day: 8,  dots: [], isToday: true },
  { day: 9,  dots: [] },
  { day: 10, dots: [] },
  { day: 11, dots: ["#FD3667", "#FD3667"] },
  { day: 12, dots: [] },
  { day: 13, dots: [] },
  { day: 14, dots: [] },
  { day: 15, dots: [] },
  { day: 16, dots: [] },
  { day: 17, dots: [] },
  { day: 18, dots: [] },
  { day: 19, dots: [] },
  { day: 20, dots: [] },
  { day: 21, dots: [] },
  { day: 22, dots: [] },
  { day: 23, dots: [] },
  { day: 24, dots: ["#FD3667", "#FD3667"] },
  { day: 25, dots: [] },
  { day: 26, dots: ["#FD3667"] },
  { day: 27, dots: [] },
  { day: 28, dots: [] },
  { day: 29, dots: ["#FD3667", "#FD3667"] },
  { day: 30, dots: ["#FD3667"] },
  { day: 31, dots: [] },
]

export function CalendarScreen({ onBack }: CalendarScreenProps) {
  const [year, setYear] = useState(2026)

  return (
    <div className="h-full w-full flex flex-col bg-white">
      {/* Header */}
      <div
        className="bg-[#4A4A9E] pt-12 pb-4 px-4 relative overflow-hidden"
      >
        <div className="relative flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button onClick={onBack} className="text-white">
              <ArrowLeft className="w-6 h-6" />
            </button>
            <h1 className="text-white font-semibold text-lg">Calendar</h1>
          </div>
          <button className="flex items-center gap-1 text-white text-sm">
            {year}
            <ChevronDown className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-auto">
        {/* Calendar Grid */}
        <div className="px-4 py-4">
          <h2 className="text-[#4A4A9E] font-semibold mb-3">April 2026</h2>

          {/* Days of week */}
          <div className="grid grid-cols-7 gap-1 mb-2">
            {["M", "T", "W", "T", "F", "S", "S"].map((day, index) => (
              <div key={index} className="text-center text-gray-400 text-xs font-medium py-1">
                {day}
              </div>
            ))}
          </div>

          {/* Calendar days */}
          <div className="grid grid-cols-7 gap-1">
            {calendarDays.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center py-1"
              >
                {item.day && (
                  <>
                    {item.isToday ? (
                      <div className="w-8 h-8 bg-[#FD3667] text-white rounded-lg flex items-center justify-center text-sm font-semibold">
                        {item.day}
                      </div>
                    ) : (
                      <span className="text-sm text-gray-700 w-8 h-8 flex items-center justify-center">
                        {item.day}
                      </span>
                    )}
                    {item.dots.length > 0 && (
                      <div className="flex gap-0.5 mt-0.5">
                        {item.dots.map((color, di) => (
                          <div
                            key={di}
                            className="w-1 h-1 rounded-full"
                            style={{ backgroundColor: color }}
                          />
                        ))}
                      </div>
                    )}
                  </>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Events List */}
        <div className="px-3 py-2 flex flex-col gap-2">
          {events.map((event, index) => (
            <div key={index} className="flex items-center gap-3">
              {/* Date badge */}
              <div
                className={`${event.badgeBg} text-white rounded-full w-12 h-12 flex flex-col items-center justify-center flex-shrink-0`}
              >
                <span className="text-base font-bold leading-none">
                  {event.day.toString().padStart(2, "0")}
                </span>
                <span className="text-[9px] uppercase tracking-wide font-medium">
                  {event.month}
                </span>
              </div>

              {/* Event info card */}
              <div
                className={`flex-1 ${event.cardBg} rounded-xl px-3 py-3`}
              >
                <p className="font-semibold text-gray-800 text-sm">{event.title}</p>
                <p className={`text-xs font-medium mt-0.5 ${event.typColor}`}>
                  {event.type}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="h-6" />
      </div>
    </div>
  )
}