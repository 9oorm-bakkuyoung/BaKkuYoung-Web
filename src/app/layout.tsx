import type { Metadata } from "next";
import "./globals.css";
import "./reset.css";
import localFont from "next/font/local";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { headers } from "next/headers";

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

export default async function RootLayout({ children }: { children: React.ReactNode }) {
    const token = cookies().get("token")?.value;
    const pathname = (await headers()).get("x-pathname") || "/";

    // 1. 로그인 페이지(`/login`)에서는 로그인 검사를 하지 않음
    if (pathname === "/login") {
        if (token) {
            redirect("/main"); // 로그인된 사용자는 로그인 페이지가 아닌 메인으로 보냄
        }
    }
    // 2. 로그인되지 않은 사용자가 보호된 페이지에 접근하면 `/login`으로 리디렉트
    else if (!token && pathname !== "/") {
        redirect("/login");
    }

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
