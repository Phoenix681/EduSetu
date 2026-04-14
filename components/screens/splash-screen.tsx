"use client"

import Image from "next/image"

interface SplashScreenProps {
  onComplete: () => void
}

export function SplashScreen({ onComplete }: SplashScreenProps) {
  return (
    <div 
      className="h-full w-full flex flex-col items-center justify-center bg-[#4A4A9E] relative overflow-hidden cursor-pointer"
      onClick={onComplete}
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-40 h-40 border border-white rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 border border-white rounded-full"></div>
        <div className="absolute top-1/3 right-20 w-24 h-24 border border-white rounded-full"></div>
      </div>
      
      {/* Logo */}
      <div className="relative z-10 flex flex-col items-center">
        <div className="w-32 h-32 flex items-center justify-center">
          <Image src="/icon.png" alt="EduSetu Logo" width={128} height={128} />
        </div>
      </div>
    </div>
  )
}
