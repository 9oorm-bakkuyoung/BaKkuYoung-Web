"use client";

import { useRouter } from "next/navigation";
import React from "react";

export default function Success() {
    const router = useRouter();

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
            <h1 className="text-4xl font-bold">🎉 회원가입 성공! 🎉</h1>
            <p className="mt-4 text-lg">회원가입이 완료되었습니다. 이제 로그인하여 서비스를 이용하세요!</p>
            <button
                className="mt-6 px-6 py-3 bg-teal-400 text-white rounded-lg hover:bg-hoverColor"
                onClick={() => router.push("/login")}
            >
                로그인하러 가기
            </button>
        </div>
    );
}
