import { GoogleSignInButton } from "@/components/auth/google-signin-button";
import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="min-h-screen p-4 md:p-8 overflow-x-hidden bg-[#e3d5c6]" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/wood-pattern.png")' }}>
      {/* Notebook Container */}
      <div className="max-w-lg mx-auto notebook-page min-h-[80vh] p-8 md:p-12 rounded-sm relative transform rotate-[0.3deg]">
        
        {/* Binder Rings */}
        <div className="absolute -left-3 top-0 bottom-0 flex-col justify-evenly h-full py-10 z-10 hidden md:flex">
          <div className="w-8 h-8 rounded-full bg-gray-300 border border-gray-400 shadow-inner mb-4"></div>
          <div className="w-8 h-8 rounded-full bg-gray-300 border border-gray-400 shadow-inner mb-4"></div>
          <div className="w-8 h-8 rounded-full bg-gray-300 border border-gray-400 shadow-inner mb-4"></div>
        </div>

        {/* Content */}
        <div className="pl-2 md:pl-8 relative z-20 flex flex-col items-center justify-center min-h-[70vh]">
          
          {/* Header */}
          <Link href="/" className="text-3xl md:text-4xl font-bold text-slate-800 tracking-tighter transform -rotate-2 mb-2 handwritten">
            Diary Maker ✏️
          </Link>
          
          <p className="text-slate-600 text-lg mb-12 text-center">
            짧은 메모로 완성하는 나만의 감성 일기
          </p>

          {/* Login Card - Polaroid Style */}
          <div className="w-full max-w-sm bg-white p-6 pb-8 shadow-xl transform -rotate-1 border border-gray-100 relative">
            {/* Tape */}
            <div className="tape absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-8 rotate-2"></div>
            
            <div className="pt-4 space-y-6">
              <div className="text-center">
                <p className="text-2xl handwritten text-gray-700 mb-2">환영합니다! 👋</p>
                <p className="text-sm text-gray-500">
                  로그인하여 일기 작성을 시작해보세요
                </p>
              </div>
              
              <GoogleSignInButton />
              
              <p className="text-xs text-center text-gray-400 pt-2">
                Google 계정으로 간편하게 시작하세요
              </p>
            </div>
          </div>

          {/* Bottom decoration */}
          <div className="mt-12 text-center text-gray-400 text-sm">
            <p className="handwritten text-lg">오늘도 기록하는 당신을 응원합니다 ✨</p>
          </div>
        </div>
      </div>
    </main>
  );
}
