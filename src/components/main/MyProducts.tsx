"use client";

import { useState, useRef } from "react";
import Image from "next/image";

interface MyProductsProps {
    onSelect: (selected: boolean) => void;
}

const MyProducts = ({ onSelect }: MyProductsProps) => {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
    const scrollRef = useRef<HTMLDivElement>(null);

    const images = [
        "/icons/mind.png",
        "/icons/mind.png",
        "/icons/mind.png",
        "/icons/mind.png",
        "/icons/mind.png",
    ];

    // 이미지 선택 핸들러
    const handleSelect = (index: number) => {
        const isSelected = index === selectedIndex;
        setSelectedIndex(isSelected ? null : index);
        onSelect(!isSelected);
    };

    // 왼쪽으로 스크롤
    const scrollLeft = () => {
        scrollRef.current?.scrollBy({ left: -150, behavior: "smooth" });
    };

    // 오른쪽으로 스크롤
    const scrollRight = () => {
        scrollRef.current?.scrollBy({ left: 150, behavior: "smooth" });
    };

    return (
        <div className="relative">
            {/* 좌우 이동 버튼 */}
            {/*<button*/}
            {/*    className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-1 rounded-full z-10"*/}
            {/*    onClick={scrollLeft}*/}
            {/*>*/}
            {/*    ←*/}
            {/*</button>*/}

            <div
                ref={scrollRef}
                className="flex overflow-x-auto space-x-3 scrollbar-hide"
            >
                {images.map((src, index) => (
                    <div
                        key={index}
                        onClick={() => handleSelect(index)}
                        className="relative flex-shrink-0 cursor-pointer pr-3"
                    >
                        {/* 이미지 */}
                        <Image
                            src={src}
                            alt={`Product ${index}`}
                            className="rounded-lg w-[100px] h-[150px] object-cover"
                            width={100}
                            height={150}
                        />

                        {/* 선택되지 않은 이미지 오버레이 */}
                        {selectedIndex !== null && selectedIndex !== index && (
                            <div className="absolute inset-0 bg-black mr-3 opacity-50 rounded-lg"></div>
                        )}

                        {/* 선택된 이미지 강조 */}
                        {selectedIndex === index && (
                            <div className="absolute inset-0 border-4 mr-3 border-white rounded-lg"></div>
                        )}
                    </div>
                ))}
            </div>

            {/* 오른쪽 이동 버튼 */}
            {/*<button*/}
            {/*    className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-1 rounded-full z-10"*/}
            {/*    onClick={scrollRight}*/}
            {/*>*/}
            {/*    →*/}
            {/*</button>*/}
        </div>
    );
};

export default MyProducts;
