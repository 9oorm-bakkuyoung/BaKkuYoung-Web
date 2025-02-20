"use client";

import { ChevronLeftOutlineIcon } from '@goorm-dev/vapor-icons';
import { TbExchange } from "react-icons/tb";
import Image from "next/image";

const Exchange = () => {
    const info = ["200m", "성산제 2동", "15분 전"]
    return (
        <div className="flex flex-col min-h-screen bg-black">
            {/* 상단 네비게이션 바 */}
            <div className="flex flex-row w-full py-3 px-5 justify-between items-center border-b">
                <button className="flex flex-row text-white items-center">
                    <ChevronLeftOutlineIcon size="var(--dimension-300)" />
                    <span className="pl-4 text-lg">교환하기</span>
                </button>
            </div>

            <div className="flex flex-col px-5 py-[26px]">
                <h1 className="text-2xl font-semibold text-white">교환하시겠어요?</h1>
            </div>

            {/* 교환 이미지 */}
            <div className="relative flex flex-col items-center flex-grow overflow-y-auto px-5">
                {/* 이미지 카드와 아이콘을 감싸는 부모 컨테이너 */}
                <div className="relative w-full max-w-[558px]">
                    {/* 첫 번째 이미지 카드 */}
                    <div className="w-full h-[208px] rounded-lg overflow-hidden shadow-lg bg-white mb-5 border border-opacity-5 border-gray-400">
                        <div className="relative w-full h-full bg-[url('/mandarin.png')] bg-cover bg-center rounded-lg">
                            {/* 하단 정보 섹션 */}
                            <div className="absolute bottom-0 w-full text-white p-5 rounded-b-lg">
                                <div className="flex flex-col space-y-1">
                                    <span className="w-fit bg-blue-500 text-xs text-white px-3 py-1 rounded-full">나</span>
                                    <h1 className="text-lg font-semibold">맛있는 귤 10개</h1>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* TbExchange 아이콘 (두 이미지 카드 중앙에 고정) */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                        <div className="flex items-center justify-center bg-teal-400 rounded-full p-[14px] shadow-lg">
                            <Image
                                src="/images/repeat.png"
                                alt="Repeat"
                                className="text-white w-8 h-8"
                                width={32}
                                height={32}
                                unoptimized
                            />
                        </div>
                    </div>

                    {/* 두 번째 이미지 카드 */}
                    <div className="w-full h-[208px] rounded-lg overflow-hidden shadow-lg bg-white border border-opacity-5 border-gray-400">
                        <div className="relative w-full h-full bg-[url('/mandarin.png')] bg-cover bg-center rounded-lg">
                            {/* 하단 정보 섹션 */}
                            <div className="absolute bottom-0 w-full text-white p-5 rounded-b-lg">
                                <div className="flex flex-col space-y-1">
                                    <span className="w-fit bg-red-500 text-xs text-white px-3 py-1 rounded-full">상대</span>
                                    <h1 className="text-lg font-semibold">싱싱한 귤 5개</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>




            {/* 버튼 */}
            <div className="flex flex-col px-4 pb-[38px]">
                <button className="w-full mx-auto py-3 bg-teal-400 text-white text-lg rounded-md mb-4">교환 신청하기</button>
                <button className="w-full mx-auto py-3 bg-gray-500 text-white text-lg rounded-md">취소하기</button>
            </div>
        </div>
    );
};

export default Exchange;
