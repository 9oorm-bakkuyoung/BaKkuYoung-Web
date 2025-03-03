import React from "react";
import Image from "next/image";
import { Controller } from "react-hook-form";
import { useCreateForm } from "./useCreateFormAction";

export const RegisterForm = () => {
  const {
    form,
    fileInputRef,
    selectedImage,
    imageError,
    handleItemImage,
    handleFileChange,
    onSubmit,
  } = useCreateForm();

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = form;

  const handleFormSubmit = handleSubmit(async (data) => {
    const result = await onSubmit(data);
    if (result.success) {
      alert(result.message);
      // 성공 시 다른 페이지로 이동하거나 상태 초기화 등의 추가 작업
    } else {
      alert(result.message);
    }
  });

  return (
    <form
      onSubmit={handleFormSubmit}
      className="flex flex-col gap-7 text-white"
    >
      {/* 사진 선택 */}
      <div className="flex flex-col gap-2">
        <label color="foreground-light">사진 선택</label>
        <div className="relative inline-block">
          {selectedImage ? (
            <Image
              src={selectedImage}
              alt="Selected"
              className="min-h-[60px] min-w-[60px] cursor-pointer rounded-lg object-cover"
              onClick={handleItemImage}
              width={60}
              height={60}
            />
          ) : (
            <div
              className="mt-2 flex h-[60px] w-[60px] cursor-pointer items-center justify-center rounded-[calc(0.5rem*1)] border border-gray-600"
              onClick={handleItemImage}
            >
              <Image
                src={"/icons/camera_icon.svg"}
                alt="camera_icon"
                width={24}
                height={24}
              />
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
        {imageError && (
          <p className="mt-1 text-xs text-red-500">{imageError}</p>
        )}
      </div>

      {/* 상품명 입력 */}
      <div>
        <label className="block text-white">상품명</label>
        <input
          {...register("productName")}
          placeholder="상품 이름"
          className="mt-2 h-12 w-full rounded-md border border-gray-600 bg-transparent px-4 text-white placeholder-gray-400 focus:border-[#00C38C] focus:outline-none"
        />
        {errors.productName && (
          <p className="mt-1 text-xs text-red-500">
            {errors.productName.message}
          </p>
        )}
      </div>

      {/* 거래 방식 선택 */}
      <div>
        <label className="block text-white">거래 방식</label>
        <div className="mt-2 flex gap-2">
          <Controller
            name="tradeType"
            control={control}
            render={({ field }) => (
              <>
                <label className="flex h-[38px] w-fit cursor-pointer items-center justify-center rounded-[30px] border border-gray-600 text-white">
                  <input
                    type="radio"
                    className="hidden"
                    {...field}
                    value="heart"
                    checked={field.value === "heart"}
                  />
                  <span
                    className={`${field.value === "heart" ? "bg-[#E1E1E8] text-black" : "bg-transparent"} flex h-full w-full items-center justify-center rounded-[30px] px-2 text-sm font-normal`}
                  >
                    마음도 받아요
                  </span>
                </label>

                <label className="flex h-[38px] w-fit cursor-pointer items-center justify-center rounded-[30px] border border-gray-600 text-white">
                  <input
                    type="radio"
                    className="hidden"
                    {...field}
                    value="product"
                    checked={field.value === "product"}
                  />
                  <span
                    className={`${field.value === "product" ? "bg-[#E1E1E8] text-black" : "bg-transparent"} flex h-full w-full items-center justify-center rounded-[30px] px-2 text-sm font-normal`}
                  >
                    물품만 받아요
                  </span>
                </label>
              </>
            )}
          />
        </div>
      </div>

      {/* 간단한 설명 입력 */}
      <div>
        <label className="block text-white">간단한 설명</label>
        <input
          {...register("description")}
          placeholder="상품에 대한 설명을 적어주세요"
          className="mt-2 h-12 w-full rounded-md border border-gray-600 bg-transparent px-4 text-white placeholder-gray-400 focus:border-[#00C38C] focus:outline-none"
        />
        {errors.description && (
          <p className="mt-1 text-xs text-red-500">
            {errors.description.message}
          </p>
        )}
      </div>

      {/* 교환 희망 물품 입력 */}
      <div>
        <label className="block text-white">교환 희망 물품</label>
        <input
          {...register("wishItem")}
          placeholder="교환 희망 물품을 적어주세요"
          className="mt-2 h-12 w-full rounded-md border border-gray-600 bg-transparent px-4 text-white placeholder-gray-400 focus:border-[#00C38C] focus:outline-none"
        />
        {errors.wishItem && (
          <p className="mt-1 text-xs text-red-500">{errors.wishItem.message}</p>
        )}
      </div>

      {/* 교환 신청 버튼 */}
      <div className="flex-grow"></div>
      <button
        type="submit"
        className="w-full rounded-md bg-[#00C38C] py-3 font-semibold text-white transition hover:bg-[#00A375]"
      >
        교환 신청하기
      </button>
    </form>
  );
};
