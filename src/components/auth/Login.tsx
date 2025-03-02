"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const router = useRouter();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");

        if (!id.trim() || !password.trim()) {
            setError("아이디와 비밀번호를 입력해주세요.");
            return;
        }

        try {
            const res = await fetch("http://ec2-3-38-13-139.ap-northeast-2.compute.amazonaws.com:8080/api/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ id, password }),
            });

            console.log("응답 상태:", res.status);
            console.log("응답 헤더:", res.headers.get("content-type")); // 추가된 디버깅 코드

            if (!res.ok) {
                throw new Error(`HTTP 오류! 상태 코드: ${res.status}`);
            }

            if (res.headers.get("content-type")?.includes("application/json")) {
                const data = await res.json();
                console.log("서버 응답 데이터:", data);
                router.push("/main");
            } else {
                throw new Error("잘못된 응답 형식입니다. JSON 응답이 아닙니다.");
            }
        } catch (err) {
            console.error("로그인 오류:", err);
            setError(err.message);
        }
    };

    return (
        <div className="flex flex-col items-center justify-start min-h-screen bg-black pt-28 p-8">
            <h1 className="w-full max-w-md py-4 text-start text-4xl font-bold text-white">로그인</h1>
            <div className="w-full max-w-md py-8">
                {error && (
                    <div className="flex items-center p-4 mb-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50" role="alert">
                        {error}
                    </div>
                )}
                <form className="space-y-6" onSubmit={handleLogin}>
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
                    <button
                        type="submit"
                        className={`mt-2 w-full text-white py-4 rounded-lg ${id.trim() && password.trim() ? "bg-teal-400 hover:bg-hoverColor" : "bg-gray-600 cursor-not-allowed"}`}
                        disabled={!id.trim() || !password.trim()}
                    >
                        로그인
                    </button>
                    <p className="text-white mt-4">
                        아직 회원이 아니신가요?
                        <span className="text-teal-400 cursor-pointer" onClick={() => router.push('/join')}>회원가입</span>
                    </p>
                </form>
            </div>
        </div>
    );
}
