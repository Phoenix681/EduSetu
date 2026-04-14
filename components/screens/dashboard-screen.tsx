"use client"

import { Menu, Check, User } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

interface DashboardScreenProps {
  userName: string
  userClass: string
  onMenuOpen: () => void
  onNavigateToHomework?: () => void
  onNavigateToNoticeBoard?: () => void
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
    date: "06 May 2026",
    image: "/Classes Resume After Summer Break.png",
    bgColor: "bg-[#FFD4D4]"
  }
]

const initialHomework = [
  {
    id: 1,
    title: "Learn Chapter 5 with one Essay",
    subject: "English",
    date: "Today",
    completed: false
  },
  {
    id: 2,
    title: "Exercise Trigonometry 1st topic",
    subject: "Maths",
    date: "Today",
    completed: true
  },
  {
    id: 3,
    title: "Hindi writing 3 pages",
    subject: "Hindi",
    date: "Yesterday",
    completed: false
  },
  {
    id: 4,
    title: "Test for History first session",
    subject: "Social Science",
    date: "Yesterday",
    completed: false
  },
  {
    id: 5,
    title: "Learn Atoms Physics",
    subject: "Science",
    date: "16 March 2020",
    completed: true
  },
  {
    id: 6,
    title: "English writing 3 pages",
    subject: "English",
    date: "16 March 2020",
    completed: false
  }
]

export function DashboardScreen({ userName, userClass, onMenuOpen, onNavigateToHomework, onNavigateToNoticeBoard }: DashboardScreenProps) {
  const [homework, setHomework] = useState(initialHomework)

  const toggleComplete = (id: number) => {
    setHomework(prev => prev.map(item => 
      item.id === id ? { ...item, completed: !item.completed } : item
    ))
  }

  return (
    <div className="h-full w-full flex flex-col bg-white">
      {/* Purple header section */}
      <div className="bg-[#4A4A9E] pt-12 pb-4 px-4 relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-40 h-40 border border-white rounded-full -translate-y-1/2 translate-x-1/4"></div>
        </div>
        
        <div className="relative z-10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button onClick={onMenuOpen} className="text-white">
              <Menu className="w-6 h-6" />
            </button>
            <div>
              <h1 className="text-white font-semibold text-lg">{userName}</h1>
              <p className="text-white/70 text-sm">{userClass}</p>
            </div>
          </div>
          <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
            <User className="w-6 h-6 text-white" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-auto px-4 py-4">
        {/* Notice Board */}
        <button 
          onClick={onNavigateToNoticeBoard}
          className="text-[#473F97] font-semibold text-lg mb-3 text-left"
        >
          Notice Board
        </button>
        <div className="flex gap-3 overflow-x-auto pb-4 -mx-4 px-4">
          {notices.map((notice) => (
            <button
              key={notice.id}
              onClick={onNavigateToNoticeBoard}
              className={`flex-shrink-0 w-36 ${notice.bgColor} rounded-xl p-3 text-left`}
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
              <p className="font-medium text-[14px] text-[#000000] leading-tight mb-1">
                {notice.title}
              </p>
              <p className="text-[12px] text-[#a2a0a0] ">{notice.date}</p>
            </button>
          ))}
        </div>

        {/* Homework */}
        <button 
          onClick={onNavigateToHomework}
          className="text-[#4A4A9E] font-light text-lg mb-3 text-left"
        >
          Homework
        </button>
        <div className="space-y-3">
          {homework.map((item) => (
            <div
              key={item.id}
              className="flex items-start gap-3 p-4 rounded-lg bg-homework-bg bg-[#FFF1EC]"
            >
              <button 
                onClick={() => toggleComplete(item.id)}
                className={`w-6 h-6 rounded-full border-2 flex items-center justify-center mt-0.5 ${
                  item.completed 
                    ? "bg-[#473F97] border-[#473F97]" 
                    : "border-[#707070]"
                }`}
              >
                {item.completed && <Check className="w-4 h-4 text-white" />}
              </button>
              <div className="flex-1">
                <p className={`font-medium ${item.completed ? "text-gray-800" : "text-gray-800"}`}>
                  {item.title}
                </p>
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-[#a2a0a0]">{item.subject}</span>
                  <span className="text-gray-400">/</span>
                  <span className="text-[#a2a0a0]">{item.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
