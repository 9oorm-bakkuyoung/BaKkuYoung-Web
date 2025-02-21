"use client";

import {useState, useRef, useEffect} from "react";
import MainNavbar from "@/components/main/MainNavbar";
import MainContents1 from "@/components/main/MainContents1";
import MyProducts from "@/components/main/MyProducts";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import {useSeeOtherStore} from "@/stores/useSeeOtherStore";

const Navbar1 = () => {
    const [isDrawerOpen, setDrawerOpen] = useState(false);
    const [isProductSelected, setProductSelected] = useState(false);
    const startY = useRef<number | null>(null);
    const router = useRouter();
    const { isActive, setInactive } = useSeeOtherStore();

    const handleAppClick = () => {
        router.push('/exchange'); // 클라이언트 측 네비게이션
    };

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

    const [currentIndex, setCurrentIndex] = useState(0);

    // 배경 이미지 및 내용 데이터
    const bgImages = [
        { src: "/mandarin.png", text: "맛있는 귤을 공유해요!" },
        { src: "/selfie_one.png", text: "신선한 사과도 있어요!" },
        { src: "/selfie_two.png", text: "바나나도 교환 가능해요!" },
        { src: "/selfie_three.png", text: "바나나도 교환 가능해요!" },
        { src: "/selfie_four.png", text: "바나나도 교환 가능해요!" },
        { src: "/car_mandarin.png", text: "바나나도 교환 가능해요!" },
    ];

    // 스와이프 후 이미지 변경 로직
    const handleDragEnds = (_event: any, info: { offset: { x: number } }) => {
        if (info.offset.x < -100 && currentIndex < bgImages.length - 1) {
            setCurrentIndex((prev) => prev + 1); // 오른쪽으로 스와이프 → 다음 이미지
        } else if (info.offset.x > 100 && currentIndex > 0) {
            setCurrentIndex((prev) => prev - 1); // 왼쪽으로 스와이프 → 이전 이미지
        }
    };

    // 제품 선택 상태 관리
    const handleProductSelect = (selected: boolean) => {
        setProductSelected(selected);
    };

    useEffect(() => {
        if( isActive === true ) {
            setTimeout(() => {

            }, 3000)
        }
    })

    return (
        <div className="flex min-h-screen flex-col">
            <MainNavbar isDrawerOpen={isDrawerOpen}/>
            <div className="relative flex-1 overflow-hidden">

                <AnimatePresence>
                    <motion.div
                        key={bgImages[currentIndex].src}
                        className={`absolute inset-0 flex items-center justify-center bg-cover bg-no-repeat ${
                            isDrawerOpen ? "bg-black opacity-50" : ""
                        }`}
                        style={{ backgroundImage: `url(${bgImages[currentIndex].src})`, }}
                        initial={{ opacity: 0, x: 100, rotate: 10 }}
                        animate={{ opacity: 1, x: 0, rotate: 0 }}
                        exit={{ opacity: 0, x: -100, rotate: -10 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        drag="x"
                        dragConstraints={{ left: 0, right: 0 }}
                        onDragEnd={handleDragEnds}
                        whileDrag={{ scale: 1.05, rotate: 20 }}
                    >
                        <div className="text-2xl text-white">
                            <MainContents1 isDrawerOpen={isDrawerOpen} />
                        </div>
                    </motion.div>
                </AnimatePresence>

            </div>

            {/* Drawer Button (드래그 & 클릭 가능) */}
            <div
                className="absolute inset-x-0 bottom-0 mx-auto mb-4 h-[4px] w-[119px] cursor-pointer items-center justify-center rounded-full bg-gray-100"
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
                className={`bg-opacity-20 fixed inset-x-0 bottom-0 h-[280px] rounded-t-lg bg-black shadow-lg transition-transform duration-300 ${
                    isDrawerOpen ? "translate-y-0" : "translate-y-full"
                }`}
            >
                {/* 드래그 버튼 (닫기 기능 포함) */}
                <div
                    className="flex w-full justify-center pt-3"
                    onMouseDown={handleDragStart}
                    onTouchStart={handleDragStart}
                >
                    <button
                        onClick={toggleDrawer}
                        className="h-[4px] w-[119px] cursor-pointer rounded-full bg-gray-100"
                    />
                </div>

                {/* Drawer 내부 내용 */}
                <div className="p-6">
                    <div className="flex flex-row space-x-2">
                        <MyProducts onSelect={handleProductSelect} />
                    </div>
                </div>

                {/* 교환 신청하기 버튼 */}
                <button
                    onClick={handleAppClick}
                    disabled={!isProductSelected}
                    className={`absolute w-[352px] rounded-md py-4 mx-5 text-white transition-all duration-300 
                        ${isProductSelected ? "bg-teal-500 hover:bg-teal-600" : "bg-gray-400 cursor-not-allowed"}`}
                >
                    교환 신청하기
                </button>
            </div>
        </div>
    );
};

export default Navbar1;
