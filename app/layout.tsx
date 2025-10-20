import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "마일데브 - 보기 쉬운 개발 정보",
  description: "마일데브 웹",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "마일데브 - 보기 쉬운 개발 정보",
    description: "마일데브 웹",
    url: "https://miledev.net",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <header className="text-2xl font-bold">MILE for Developers</header>
      <body
        className={"max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8"}
      >
        {children}
      </body>
    </html>
  );
}
