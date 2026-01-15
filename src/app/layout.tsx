import type { Metadata } from "next";
import { Nanum_Pen_Script, Gowun_Dodum } from "next/font/google";
import "./globals.css";

const nanumPen = Nanum_Pen_Script({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-nanum-pen",
});

const gowunDodum = Gowun_Dodum({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-gowun-dodum",
});

export const metadata: Metadata = {
  title: "Diary Maker - 나만의 감성 일기장",
  description: "짧은 메모로 완성하는 나만의 감성 일기",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${nanumPen.variable} ${gowunDodum.variable} font-sans antialiased bg-[#FDFBF7] text-[#2C3E50]`}
      >
        {children}
      </body>
    </html>
  );
}
