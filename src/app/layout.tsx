import type { Metadata } from "next";
import { Geist, Geist_Mono, Gowun_Dodum, Nanum_Pen_Script, Patrick_Hand, Gamja_Flower } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const gowunDodum = Gowun_Dodum({
  weight: "400",
  variable: "--font-gowun-dodum",
  subsets: ["latin"],
});

const nanumPen = Nanum_Pen_Script({
  weight: "400",
  variable: "--font-nanum-pen",
  subsets: ["latin"],
});

const patrickHand = Patrick_Hand({
  weight: "400",
  variable: "--font-patrick-hand",
  subsets: ["latin"],
});

const gamjaFlower = Gamja_Flower({
  weight: "400",
  variable: "--font-gamja-flower",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Diary Maker | 오늘의 짧은 생각, 따뜻한 일기가 되다",
  description: "AI와 함께하는 감성 일기 작성 서비스",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${gowunDodum.variable} ${nanumPen.variable} ${patrickHand.variable} ${gamjaFlower.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}