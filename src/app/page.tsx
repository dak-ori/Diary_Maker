import Link from "next/link";
import { PenTool, BookHeart } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4 bg-paper-pattern text-ink">
      <div className="max-w-2xl w-full text-center space-y-8">
        {/* 로고 아이콘 */}
        <div className="flex justify-center mb-6 animate-bounce-slow">
          <BookHeart size={64} strokeWidth={1.5} className="text-brand-600" />
        </div>

        {/* 메인 타이틀 */}
        <h1 className="text-5xl md:text-7xl font-hand font-bold mb-4 tracking-wide text-brand-900">
          Diary Maker
        </h1>

        {/* 서브 카피 */}
        <p className="text-xl md:text-2xl font-body text-gray-600 leading-relaxed break-keep">
          오늘 하루는 어떠셨나요?<br />
          <span className="bg-highlight px-2">단어 몇 개</span>만 던져주세요.<br />
          당신의 하루를 감성적인 일기로 완성해 드립니다.
        </p>

        {/* CTA 버튼 */}
        <div className="pt-8">
          <Link
            href="/login"
            className="group relative inline-flex items-center gap-3 px-8 py-4 text-xl font-hand font-bold text-paper bg-brand-600 rounded-full shadow-lg hover:bg-brand-700 transition-all transform hover:-translate-y-1 hover:shadow-xl"
          >
            <PenTool size={24} />
            <span>일기 쓰러 가기</span>
            {/* 버튼 호버 시 나타나는 효과 */}
            <span className="absolute inset-0 rounded-full border-2 border-dashed border-white opacity-0 group-hover:opacity-100 transition-opacity" />
          </Link>
        </div>

        {/* 예시 카드 (장식용) */}
        <div className="mt-16 relative transform -rotate-2 hover:rotate-0 transition-transform duration-500">
          <div className="bg-white p-6 shadow-md rounded-sm max-w-sm mx-auto border border-gray-200">
            <div className="border-b border-gray-200 pb-2 mb-4 flex justify-between items-end">
              <span className="font-hand text-2xl text-gray-500">2026. 01. 15.</span>
              <span className="text-2xl">🌦️</span>
            </div>
            <p className="font-hand text-2xl leading-loose text-left text-gray-700">
              오늘 비가 와서 조금 우울했다. 편의점에서 컵라면을 사 먹었는데...
            </p>
          </div>
          {/* 테이프 장식 */}
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-32 h-8 bg-yellow-200 opacity-60 rotate-2 shadow-sm"></div>
        </div>
      </div>
      
      <footer className="absolute bottom-4 text-sm font-body text-gray-400">
        © 2026 Diary Maker. All rights reserved.
      </footer>
    </main>
  );
}