import Link from "next/link";
import Image from "next/image";
import React from "react";

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen pt-28 p-8 text-center">
            <Image
                src="/images/bakkuyound_bird_3.svg"
                alt="404 Not Found"
                width={200}
                height={200}
                className="mb-6"
            />
            <h1 className="text-4xl font-bold text-gray-800">페이지를 찾을 수 없습니다</h1>
            <p className="text-gray-500 mt-4">요청하신 페이지가 존재하지 않습니다.</p>
            <Link href="/">
                <button className="mt-6 px-6 py-3 bg-teal-400 text-white rounded-lg hover:bg-teal-500">
                    홈으로 돌아가기
                </button>
            </Link>
        </div>
    );
}
