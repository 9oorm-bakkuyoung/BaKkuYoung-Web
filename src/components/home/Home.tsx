"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useRouter } from "next/navigation";

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
            router.push("/main");
        }, 3000);

        // 날개 애니메이션
        gsap.to(wingRef.current, {
            y: -10,
            repeat: -1,
            yoyo: true,
            duration: 0.3,
            ease: "power1.inOut"
        });

        // 새 둥실둥실 애니메이션
        gsap.to(bridRef.current, {
            y: 20,
            x: 10,
            repeat: -1,
            yoyo: true,
            duration: 2,
            ease: "power1.inOut"
        });

        // 타이머 클린업
        return () => clearTimeout(timer);
    }, [router]);

    return (
        <main className="min-h-screen bg-gradient-to-br from-emerald-400 to-cyan-300 p-6 flex flex-col items-center relative">
            {/* 메인 소개 (상단 고정) */}
            <div className="w-full text-center mt-20">
                <h1 className="text-white text-2xl font-bold">필요한 순간, 필요한 물건</h1>
            </div>

            {/* 오른쪽 아래 circle.svg */}
            <img
                ref={circleRef}
                src="/images/circle.svg"
                alt="원"
                className="absolute bottom-0 right-0 w-96 h-96"
            />

            {/* 새와 날개 애니메이션 */}
            <div ref={bridRef} className="absolute top-1/2 right-0 flex items-center">
                <img src="/images/brid.svg" alt="새" className="w-60 h-auto" />
                <img ref={wingRef} src="/images/wing.png" alt="날개" className="absolute w-20 h-auto -ml-20" />
            </div>

            {/* 왼쪽 중간 arrow.svg */}
            <img
                ref={arrowRef}
                src="/images/arrow.svg"
                alt="화살표"
                className="absolute top-14 -left-0 w-screen"
            />

            {/* 중간 hello.svg */}
            <img
                ref={helloRef}
                src="/images/hello_jeju.svg"
                alt="원"
                className="absolute bottom-80 right-44 w-48 h-48"
            />

            {/* 기존 SVG 이미지 */}
            <div className="flex flex-col items-center space-y-4">
                <img src="/icons/bakkuyoung.svg" alt="샘플 아이콘" className="w-56 h-44" />
            </div>
        </main>
    );
}

export default Home;