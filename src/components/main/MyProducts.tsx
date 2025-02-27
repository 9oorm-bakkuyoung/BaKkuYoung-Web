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
    "/icons/rainy.png",
    "/icons/jeju.png",
    "/icons/phone.png",
  ];

  // 이미지 선택 핸들러
  const handleSelect = (index: number) => {
    const isSelected = index === selectedIndex;
    setSelectedIndex(isSelected ? null : index);
    onSelect(!isSelected);
  };

  return (
    <div className="relative">
      <div
        ref={scrollRef}
        className="scrollbar-hide flex space-x-3 overflow-x-auto"
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
              className="h-[150px] w-[100px] rounded-lg object-cover"
              width={100}
              height={150}
            />

            {/* 선택되지 않은 이미지 오버레이 */}
            {selectedIndex !== null && selectedIndex !== index && (
              <div className="absolute inset-0 mr-3 rounded-lg bg-black opacity-50"></div>
            )}

            {/* 선택된 이미지 강조 */}
            {selectedIndex === index && (
              <div className="absolute inset-0 mr-3 rounded-lg border-4 border-white"></div>
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
