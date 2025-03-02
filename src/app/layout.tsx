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

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="ko" className={`${pretendard.variable}`}>
        <head>
            <link rel="apple-touch-icon" sizes="180x180" href="/pwa-icons/apple-icon-180x180.png"/>
            <meta name="apple-mobile-web-app-capable" content="yes"/>
            <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent"/>
            <meta name="theme-color" content="#ffffff"/>
        </head>
        <body className={pretendard.className}>
        <div className="mx-auto w-full max-w-screen-sm overflow-hidden">
            {children}
        </div>
        </body>
        </html>
    );
}
