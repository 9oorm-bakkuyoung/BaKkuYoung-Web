"use client";

import { useRef } from "react";
import Image from "next/image";

const MyProducts = () => {
    const scrollRef = useRef<HTMLDivElement>(null);

    // 왼쪽으로 스크롤
    const scrollLeft = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: -150, behavior: "smooth" });
        }
    };

    // 오른쪽으로 스크롤
    const scrollRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: 150, behavior: "smooth" });
        }
    };

    // 이미지 데이터 (예: 여러 이미지)
    const images = [
        "/icons/mind.png",
        "/icons/mind.png",
        "/icons/mind.png",
        "/icons/mind.png",
        "/icons/mind.png",
    ];

    return (
        <div className="relative">
            {/* 좌우 이동 버튼 */}
            <button
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-1 rounded-full z-10"
                onClick={scrollLeft}
            >
                ←
            </button>

            <div
                ref={scrollRef}
                className="flex overflow-x-auto space-x-3 scrollbar-hide"
            >
                {images.map((src, index) => (
                    <div key={index} className="flex-shrink-0">
                        <Image
                            src={src}
                            alt={`Product ${index}`}
                            className="rounded-lg"
                            width={100}
                            height={150}
                        />
                    </div>
                ))}
            </div>

            <button
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-1 rounded-full z-10"
                onClick={scrollRight}
            >
                →
            </button>
        </div>
    );
};

export default MyProducts;
