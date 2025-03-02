"use client";

import { useRouter } from "next/navigation";

export default function Logout() {
    const router = useRouter();

    const handleLogout = async () => {
        try {
            const res = await fetch("http://ec2-3-38-13-139.ap-northeast-2.compute.amazonaws.com:8080/api/auth/logout", {
                method: "POST",
            });

            if (!res.ok) throw new Error("로그아웃 실패");

            router.push("/login");
        } catch (error) {
            console.error("로그아웃 실패:", error);
        }
    };

    return (
        <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded">로그아웃</button>
    );
}
