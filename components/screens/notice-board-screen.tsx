"use client"

import { ArrowLeft } from "lucide-react"
import Image from "next/image"

interface NoticeBoardScreenProps {
  onBack: () => void
}

const notices = [
  {
    id: 1,
    title: "School is going for vacation in next month",
    date: "02 May 2026",
    image: "/School is going for vacation in next month.png",
    bgColor: "bg-[#D4FFEA]"
  },
  {
    id: 2,
    title: "Summer Book Fair at School Campus in June",
    date: "19 June 2026",
    image: "/Summer Book Fair at School Campus in June.png",
    bgColor: "bg-[#D4F5FF]"
  },
  {
    id: 3,
    title: "Classes Resume After Summer Break",
    date: "24 July 2026",
    image: "/Classes Resume After Summer Break.png",
    bgColor: "bg-[#FFD4D4]"
  },
  {
    id: 4,
    title: "Annual Reading Week Begins",
    date: "11 Aug 2026",
    image: "/Annual Reading Week Begins.png",
    bgColor: "bg-[#D4FFEA]"
  },
  {
    id: 5,
    title: "Exams & Viva Timetable Announcement",
    date: "18 Sept 2026",
    image: "/Exams & Viva Timetable Announcement.png",
    bgColor: "bg-[#D4F5FF]"
  },
  {
    id: 6,
    title: "Planning the field trip to the animal zoo",
    date: "28 Sept 2026",
    image: "/Planning the field trip to the animal zoo.png",
    bgColor: "bg-[#FFD4D4]"
  },
  {
    id: 7,
    title: "Ganesh Chaturthi Break Commencement",
    date: "25 Sept 2026",
    image: "/Ganesh Chaturthi Break Commencement.png",
    bgColor: "bg-[#D4FFEA]"
  }
]

export function NoticeBoardScreen({ onBack }: NoticeBoardScreenProps) {
  return (
    <div className="h-full w-full flex flex-col bg-white">
      {/* Header */}
      <div className="bg-[#4A4A9E] pt-12 pb-4 px-4">
        <div className="flex items-center gap-3">
          <button onClick={onBack} className="text-white">
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h1 className="text-white font-light text-lg">Notice Board</h1>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-auto px-4 py-4">
        <div className="grid grid-cols-2 gap-3">
          {notices.map((notice) => (
            <div
              key={notice.id}
              className={`${notice.bgColor} rounded-xl p-3`}
            >
              <div className="w-full h-15 rounded-lg overflow-hidden">
                <Image
                  src={notice.image}
                  alt={notice.title}
                  width={60}
                  height={55}
                  className="object-contain"
                />
              </div>
              <p className="text-[14px] font-medium text-[#000000] leading-tight mb-1">
                {notice.title}
              </p>
              <p className="text-[12px] text-[#717070]">{notice.date}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
