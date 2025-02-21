"use client";
import { TextInput, Label, RadioGroup, Button } from "@goorm-dev/vapor-core";
import { ChevronLeftOutlineIcon, CameraIcon } from "@goorm-dev/vapor-icons";
import React, { useRef, useState, useEffect } from "react";
import { useFormInput } from "../hooks/useFormInput";
import { useRouter } from "next/navigation";

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
        <div className="flex items-center gap-3" onClick={() => handleAppClick('/main')}>
          <ChevronLeftOutlineIcon size="24" color="white" />
          <p className="text-white">물품 등록</p>
        </div>
      </section>
      <section className="mx-5 flex h-[calc(100vh-130px)] flex-col justify-between">
        <div className="flex flex-col gap-7 text-white">
          <div className="flex flex-col gap-2">
            <Label color="foreground-light">사진 선택</Label>
            <div className="relative inline-block">
              {selectedImage ? (
                <img
                  src={selectedImage}
                  alt="Selected"
                  className="h-[60px] w-[60px] cursor-pointer rounded-lg object-cover"
                  onClick={handleItemImage}
                />
              ) : (
                <div
                  className="mt-2 flex h-[60px] w-[60px] cursor-pointer items-center justify-center rounded-[calc(0.5rem*1)] border border-gray-600"
                  onClick={handleItemImage}
                >
                  <CameraIcon size="24" color="white" />
                </div>
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
          <div>
            <TextInput type="text">
              <TextInput.Label color="white">상품명</TextInput.Label>
              <TextInput.Field
                onChange={(e) => handleProductName(e)}
                value={productName}
                placeholder="상품 이름"
                className="h-12 border-gray-600 bg-transparent text-white"
              />
            </TextInput>
          </div>
          <div>
            <Label color="foreground-light">거래 방식</Label>
            <div className="mt-2">
              <RadioGroup
                defaultSelectedValue="heart"
                className="flex gap-2"
                onSelectedValueChange={(e) => setRadioValue(e)}
              >
                <RadioGroup.Item>
                  <RadioGroup.Indicator value="heart" className="peer hidden" />
                  <RadioGroup.Label>
                    <div
                      className={`flex h-[38px] w-24 items-center justify-center rounded-[30px] px-2.5 py-2 ${radioValue === "heart" ? "bg-[#E1E1E8] text-black" : "border border-gray-600 bg-transparent text-white"}`}
                    >
                      <p className="text-sm tracking-tight">마음도 받아요</p>
                    </div>
                  </RadioGroup.Label>
                </RadioGroup.Item>
                <RadioGroup.Item>
                  <RadioGroup.Indicator
                    value="product"
                    className="peer hidden"
                  />
                  <RadioGroup.Label>
                    <div
                      className={`flex h-[38px] w-24 items-center justify-center rounded-[30px] px-2.5 py-2 ${radioValue === "product" ? "bg-[#E1E1E8] text-black" : "border border-gray-600 bg-transparent text-white"}`}
                    >
                      <p className="text-sm tracking-tight">물품만 받아요</p>
                    </div>
                  </RadioGroup.Label>
                </RadioGroup.Item>
              </RadioGroup>
            </div>
          </div>
          <div>
            <TextInput type="text">
              <TextInput.Label color="white">간단한 설명</TextInput.Label>
              <TextInput.Field
                onChange={(e) => handleDescription(e)}
                value={description}
                placeholder="상품에 대한 설명을 적어주세요"
                className="h-12 border-gray-600 bg-transparent text-white"
              />
            </TextInput>
          </div>
          <div>
            <TextInput type="text">
              <TextInput.Label color="white">교환 희망 물품</TextInput.Label>
              <TextInput.Field
                onChange={(e) => handleWishItem(e)}
                value={wishItem}
                placeholder="상품에 대한 설명을 적어주세요"
                className="h-12 border-gray-600 bg-transparent text-white"
              />
            </TextInput>
          </div>
        </div>
        <Button
          stretch
          size="xl"
          className="bg-[#00C38C]"
          onClick={handleExchange}
        >
          교환 신청하기
        </Button>
      </section>
    </>
  );
}
