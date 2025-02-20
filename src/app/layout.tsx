import type { Metadata } from "next";
import "./globals.css";
import "./reset.css";
import localFont from "next/font/local";
import { ClientThemeProvider } from "@/components/ClientThemeProvider";

const pretendard = localFont({
  src: "../static/fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendard",
});

export const metadata: Metadata = {
  title: "제주 물품 공유 플랫폼",
  description: "제주 여행자들을 위한 물품 공유 플랫폼입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko" className={`${pretendard.variable}`}>
      <head>
        {/* iOS 홈 화면 아이콘 */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/icons/apple-icon.png"
        />

        {/* iOS PWA 설정 */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta name="apple-mobile-web-app-title" content="제주공유" />

        {/* PWA manifest */}
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={pretendard.className}>
        <div className="mx-auto my-0 w-full max-w-[600px] min-w-[320px]">
          <ClientThemeProvider>{children}</ClientThemeProvider>
        </div>
      </body>
    </html>
  );
}
