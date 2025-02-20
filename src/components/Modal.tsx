import React from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ModalProps {
  open: boolean;
  onOpenChange: (isOpen: boolean) => void;
  title?: string;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({
  open,
  onOpenChange,
  title,
  children,
}) => {
  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* 배경 오버레이 */}
          <motion.div
            className="absolute inset-0 bg-black/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => {
              console.log("배경 클릭됨 - 모달 닫힘");
              onOpenChange(false);
            }} // ✅ 배경 클릭 시 닫힘
          />

          {/* 모달 본체 */}
          <motion.div
            className="relative z-50 w-[90%] max-w-md rounded-[10px] bg-white p-6 shadow-lg dark:bg-[#252730]"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            onClick={(e) => {
              console.log("모달 내부 클릭 - 닫히지 않음");
              e.stopPropagation(); // ✅ 내부 클릭 시 닫히지 않도록 이벤트 전파 방지
            }}
          >
            {/* 모달 헤더 */}
            <div className="flex items-center justify-between border-b pb-3">
              {title && (
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {title}
                </h2>
              )}
            </div>

            {/* 모달 내용 */}
            <div className="mt-4">{children}</div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
