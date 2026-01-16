'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LayoutDashboard, PenLine, LogOut } from 'lucide-react'
import { cn } from '@/lib/utils'

const navItems = [
    { href: '/dashboard', label: '홈', icon: LayoutDashboard },
    { href: '/new-entry', label: '새 일기', icon: PenLine },
]

export function Sidebar() {
    const pathname = usePathname()

    return (
        <aside className="hidden md:flex flex-col w-64 h-full border-r border-slate-200 bg-white shadow-xl z-10">
            <div className="p-6 border-b border-slate-100 flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-bold">D</div>
                <h1 className="text-xl font-bold text-slate-800 tracking-tight">
                    Diary Maker
                </h1>
            </div>

            <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
                {navItems.map((item) => {
                    const Icon = item.icon
                    const isActive = pathname === item.href
                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                "flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group relative overflow-hidden",
                                isActive
                                    ? "bg-indigo-600 text-white shadow-md shadow-indigo-200"
                                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                            )}
                        >
                            <Icon className={cn("w-5 h-5", isActive ? "text-white" : "text-slate-400 group-hover:text-indigo-600")} />
                            <span className="font-medium">{item.label}</span>
                        </Link>
                    )
                })}
            </nav>

            <div className="p-4 border-t border-slate-100">
                <form action="/auth/signout" method="post">
                    <button
                        type="submit"
                        className="flex items-center gap-3 w-full px-4 py-3 text-slate-600 hover:bg-red-50 hover:text-red-600 rounded-xl transition-colors group"
                    >
                        <LogOut className="w-5 h-5 text-slate-400 group-hover:text-red-500" />
                        <span className="font-medium">로그아웃</span>
                    </button>
                </form>
            </div>
        </aside>
    )
}
