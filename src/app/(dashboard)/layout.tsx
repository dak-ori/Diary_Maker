import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import Link from "next/link";
import { LogOut, PenLine } from "lucide-react";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  return (
    <div className="min-h-screen bg-paper-pattern font-body text-ink">
      <header className="sticky top-0 z-10 border-b border-brand-200 bg-[#FDFBF7]/80 backdrop-blur-md">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/dashboard" className="text-2xl font-hand font-bold text-brand-800">
            Diary Maker
          </Link>
          
          <nav className="flex items-center gap-4">
            <Link 
              href="/new-entry"
              className="flex items-center gap-2 px-4 py-2 bg-brand-500 text-white rounded-full hover:bg-brand-600 transition-colors text-sm font-medium shadow-sm"
            >
              <PenLine className="w-4 h-4" />
              <span className="hidden sm:inline">새 일기</span>
            </Link>
            
            <form action="/auth/signout" method="post">
               <button 
                 type="submit"
                 className="p-2 text-brand-700 hover:bg-brand-50 rounded-full transition-colors"
                 title="로그아웃"
               >
                 <LogOut className="w-5 h-5" />
               </button>
            </form>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {children}
      </main>
    </div>
  );
}
