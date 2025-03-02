"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function Join() {
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    const [memberName, setMemberName] = useState("");
    const [error, setError] = useState("");
    const router = useRouter();

    const handleJoin = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");

        try {
            const res = await fetch("http://ec2-3-38-13-139.ap-northeast-2.compute.amazonaws.com:8080/api/auth/join", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ id, password, memberName }),
            });

            if (!res.ok) throw new Error("회원가입 실패");

            router.push("/login");
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div>
            <h1>회원가입</h1>
            {error && <p className="text-red-500">{error}</p>}
            <form onSubmit={handleJoin}>
                <input type="text" placeholder="아이디" value={id} onChange={(e) => setId(e.target.value)} />
                <input type="password" placeholder="비밀번호" value={password} onChange={(e) => setPassword(e.target.value)} />
                <input type="text" placeholder="이름" value={memberName} onChange={(e) => setMemberName(e.target.value)} />
                <button type="submit">회원가입</button>
            </form>
        </div>
    );
}
