"use client";

import { useState, useRef } from "react";
import MainNavbar from "@/components/main/MainNavbar";
import MainContents from "@/components/main/MainContents";
import Image from "next/image";
import MyProducts from "@/components/main/MyProducts";

const Navbar = () => {
    const [isDrawerOpen, setDrawerOpen] = useState(false);
    const startY = useRef<number | null>(null);

    // 드래그 시작 (마우스/터치)
    const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
        const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;
        startY.current = clientY;
    };

    // 드래그 중 (높이 감지)
    const handleDragMove = (e: React.MouseEvent | React.TouchEvent) => {
        if (startY.current !== null) {
            const currentY = "touches" in e ? e.touches[0].clientY : e.clientY;
            const deltaY = startY.current - currentY;

            // 50px 이상 위로 드래그 시 Drawer 열기
            if (!isDrawerOpen && deltaY > 50) {
                setDrawerOpen(true);
                startY.current = null;
            }

            // 50px 이상 아래로 드래그 시 Drawer 닫기
            if (isDrawerOpen && deltaY < -50) {
                setDrawerOpen(false);
                startY.current = null;
            }
        }
    };

    // 드래그 종료
    const handleDragEnd = () => {
        startY.current = null;
    };

    // Drawer 상태 토글
    const toggleDrawer = () => {
        setDrawerOpen(!isDrawerOpen);
    };

    const products = [
        { name: "카메라 공유", src: "/icons/camera.png", link: "/camera" },
        { name: "물품 공유", src: "/icons/share.png", link: "/share" },
        { name: "여행 기록", src: "/icons/travel.png", link: "/travel" },
        { name: "포토북", src: "/icons/photobook.png", link: "/photobook" },
    ];

    return (
        <div className="flex flex-col min-h-screen">
            <MainNavbar />

            {/* 하단 전체 배경 이미지 (왼쪽 하단 배치) */}
            <div className="relative flex-1 bg-[url('/mandarin.png')] bg-[left_bottom] bg-no-repeat bg-cover">
                {/* 그라데이션 오버레이 */}
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>

                {/* 메인 콘텐츠 */}
                <MainContents isDrawerOpen={isDrawerOpen} />

                {/* Drawer Button (드래그 & 클릭 가능) */}
                <div
                    className="absolute inset-x-0 bottom-0 bg-gray-100 w-[119px] h-[4px] items-center justify-center mx-auto rounded-full mb-4 cursor-pointer"
                    onMouseDown={handleDragStart}
                    onTouchStart={handleDragStart}
                    onMouseMove={handleDragMove}
                    onTouchMove={handleDragMove}
                    onMouseUp={handleDragEnd}
                    onTouchEnd={handleDragEnd}
                    onClick={toggleDrawer}
                />

                {/* Drawer */}
                <div
                    className={`fixed inset-x-0 bottom-0 h-[280px] bg-black bg-opacity-20 rounded-t-lg shadow-lg transition-transform duration-300 ${
                        isDrawerOpen ? "translate-y-0" : "translate-y-full"
                    }`}
                >
                    {/* 드래그 버튼 (닫기 기능 포함) */}
                    <div
                        className="w-full flex justify-center pt-3"
                        onMouseDown={handleDragStart}
                        onTouchStart={handleDragStart}
                    >
                        <button
                            onClick={toggleDrawer}
                            className="bg-gray-100 w-[119px] h-[4px] rounded-full cursor-pointer"
                        />
                    </div>

                    {/* Drawer 내부 내용 */}
                    <div className="p-6">
                        <div className="flex flex-row space-x-2">
                            <MyProducts />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
