"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function MainPage() {
    const router = useRouter();
    const [user, setUser] = useState(null);

    useEffect(() => {
        const checkSession = async () => {
            const res = await fetch("http://ec2-3-38-13-139.ap-northeast-2.compute.amazonaws.com:8080/api/auth/me", { cache: "no-store" });
            if (!res.ok) {
                router.replace("/login");
            } else {
                const data = await res.json();
                setUser(data.data);
            }
        };
        checkSession();
    }, []);

    return user ? <h1>안녕하세요, {user.memberName}님!</h1> : <p>로딩 중...</p>;
}
