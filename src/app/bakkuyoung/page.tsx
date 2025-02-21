"use client";
import React, { useState } from "react";
import Modal from "@/components/Modal";
import { Button } from "@goorm-dev/vapor-core";
import Image from "next/image";

export default function Page() {
  const [isOpen, setIsOpen] = useState(false);
  const { isActive, setActive } = useSeeOtherStore();

  return (
    <>
      <div className="h-screen">
        <div className="flex flex-col items-center justify-center">
          {/* 모달을 여는 버튼 */}
          <Button
            size="xl"
            className="bg-[#00C38C] text-white"
            onClick={() => setIsOpen(true)}
          >
            모달 열기
          </Button>

          <Modal open={isOpen} onOpenChange={setIsOpen} title="매칭 대기중">
            <div className="flex flex-col items-center justify-center">
              <Image
                src="./wait_matching.svg"
                alt="wait_matching"
                width={351}
                height={170}
              />
              <div className="w-full px-6 py-4">
                <Button
                    className="bg-[#00C38C]" stretch size="lg">
                  다른 물건 구경하기
                </Button>
              </div>
            </div>
          </Modal>

          {/* <Modal open={isOpen} onOpenChange={setIsOpen} title="매칭 성공!">
        <div className="flex flex-col items-center justify-center">
          <Image
            src="./happy_exchange.svg"
            alt="happy_exchange"
            width={351}
            height={170}
          />
          <div className="w-full px-6 py-4">
            <Button className="bg-[#00C38C]" stretch size="lg">
              채팅방 열기
            </Button>
          </div>
        </div>
      </Modal> */}
        </div>
      </div>
    </>
  );
}
