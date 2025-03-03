import { z } from "zod";
import { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export const createFormSchema = z.object({
  productName: z.string().min(1, "상품명을 입력해주세요"),
  description: z.string().min(1, "설명을 입력해주세요"),
  tradeType: z.enum(["heart", "product"]),
  // wishItem: z.string().optional(),
  wishItem: z.string().min(1, "교환 희망 물품을 입력해주세요"),
});

export type createFormData = z.infer<typeof createFormSchema>;

export const useCreateForm = () => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [selectedImage, setSelectedImage] = useState("");
  const [imageError, setImageError] = useState<string | null>(null);

  const form = useForm<createFormData>({
    resolver: zodResolver(createFormSchema),
    defaultValues: {
      productName: "",
      description: "",
      wishItem: "",
      tradeType: "heart",
    },
  });

  const handleItemImage = () => {
    if (fileInputRef.current) fileInputRef.current.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;

    if (file) {
      setSelectedFile(file);
      setSelectedImage(URL.createObjectURL(file));
      setImageError(null);
    }
  };

  const onSubmit = async (data: createFormData) => {
    if (!selectedFile) {
      setImageError("상품 이미지를 선택해주세요");
      return { success: false, message: "상품 이미지를 선택해주세요" };
    }

    const formData = new FormData();

    const product = {
      productName: data.productName,
      description: data.description,
      heartYn: data.tradeType === "heart" ? "Y" : "N",
      wishList: data.wishItem ? [data.wishItem] : [],
      latitude: 0,
      longitude: 0,
    };

    formData.append("product", JSON.stringify(product));

    if (selectedFile) {
      formData.append("image", selectedFile);
    }

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/product/add`,
        {
          method: "POST",
          body: formData,
        },
      );

      if (!response.ok) throw new Error("업로드 실패");

      return { success: true, message: "업로드 성공!" };
    } catch (error) {
      console.error(error);
      return { success: false, message: "업로드 중 오류 발생" };
    }
  };

  return {
    form,
    fileInputRef,
    selectedImage,
    imageError,
    handleItemImage,
    handleFileChange,
    onSubmit,
  };
};
