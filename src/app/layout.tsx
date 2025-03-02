import type { Metadata } from "next";
import "./globals.css";
import "./reset.css";
import localFont from "next/font/local";
import { redirect } from "next/navigation";

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

// 세션 확인 함수
async function checkSession() {
    try {
        const res = await fetch("http://ec2-3-38-13-139.ap-northeast-2.compute.amazonaws.com:8080/api/auth/me", { cache: "no-store" });
        if (!res.ok) return null;
        const data = await res.json();
        return data.data;
    } catch (error) {
        return null;
    }
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
    const user = await checkSession();

    if (typeof window !== "undefined") {
        const pathname = window.location.pathname;

        // ✅ 홈 페이지("/")는 로그인 검사하지 않고, 3초 후 로그인 페이지로 이동
        if (pathname === "/") {
            return <>{children}</>;
        }

        // ✅ 로그인한 사용자가 "/login" 또는 "/join"에 접근하면 "/main"으로 리디렉트
        if (user && (pathname === "/login" || pathname === "/join")) {
            redirect("/main");
        }

        // ✅ 로그인하지 않은 사용자가 보호된 페이지에 접근하면 "/login"으로 리디렉트
        if (!user && pathname !== "/login" && pathname !== "/join") {
            redirect("/login");
        }
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
