"use client";
import React, { useRef, useState, useEffect } from "react";
import { useFormInput } from "../hooks/useFormInput";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Page() {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const router = useRouter();

  const handleAppClick = (link: string) => {
    router.push(link); // 클라이언트 측 네비게이션
  };

  const { value: productName, onChange: handleProductName } = useFormInput("");
  const { value: description, onChange: handleDescription } = useFormInput("");
  const { value: wishItem, onChange: handleWishItem } = useFormInput("");

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [selectedImage, setSelectedImage] = useState("");
  const [radioValue, setRadioValue] = useState("heart");

  const handleItemImage = () => {
    if (fileInputRef.current) fileInputRef.current.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;

    if (file) {
      setSelectedFile(file);
      setSelectedImage(URL.createObjectURL(file)); // 상태 업데이트
    }
  };

  // 입력 값 sessionStorage 저장
  useEffect(() => {
    sessionStorage.setItem("productName", productName);
    sessionStorage.setItem("description", description);
    sessionStorage.setItem("wishItem", wishItem);
  }, [productName, description, wishItem]);

  // 교환 신청 처리
  const handleExchange = async () => {
    const formData = new FormData();

    if (selectedFile) {
      formData.append("image", selectedFile);
    }
    formData.append("productName", productName);
    formData.append("description", description);
    formData.append("exchangeItem", wishItem);

    // 알림 및 페이지 이동
    alert("교환 신청이 완료되었습니다!");
    sessionStorage.clear(); // 저장된 데이터 삭제
    router.push("/moin");
  };

  // const handleExchange = async () => {
  //   const formData = new FormData();
  //
  //   if (selectedFile) {
  //     formData.append("image", selectedFile);
  //   }
  //
  //   formData.append("productName", productName);
  //   formData.append("description", description);
  //   formData.append("exchangeItem", wishItem);
  //
  // };

  return (
    <>
      <section className="mb-[11px] h-14 w-full border-b-[1px] border-b-gray-600 px-5 py-[15px]">
        <div
          className="flex items-center gap-3"
          onClick={() => handleAppClick("/main")}
        >
          <p className="text-white">물품 등록</p>
        </div>
      </section>
      <section className="mx-5 flex h-[calc(100vh-130px)] flex-col justify-between">
        <div className="flex flex-col gap-7 text-white">
          <div className="flex flex-col gap-2">
            <label color="foreground-light">사진 선택</label>
            <div className="relative inline-block">
              {selectedImage ? (
                <Image
                  src={selectedImage}
                  alt="Selected"
                  className="cursor-pointer rounded-lg object-cover"
                  onClick={handleItemImage}
                  width={60}
                  height={60}
                />
              ) : (
                <div
                  className="mt-2 flex h-[60px] w-[60px] cursor-pointer items-center justify-center rounded-[calc(0.5rem*1)] border border-gray-600"
                  onClick={handleItemImage}
                ></div>
              )}
            </div>

            <input
              type="file"
              ref={fileInputRef}
              className="hidden"
              accept="image/*"
              onChange={handleFileChange}
            />
          </div>
          {/* 상품명 입력 */}
          <div>
            <label className="block text-white">상품명</label>
            <input
              type="text"
              onChange={(e) => handleProductName(e)}
              value={productName}
              placeholder="상품 이름"
              className="mt-2 h-12 w-full rounded-md border border-gray-600 bg-transparent px-4 text-white placeholder-gray-400 focus:border-[#00C38C] focus:outline-none"
            />
          </div>

          {/* 거래 방식 선택 */}
          <div>
            <label className="block text-white">거래 방식</label>
            <div className="mt-2 flex gap-2">
              <label className="flex h-[38px] w-fit cursor-pointer items-center justify-center rounded-[30px] border border-gray-600 text-white">
                <input
                  type="radio"
                  name="tradeType"
                  value="heart"
                  checked={radioValue === "heart"}
                  onChange={() => setRadioValue("heart")}
                  className="hidden"
                />
                <span
                  className={`${radioValue === "heart" ? "bg-[#E1E1E8] text-black" : "bg-transparent"} flex h-full w-full items-center justify-center rounded-[30px] px-2`}
                >
                  마음도 받아요
                </span>
              </label>

              <label className="flex h-[38px] w-fit cursor-pointer items-center justify-center rounded-[30px] border border-gray-600 text-white">
                <input
                  type="radio"
                  name="tradeType"
                  value="product"
                  checked={radioValue === "product"}
                  onChange={() => setRadioValue("product")}
                  className="hidden"
                />
                <span
                  className={`${radioValue === "product" ? "bg-[#E1E1E8] text-black" : "bg-transparent"} flex h-full w-full items-center justify-center rounded-[30px] px-2`}
                >
                  물품만 받아요
                </span>
              </label>
            </div>
          </div>

          {/* 간단한 설명 입력 */}
          <div>
            <label className="block text-white">간단한 설명</label>
            <input
              type="text"
              onChange={(e) => handleDescription(e)}
              value={description}
              placeholder="상품에 대한 설명을 적어주세요"
              className="mt-2 h-12 w-full rounded-md border border-gray-600 bg-transparent px-4 text-white placeholder-gray-400 focus:border-[#00C38C] focus:outline-none"
            />
          </div>

          {/* 교환 희망 물품 입력 */}
          <div>
            <label className="block text-white">교환 희망 물품</label>
            <input
              type="text"
              onChange={(e) => handleWishItem(e)}
              value={wishItem}
              placeholder="상품에 대한 설명을 적어주세요"
              className="mt-2 h-12 w-full rounded-md border border-gray-600 bg-transparent px-4 text-white placeholder-gray-400 focus:border-[#00C38C] focus:outline-none"
            />
          </div>
        </div>
        {/* 교환 신청 버튼 */}
        <button
          onClick={handleExchange}
          className="w-full rounded-md bg-[#00C38C] py-3 text-xl font-semibold text-white transition hover:bg-[#00A375]"
        >
          교환 신청하기
        </button>
      </section>
    </>
  );
}
