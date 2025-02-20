export default function Home() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-emerald-400 to-cyan-300 p-6 flex flex-col items-center">
            {/* 메인 소개 (상단 고정) */}
            <div className="w-full text-center mt-20">
                <h1 className="text-white text-2xl font-bold">필요한 순간, 필요한 물건</h1>
            </div>

            {/* SVG 이미지 업로드 예 */}
            <div className="flex flex-col items-center space-y-4">
                {/* 1. 직접 코드 삽입 방법 */}
                {/*<div className="w-16 h-16">*/}
                {/*    <svg*/}
                {/*        xmlns="http://www.w3.org/2000/svg"*/}
                {/*        fill="none"*/}
                {/*        viewBox="0 0 24 24"*/}
                {/*        stroke="currentColor"*/}
                {/*        className="w-full h-full text-white"*/}
                {/*    >*/}
                {/*        <path*/}
                {/*            strokeLinecap="round"*/}
                {/*            strokeLinejoin="round"*/}
                {/*            strokeWidth="2"*/}
                {/*            d="M12 4v16m8-8H4"*/}
                {/*        />*/}
                {/*    </svg>*/}
                {/*</div>*/}

                {/* 2. public 폴더에서 불러오기 */}
                <img src="/icons/bakkuyoung.svg" alt="샘플 아이콘" className="w-56 h-44" />

                {/* 3. React 컴포넌트로 불러오기 (Next.js 환경) */}
                {/* 예: components/SampleIcon.tsx */}
                {/* <SampleIcon className="w-16 h-16 text-white" /> */}
            </div>
        </main>
    );
}
