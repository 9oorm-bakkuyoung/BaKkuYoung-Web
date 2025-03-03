"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { RegisterForm } from "@/components/register/RegisterForm";

export default function Page() {
  const router = useRouter();

  const handleAppClick = (link: string) => {
    router.push(link);
  };

  return (
    <>
      <section className="mb-[11px] h-14 w-full border-b-[1px] border-b-gray-600 px-5 py-[15px]">
        <div
          className="flex items-center gap-3"
          onClick={() => handleAppClick("/main")}
        >
          <Image
            src={"/icons/back_icon.svg"}
            alt="back_icon"
            width={24}
            height={24}
          />
          <p className="text-white">물품 등록</p>
        </div>
      </section>
      <section className="mx-5 flex h-[calc(100vh-130px)] flex-col justify-between">
        <RegisterForm />
      </section>
    </>
  );
}
