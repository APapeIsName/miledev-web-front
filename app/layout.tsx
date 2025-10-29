import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/ui/header";

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
      <body>
        <Header />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
