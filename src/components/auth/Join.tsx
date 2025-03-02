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
        <div className="flex flex-col items-center justify-start min-h-screen bg-black pt-28 p-8">
            <h1 className="w-full max-w-md py-4 text-start text-4xl font-bold text-white">회원가입</h1>
            <div className="w-full max-w-md py-8">
                {error && <p className="text-red-500">{error}</p>}
                <form className="space-y-6" onSubmit={handleJoin}>
                    <input
                        type="text"
                        className="w-full p-4 mb-6 border border-gray-500 bg-transparent rounded-lg text-white placeholder-gray-500"
                        placeholder="아이디"
                        value={id}
                        onChange={(e) => setId(e.target.value)}
                    />
                    <input
                        type="password"
                        className="w-full p-4 mb-6 border border-gray-500 bg-transparent rounded-lg text-white placeholder-gray-500"
                        placeholder="비밀번호"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <input
                        type="text"
                        className="w-full p-4 mb-6 border border-gray-500 bg-transparent rounded-lg text-white placeholder-gray-500"
                        placeholder="이름"
                        value={memberName}
                        onChange={(e) => setMemberName(e.target.value)}
                    />
                    <button type="submit"
                            className="mt-2 w-full text-white py-4 rounded-lg bg-teal-400 hover:bg-hoverColor">
                        회원가입
                    </button>
                </form>
            </div>
        </div>
    );
}
