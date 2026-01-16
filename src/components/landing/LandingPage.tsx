import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="min-h-screen p-4 md:p-8 overflow-x-hidden wood-pattern font-hand text-slate-800">
      {/* Main Notebook Container */}
      <div className="max-w-4xl mx-auto notebook-page min-h-[90vh] p-8 md:p-16 rounded-sm relative transform rotate-[0.5deg]">
        
        {/* Binder Rings (Visual Decoration) */}
        <div className="absolute -left-3 top-0 bottom-0 flex flex-col justify-evenly h-full py-10 z-10 pointer-events-none">
          <div className="w-8 h-8 rounded-full bg-gray-300 border border-gray-400 shadow-inner mb-4"></div>
          <div className="w-8 h-8 rounded-full bg-gray-300 border border-gray-400 shadow-inner mb-4"></div>
          <div className="w-8 h-8 rounded-full bg-gray-300 border border-gray-400 shadow-inner mb-4"></div>
          <div className="w-8 h-8 rounded-full bg-gray-300 border border-gray-400 shadow-inner mb-4"></div>
          <div className="w-8 h-8 rounded-full bg-gray-300 border border-gray-400 shadow-inner mb-4"></div>
        </div>

        {/* Header / Nav */}
        <nav className="flex justify-between items-center mb-12 relative z-20 pl-8">
          <div className="text-3xl font-bold tracking-tighter transform -rotate-2">
            Diary Maker ✏️
          </div>
          <Link
            href="/login"
            className="bg-slate-800 text-white px-6 py-2 rounded-full transform hover:scale-105 transition-all shadow-lg hover:shadow-xl font-sans text-sm tracking-wide"
          >
            로그인하기
          </Link>
        </nav>

        {/* Hero Section */}
        <main className="pl-8 relative z-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block px-3 py-1 bg-yellow-100 text-yellow-800 rounded-lg text-lg transform -rotate-1 shadow-sm border border-yellow-200">
                ✨ 오늘도 수고한 당신에게
              </div>
              <h1 className="text-5xl md:text-6xl leading-tight font-pen">
                오늘의 짧은 생각,<br />
                <span className="marker-highlight">따뜻한 일기</span>가 되다.
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed pt-4">
                &quot;야근, 비 옴, 편의점...&quot;<br />
                단어 몇 개만 던져주세요. <br />
                AI가 당신의 기분에 맞춰 일기 한 페이지를 써드릴게요.
              </p>
              <div className="pt-8 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/login"
                  className="bg-indigo-600 text-white text-xl px-8 py-4 rounded-xl shadow-md hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2 font-sans"
                >
                  일기 쓰러 가기 📒
                </Link>
                <button className="px-8 py-4 text-indigo-700 underline underline-offset-4 decoration-wavy decoration-indigo-300 hover:text-indigo-900 transition-colors">
                  예시 보기
                </button>
              </div>
            </div>

            {/* Right Side: Polaroid Stack */}
            <div className="relative mt-8 md:mt-0 h-[400px]">
              {/* Polaroid 1 */}
              <div className="absolute top-0 right-4 w-64 bg-white p-3 pb-8 shadow-xl transform rotate-6 border border-gray-100 z-10 transition-transform hover:scale-105 hover:rotate-2 hover:z-50 duration-300 cursor-pointer">
                <div className="h-48 bg-slate-200 rounded-sm mb-3 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://images.unsplash.com/photo-1515890435782-59a5bb6e0c15?q=80&w=400&auto=format&fit=crop"
                    alt="Rainy day"
                    className="w-full h-full object-cover opacity-80 mix-blend-multiply"
                  />
                </div>
                <p className="text-xl text-center text-gray-700 font-pen">비 오는 날의 라면 🍜</p>
                {/* Tape element */}
                <div className="tape absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-8 bg-white/30 rotate-3"></div>
              </div>

              {/* Polaroid 2 */}
              <div className="absolute top-8 right-16 w-64 bg-white p-3 pb-8 shadow-xl transform -rotate-3 border border-gray-100 z-20 transition-transform hover:scale-105 hover:rotate-0 hover:z-50 duration-300 cursor-pointer">
                <div className="text-sm p-4 h-48 bg-gray-50 text-gray-600 overflow-hidden leading-relaxed font-sans border border-gray-100">
                  &quot;오늘은 정말 정신없는 하루였다. 갑자기 쏟아진 비에 우산도 없이 편의점으로 뛰어가 컵라면을 샀다. 후두둑 떨어지는 빗소리를 들으며 먹는 따뜻한 국물... 왠지 모르게 위로받는 기분이었다.&quot;
                </div>
                <p className="text-xl text-center text-gray-700 mt-2 font-pen">2026.01.16</p>
                <div className="tape absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-8 bg-white/30 -rotate-2"></div>
              </div>
            </div>
          </div>

          {/* Features Section */}
          <div className="mt-32 space-y-24">
            {/* Feature 1 */}
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-full md:w-1/2 bg-white p-6 rounded-lg shadow-lg border border-gray-200 transform -rotate-1 relative">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center text-2xl shadow-md z-10">✍️</div>
                <h3 className="text-2xl font-bold mb-4 font-sans text-slate-800">키워드만 입력하세요</h3>
                <div className="bg-gray-100 p-4 rounded text-gray-600 font-mono text-sm leading-loose">
                  &gt; 야근<br />
                  &gt; 버스 놓침<br />
                  &gt; 밤하늘 별
                </div>
              </div>
              <div className="w-full md:w-1/2 pl-4">
                <h3 className="text-3xl font-bold text-slate-800 mb-3 font-pen">찰떡같이 알아듣는 AI</h3>
                <p className="text-lg text-slate-600">
                  단어 몇 개만 툭 던져도, 문맥을 파악해서 <br />
                  가장 자연스러운 문장으로 이어줍니다.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
              <div className="w-full md:w-1/2 bg-white p-6 rounded-lg shadow-lg border border-gray-200 transform rotate-1 relative">
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-indigo-400 rounded-full flex items-center justify-center text-2xl shadow-md z-10">🎭</div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-pink-50 border border-pink-200 p-3 rounded text-center text-pink-700 text-sm font-sans">새벽 감성 🌙</div>
                  <div className="bg-blue-50 border border-blue-200 p-3 rounded text-center text-blue-700 text-sm font-sans">담백하게 📝</div>
                  <div className="bg-yellow-50 border border-yellow-200 p-3 rounded text-center text-yellow-700 text-sm font-sans">귀엽게 🐥</div>
                  <div className="bg-purple-50 border border-purple-200 p-3 rounded text-center text-purple-700 text-sm font-sans">소설가처럼 🖋️</div>
                </div>
              </div>
              <div className="w-full md:w-1/2 text-right pr-4">
                <h3 className="text-3xl font-bold text-slate-800 mb-3 font-pen">오늘의 기분에 맞춰서</h3>
                <p className="text-lg text-slate-600">
                  같은 일도 기분에 따라 다르게 기록되죠.<br />
                  원하는 페르소나를 선택해보세요.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col md:flex-row gap-8 items-center pb-20">
              <div className="w-full md:w-1/2 text-center bg-gray-800 p-2 pb-8 shadow-2xl relative rotate-1">
                <div className="bg-white h-48 flex items-center justify-center text-gray-400">
                  <span className="text-4xl text-gray-300">Image</span>
                </div>
                <p className="text-white mt-4 font-pen text-xl">나만의 일기장 ✨</p>
                <div className="absolute top-0 inset-x-0 h-full bg-gradient-to-br from-white/5 to-transparent pointer-events-none"></div>
              </div>
              <div className="w-full md:w-1/2 pl-4">
                <h3 className="text-3xl font-bold text-slate-800 mb-3 font-pen">간직하고 싶은 순간</h3>
                <p className="text-lg text-slate-600">
                  작성한 일기는 폴라로이드 감성의 이미지로 <br />
                  저장해서 공유할 수 있어요.
                </p>
              </div>
            </div>

          </div>

          {/* Footer area within notebook */}
          <div className="border-t-2 border-dashed border-gray-300 pt-8 text-center text-slate-500 font-sans text-sm pb-8">
            Diary Maker © 2026. Made with ❤️ for mindful writing.
          </div>

        </main>
      </div>
    </div>
  );
}