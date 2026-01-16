import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import { Sidebar } from "@/components/layout/sidebar";

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
    redirect("/");
  }

  return (
    <div className="flex h-screen overflow-hidden bg-slate-50">
      <Sidebar />
      <main className="flex-1 flex flex-col h-full relative overflow-hidden">
        {/* Mobile Header (Hidden on Desktop) */}
        <div className="md:hidden h-14 bg-white border-b flex items-center px-4 justify-between shrink-0 z-20">
          <span className="font-bold text-lg text-slate-800">Diary Maker</span>
          {/* Add a simple mobile menu or just rely on new entry button on dashboard */}
        </div>

        {/* Main Content Area */}
        <div className="flex-1 overflow-y-auto overflow-x-hidden p-4 md:p-6 lg:p-8 w-full scroll-smooth">
          <div className="max-w-6xl mx-auto h-full flex flex-col animate-in fade-in slide-in-from-bottom-4 duration-700">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
}
