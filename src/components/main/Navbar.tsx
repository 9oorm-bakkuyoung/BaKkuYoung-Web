"use client";

import { useState, useRef } from "react";
import MainNavbar from "@/components/main/MainNavbar";
import MainContents from "@/components/main/MainContents";
import MyProducts from "@/components/main/MyProducts";

const Navbar = () => {
    const [isDrawerOpen, setDrawerOpen] = useState(false);
    const [isProductSelected, setProductSelected] = useState(false);
    const startY = useRef<number | null>(null);

    // 드래그 시작
    const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
        const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;
        startY.current = clientY;
    };

    // 드래그 이동
    const handleDragMove = (e: React.MouseEvent | React.TouchEvent) => {
        if (startY.current !== null) {
            const currentY = "touches" in e ? e.touches[0].clientY : e.clientY;
            const deltaY = startY.current - currentY;

            if (!isDrawerOpen && deltaY > 50) {
                setDrawerOpen(true);
                startY.current = null;
            }

            if (isDrawerOpen && deltaY < -50) {
                setDrawerOpen(false);
                startY.current = null;
            }
        }
    };

    // 제품 선택 상태 관리
    const handleProductSelect = (selected: boolean) => {
        setProductSelected(selected);
    };

    return (
        <div className="flex flex-col min-h-screen">
            <MainNavbar isDrawerOpen={isDrawerOpen} />

            <div className="relative flex-1 bg-[url('/mandarin.png')] bg-[left_bottom] bg-no-repeat bg-cover">
                <div className={`absolute inset-0 ${isDrawerOpen ? "bg-black opacity-50" : "bg-gradient-to-t from-black to-transparent opacity-70"}`}></div>

                {/* 메인 콘텐츠 */}
                <MainContents isDrawerOpen={isDrawerOpen} />

                {/* Drawer 버튼 */}
                <div
                    className="absolute inset-x-0 bottom-0 bg-gray-100 w-[119px] h-[4px] mx-auto rounded-full mb-4 cursor-pointer"
                    onMouseDown={handleDragStart}
                    onTouchStart={handleDragStart}
                    onMouseMove={handleDragMove}
                    onTouchMove={handleDragMove}
                    onClick={() => setDrawerOpen(!isDrawerOpen)}
                />

                {/* Drawer */}
                <div
                    style={{ backgroundColor: "#252730" }}
                    className={`fixed inset-x-0 bottom-0 h-[280px] bg-opacity-90 rounded-t-lg shadow-lg transition-transform duration-300 ${
                        isDrawerOpen ? "translate-y-0" : "translate-y-full"
                    }`}
                >
                    {/* 드래그 버튼 */}
                    <div className="w-full flex justify-center pt-3">
                        <button
                            onClick={() => setDrawerOpen(false)}
                            className="bg-gray-100 w-[119px] h-[4px] rounded-full cursor-pointer"
                        />
                    </div>

                    {/* MyProducts 컴포넌트 */}
                    <div className="p-5">
                        <MyProducts onSelect={handleProductSelect} />
                    </div>

                    {/* 교환 신청하기 버튼 */}
                    <button
                        onClick={() => alert("교환 신청 완료!")}
                        disabled={!isProductSelected}
                        className={`absolute w-[352px] rounded-md py-4 mx-5 text-white transition-all duration-300 
                        ${isProductSelected ? "bg-teal-500 hover:bg-teal-600" : "bg-gray-400 cursor-not-allowed"}`}
                    >
                        교환 신청하기
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
