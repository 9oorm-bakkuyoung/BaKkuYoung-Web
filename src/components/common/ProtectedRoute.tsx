"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
    const router = useRouter();
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem("token");

        if (!token) {
            router.replace("/login"); // 로그인 안 되어 있으면 로그인 페이지로 이동
        } else {
            setIsAuthenticated(true);
        }

        setLoading(false);
    }, []);

    if (loading) return <div className="flex h-screen justify-center items-center text-white">로딩 중...</div>;

    return isAuthenticated ? <>{children}</> : null;
}
