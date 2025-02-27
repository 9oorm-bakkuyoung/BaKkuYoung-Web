"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Modal from "@/components/Modal";

const Exchange = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const handleAppClick = () => {
    router.push("/main"); // 클라이언트 측 네비게이션
  };

  const handleSuccessClick = () => {
    router.push("/main"); // 클라이언트 측 네비게이션
    sessionStorage.setItem("alert_status", "true");
  };
  // const handleSuccessClick = () => {
  //     router.push('/main?active=true'); // 쿼리 파라미터로 상태 전달
  // };

  return (
    <div className="flex min-h-screen flex-col bg-black">
      {/* 상단 네비게이션 바 */}
      <div className="flex w-full flex-row items-center justify-between border-b px-5 py-3">
        <button
          onClick={handleAppClick}
          className="flex flex-row items-center text-white"
        >
          {/* <ChevronLeftOutlineIcon size="var(--dimension-300)" /> */}
          <span className="pl-4 text-lg">교환하기</span>
        </button>
      </div>

      <div className="flex flex-col px-5 py-[26px]">
        <h1 className="text-2xl font-semibold text-white">교환하시겠어요?</h1>
      </div>

      {/* 교환 이미지 */}
      <div className="relative flex flex-grow flex-col items-center overflow-y-auto px-5">
        {/* 이미지 카드와 아이콘을 감싸는 부모 컨테이너 */}
        <div className="relative w-full max-w-[558px]">
          {/* 첫 번째 이미지 카드 */}
          <div className="border-opacity-5 mb-5 h-[208px] w-full overflow-hidden rounded-lg border border-gray-400 bg-white shadow-lg">
            <div className="relative h-full w-full rounded-lg bg-[url('/car_mandarin.png')] bg-cover bg-center">
              {/* 하단 정보 섹션 */}
              <div className="absolute bottom-0 w-full rounded-b-lg p-5 text-white">
                <div className="flex flex-col space-y-1">
                  <span className="w-fit rounded-full bg-blue-500 px-3 py-1 text-xs text-white">
                    나
                  </span>
                  <h1 className="text-lg font-semibold">맛있는 귤 10개</h1>
                </div>
              </div>
            </div>
          </div>

          {/* TbExchange 아이콘 (두 이미지 카드 중앙에 고정) */}
          <div className="absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2 transform">
            <div className="flex items-center justify-center rounded-full bg-teal-400 p-[14px] shadow-lg">
              <Image
                src="/images/repeat.png"
                alt="Repeat"
                className="text-white"
                width={32}
                height={32}
              />
            </div>
          </div>

          {/* 두 번째 이미지 카드 */}
          <div className="border-opacity-5 h-[208px] w-full overflow-hidden rounded-lg border border-gray-400 bg-white shadow-lg">
            <div className="relative h-full w-full rounded-lg bg-[url('/mountain.png')] bg-cover bg-center">
              {/* 하단 정보 섹션 */}
              <div className="absolute bottom-0 w-full rounded-b-lg p-5 text-white">
                <div className="flex flex-col space-y-1">
                  <span className="w-fit rounded-full bg-red-500 px-3 py-1 text-xs text-white">
                    상대
                  </span>
                  <h1 className="text-lg font-semibold">등산스틱</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 버튼 */}
      <div className="flex flex-col px-4 pb-[38px]">
        <button
          onClick={() => setIsOpen(true)}
          className="mx-auto mb-4 w-full rounded-md bg-teal-400 py-3 text-lg text-white"
        >
          교환 신청하기
        </button>
        <Modal open={isOpen} onOpenChange={setIsOpen} title="매칭 대기중">
          <div className="flex flex-col items-center justify-center">
            <Image
              src="./wait_matching.svg"
              alt="wait_matching"
              width={351}
              height={170}
            />
            <div className="w-full px-6 py-4">
              <button
                onClick={handleSuccessClick}
                className="flex h-10 w-full items-center justify-center rounded-[8px] bg-[#00C38C] p-4 text-white"
              >
                다른 물건 구경하기
              </button>
            </div>
          </div>
        </Modal>
        <button
          onClick={handleAppClick}
          className="mx-auto w-full rounded-md bg-gray-500 py-3 text-lg text-white"
        >
          취소하기
        </button>
      </div>
    </div>
  );
};

export default Exchange;
