"use client";

import React from "react";

export default function Login() {
    return (
        <div className="flex flex-col items-center justify-start min-h-screen bg-black pt-28 p-8">
            <h1 className="w-full max-w-md py-4 text-start text-4xl font-bold text-white">로그인</h1>
            <div className="w-full max-w-md py-8">
                <form className="space-y-6">
                    <input
                        type="text"
                        className="w-full p-4 mb-6 border border-gray-500 bg-transparent rounded-lg placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-mainColor"
                        placeholder="아이디"
                    />

                    <input
                        type="password"
                        className="w-full p-4 mb-6 border border-gray-500 bg-transparent rounded-lg placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-mainColor"
                        placeholder="비밀번호"
                    />
                </form>

                <button
                    type="submit"
                    className="mt-2 w-full text-white py-4 rounded-lg bg-teal-400 hover:bg-hoverColor"
                >
                    로그인
                </button>
            </div>
        </div>
    );
}
