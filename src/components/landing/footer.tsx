export function Footer() {
  return (
    <footer className="border-t-2 border-dashed border-gray-300 pt-8 text-center text-slate-500 font-sans text-sm pb-8">
      <p className="font-hand text-lg mb-2 text-slate-400">
        오늘도 기록하는 당신을 응원합니다.
      </p>
      <p>
        Diary Maker &copy; {new Date().getFullYear()}. Made with ❤️ for mindful writing.
      </p>
    </footer>
  )
}