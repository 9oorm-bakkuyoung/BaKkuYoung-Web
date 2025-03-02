"use client";

import {useEffect, useRef} from "react";
import {gsap} from "gsap";
import {useRouter} from "next/navigation";
import Image from "next/image";

const Home = () => {
    const bridRef = useRef<HTMLDivElement>(null);
    const wingRef = useRef<HTMLImageElement>(null);
    const arrowRef = useRef<HTMLImageElement>(null);
    const circleRef = useRef<HTMLImageElement>(null);
    const helloRef = useRef<HTMLImageElement>(null);
    const router = useRouter();

    useEffect(() => {
        // 3초 후 자동 이동
        const timer = setTimeout(() => {
          router.push("/login");
        }, 3000);

        // 🟢 날개 애니메이션 (기울이면서 인사)
        gsap.to(wingRef.current, {
            y: -10,
            rotate: 25, // 기존보다 더 기울이기 (15 → 25)
            transformOrigin: "bottom center", // 날개 끝을 중심으로 회전
            repeat: -1,
            yoyo: true,
            duration: 0.5, // 0.3 → 0.5초로 조금 더 부드럽게
            ease: "power1.inOut",
        });

        // 🟢 새 애니메이션 (더 빠르게 움직이게 변경)
        gsap.to(bridRef.current, {
            y: 20,
            x: 10,
            repeat: -1,
            yoyo: true,
            duration: 1.5, // 기존보다 빠르게 움직이도록 설정 (2 → 1.2)
            ease: "power2.inOut",
        });

        // 타이머 클린업
        return () => clearTimeout(timer);
    }, [router]);

    return (
        <main className="relative flex min-h-[100dvh] w-full overflow-hidden flex-col items-center bg-gradient-to-br from-emerald-400 to-cyan-300 p-6">
            {/* 메인 소개 (상단 고정) */}
            <div className="mt-20 w-full text-center">
                <h1 className="text-2xl font-bold text-white">
                    필요한 순간, 필요한 물건
                </h1>
            </div>

            {/* 오른쪽 아래 circle.svg */}
            <Image
                ref={circleRef}
                src="/images/circle.svg"
                alt="원"
                className="absolute right-0 bottom-0 w-full max-w-[384px] h-auto"
                width={384}
                height={384}
                priority
            />

            {/* 새와 날개 애니메이션 */}
            <div ref={bridRef} className="absolute top-1/2 right-0 flex items-center">
                <Image
                    src="/images/brid.svg"
                    alt="새"
                    className="w-full max-w-[240px] h-auto"
                    width={240}
                    height={0}
                />
                <Image
                    ref={wingRef}
                    src="/images/wing.png"
                    alt="날개"
                    className="absolute -ml-20 w-full max-w-[80px] h-auto"
                    width={80}
                    height={0}
                />
            </div>

            {/* 왼쪽 중간 arrow.svg */}
            <Image
                ref={arrowRef}
                src="/images/arrow.svg"
                alt="화살표"
                className="absolute top-14 left-0 w-full max-w-[1920px] h-auto"
                width={1920}
                height={0}
            />

            {/* 중간 hello.svg */}
            <Image
                ref={helloRef}
                src="/images/hello_jeju.svg"
                alt="원"
                className="absolute right-44 bottom-80 w-full max-w-[192px] h-auto"
                width={192}
                height={192}
            />

            {/* 기존 SVG 이미지 */}
            <div className="flex flex-col items-center space-y-4">
                <Image
                    src="/icons/bakkuyoung.svg"
                    alt="샘플 아이콘"
                    className="w-full max-w-[224px] h-auto"
                    width={224}
                    height={176}
                />
            </div>
        </main>
    );
};

export default Home;
