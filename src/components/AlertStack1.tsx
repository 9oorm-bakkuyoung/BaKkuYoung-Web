import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export function AlertStack1() {
    return (
        <div className="fixed top-20 z-50 flex flex-col items-center space-y-[-10px]">
            <AnimatePresence>
                <motion.div
                    layout
                    initial={{opacity: 0, y: 20, scale: 0.9}}
                    animate={{opacity: 1, y: 0, scale: 1}}
                    exit={{opacity: 0, y: 20, scale: 0.9}}
                    transition={{duration: 0.3}}
                    className="relative cursor-pointer"
                >
                    <div className="relative w-[353px] rounded-xl bg-[#252730] p-[10px] shadow-lg">
                        <div className="flex items-center gap-[14px]">
                            {/* 왼쪽 이미지 */}
                            <div className="h-[50px] w-[50px] overflow-hidden rounded-[10px]">
                                <Image
                                    src="/mountain.png" //등산 스틱
                                    alt="mandarin"
                                    width={50}
                                    height={50}
                                    objectFit="cover"
                                />
                            </div>

                            {/* 텍스트 */}
                            <div className="flex flex-col gap-1">
                                <p className="text-white">등산 스틱</p>
                                <p className="text-sm text-[#8C8F9F]">매칭 대기 중이에요</p>
                            </div>

                            {/* 우측 이미지 */}
                            <div>
                                <Image
                                    src="/chorong_pigeon.svg"
                                    alt="chorong_pigeon"
                                    width={86}
                                    height={70}
                                    className="absolute top-0 right-0"
                                />
                            </div>
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>
        </div>
    )
}