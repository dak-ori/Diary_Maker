import { GoogleSignInButton } from "@/components/auth/google-signin-button";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4 bg-[#FDFBF7]">
      <div className="w-full max-w-md space-y-8 text-center">
        <div>
          <h1 className="text-4xl font-hand text-brand-900 mb-2">Diary Maker</h1>
          <p className="text-brand-700 font-body text-lg">
            짧은 메모로 완성하는 나만의 감성 일기
          </p>
        </div>
        
        <div className="mt-8 bg-white/50 backdrop-blur-sm p-8 rounded-2xl shadow-sm border border-brand-100">
          <div className="space-y-4">
            <p className="text-sm text-gray-600 mb-4">
              로그인하여 일기 작성을 시작해보세요
            </p>
            <GoogleSignInButton />
          </div>
        </div>
      </div>
    </div>
  );
}
