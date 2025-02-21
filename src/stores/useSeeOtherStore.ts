import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useSeeOtherStore = create(
    persist(
        (set) => ({
            isActive: false, // 기본 상태값 (false)
            setActive: () => set({ isActive: true }), // 상태를 true로 변경
            setInactive: () => set({ isActive: false }) // 상태를 false로 변경 (옵션)
        }),
        {
            name: "see-other-store", // 로컬 스토리지 키 이름
            getStorage: () => sessionStorage, // 또는 localStorage
        }
    )
);

// export const useSeeOtherStore = create((set) => ({
//     isActive: false, // 기본 상태값 (false)
//     setActive: () => set({ isActive: true }), // 상태를 true로 변경
//     setInactive: () => set({ isActive: false }), // 상태를 false로 변경 (옵션)
// }));