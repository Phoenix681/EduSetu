"use client"

import { ArrowLeft, Clock, ChevronRight, Play } from "lucide-react"
import { useState } from "react"

interface ExaminationScreenProps {
  onBack: () => void
}

type ExamView = "list" | "exam"

const exams = [
  {
    id: 1,
    title: "Science Basic Assessment Test",
    duration: "30 Min",
    status: "start",
    score: null,
  },
  {
    id: 2,
    title: "General Knowledge Level IV",
    duration: "30 Min",
    status: "completed",
    score: "40/200",
  },
  {
    id: 3,
    title: "Math Super 20 Exam",
    duration: "30 Min",
    status: "start",
    score: null,
  },
  {
    id: 4,
    title: "General Knowledge Level III",
    duration: "30 Min",
    status: "completed",
    score: "40/200",
  },
  {
    id: 5,
    title: "English Basic Assessment Test",
    duration: "30 Min",
    status: "start",
    score: null,
  },
  {
    id: 6,
    title: "General Knowledge Level II",
    duration: "30 Min",
    status: "start",
    score: null,
  },
]

const examQuestions = [
  {
    id: 1,
    question:
      "Plants prepare their own food using sunlight, carbon dioxide, and water. What is this process called?",
    marks: 2,
    options: ["Respiration", "Transpiration", "Digestion", "Photosynthesis", "Rumination"],
  },
  {
    id: 2,
    question:
      "During which of the following processes is a new substance formed, making it a chemical change?",
    marks: 2,
    options: ["Cutting paper", "Melting wax", "Rusting of iron", "Breaking of glass"],
  },
  {
    id: 3,
    question:
      "Which part of the human digestive system is mainly responsible for absorption of nutrients from digested food?",
    marks: 2,
    options: ["Stomach", "Small intestine", "Large intestine", "Food pipe"],
  },
]

export function ExaminationScreen({ onBack }: ExaminationScreenProps) {
  const [view, setView] = useState<ExamView>("list")
  const [currentExam, setCurrentExam] = useState<(typeof exams)[0] | null>(null)
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: string }>({})

  const startExam = (exam: (typeof exams)[0]) => {
    setCurrentExam(exam)
    setView("exam")
  }

  /* ── EXAM VIEW ── */
  if (view === "exam" && currentExam) {
    return (
      <div className="h-full w-full flex flex-col bg-white">
        {/* Header */}
        <div className="bg-[#4A4A9E] pt-12 pb-4 px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <button onClick={() => setView("list")} className="text-white">
                <ArrowLeft className="w-6 h-6" />
              </button>
              <h1 className="text-white font-light text-lg">General Knowledge...</h1>
            </div>
            <span className="text-white text-sm font-medium">1/30</span>
          </div>
        </div>

        {/* Exam meta row */}
        <div className="px-4 py-3 flex justify-between items-center border-b border-gray-100">
          <span className="text-gray-500 text-sm">Exam Code: 121</span>
          <div className="flex items-center gap-1 text-gray-500 text-sm">
            <Clock className="w-4 h-4" />
            <span>30 Min</span>
          </div>
        </div>

        {/* Questions */}
        <div className="flex-1 overflow-auto px-4 py-4 space-y-7">
          {examQuestions.map((q, index) => (
            <div key={q.id}>
              {/* Question label */}
              <h3 className="text-[#4A4A9E] font-semibold text-sm mb-2">
                Question {index + 1} ({q.marks} Marks)
              </h3>

              {/* Question text card */}
              <div className="bg-[#E8EAEC] rounded-xl px-4 py-3 mb-4">
                <p className="text-[#000000] text-sm leading-relaxed">{q.question}</p>
              </div>

              {/* Options — plain radio rows */}
              <div className="space-y-3 pl-1">
                {q.options.map((option) => {
                  const selected = selectedAnswers[q.id] === option
                  return (
                    <button
                      key={option}
                      onClick={() =>
                        setSelectedAnswers({ ...selectedAnswers, [q.id]: option })
                      }
                      className="w-full flex items-center gap-3 text-left"
                    >
                      {/* Radio circle */}
                      <div
                        className={`w-5 h-5 rounded-full border-2 flex-shrink-0 flex items-center justify-center transition-colors ${
                          selected ? "border-[#4A4A9E]" : "border-gray-400"
                        }`}
                      >
                        {selected && (
                          <div className="w-2.5 h-2.5 rounded-full bg-[#4A4A9E]" />
                        )}
                      </div>
                      <span className="text[#000000] text-sm">{option}</span>
                    </button>
                  )
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Submit button */}
        <div className="px-6 py-4">
          <button
            onClick={() => setView("list")}
            className="w-full py-4 rounded-full font-semibold text-white text-base"
            style={{
              background: "linear-gradient(90deg, #FF4D7E 0%, #FD3667 100%)",
            }}
          >
            Submit
          </button>
        </div>
      </div>
    )
  }

  /* ── LIST VIEW ── */
  return (
    <div className="h-full w-full flex flex-col bg-white">
      {/* Header */}
      <div className="bg-[#4A4A9E] pt-12 pb-4 px-4">
        <div className="flex items-center gap-3">
          <button onClick={onBack} className="text-white">
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h1 className="text-white font-light text-lg">Home Tests</h1>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-auto px-4 py-4">
        <h2 className="text-[#4A4A9E] font-medium mb-4">Examination List</h2>

        <div className="space-y-3">
          {exams.map((exam) => (
            <div
              key={exam.id}
              className="bg-[#DDFFF0] rounded-2xl px-4 py-4"
            >
              {/* Top row: title + chevron */}
              <div className="flex items-start justify-between gap-2">
                <h3 className="font-semibold text-gray-800 text-sm leading-snug flex-1">
                  {exam.title}
                </h3>
                <ChevronRight className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
              </div>

              {/* Duration row */}
              <div className="flex items-center gap-1 text-gray-500 text-xs mt-1">
                <Clock className="w-3 h-3" />
                <span>Duration: {exam.duration}</span>
              </div>

              {/* Score + status row */}
              <div className="flex items-center gap-3 mt-2">
                {exam.score && (
                  <span className="text-gray-500 text-xs">Score: {exam.score}</span>
                )}

                {exam.status === "completed" ? (
                  <span className="px-4 py-1 bg-[#00C853] text-white text-xs font-semibold rounded-full">
                    Completed
                  </span>
                ) : (
                  <button
                    onClick={() => startExam(exam)}
                    className="flex items-center gap-1.5 px-4 py-1.5 bg-[#FD3667] text-white text-xs font-semibold rounded-full"
                  >
                    <Play className="w-3 h-3 fill-white" />
                    Start Test
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}