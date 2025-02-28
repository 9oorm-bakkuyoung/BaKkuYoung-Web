import type { Metadata } from "next";
import "./globals.css";
import "./reset.css";
import localFont from "next/font/local";

const pretendard = localFont({
  src: "../static/fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendard",
});

export const metadata: Metadata = {
  title: "바꾸영",
  description: "제주 여행자를 위한 실시간 물품 교환 서비스",
  themeColor: "#ffffff",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "바꾸영",
  },
  icons: {
    icon: "/pwa-icons/android-icon-192x192.png",
    apple: "/pwa-icons/apple-icon-180x180.png",
  },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko" className={`${pretendard.variable}`}>
    <head>
      {/* iOS 홈 화면 아이콘 */}
      <link rel="apple-touch-icon" sizes="180x180" href="/pwa-icons/apple-icon-180x180.png"/>
      <meta name="apple-mobile-web-app-capable" content="yes"/>
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent"/>
      <meta name="theme-color" content="#ffffff"/>
    </head>
    <body className={pretendard.className}>
    <div className="mx-auto my-0 w-full max-w-[600px] min-w-[320px]">
      {children}
    </div>
    </body>
    </html>
  );
}
