import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/ui/header";

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
      <body
        className="bg-white font-sans"
      >
        <Header />
        <main className={"max-w-screen-xl mx-auto px-12 sm:px-6 lg:px-24"}>
          {children}
        </main>
      </body>
    </html>
  );
}
