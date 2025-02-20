"use client";

const MainContents = ({ isDrawerOpen }: { isDrawerOpen: boolean }) => {
    const info = ["200m", "성산제 2동", "15분 전"];
    const tags = ["버튼1", "버튼2"];

    return (
        <>
            {/* 콘텐츠 (Drawer 상태에 따라 위치 조정) */}
            <div
                className={`absolute inset-x-0 bottom-[50px] text-white px-5 pb-6 transition-transform duration-300 ${
                    isDrawerOpen ? "translate-y-[-230px]" : "translate-y-0"
                }`}
            >
                <div className="flex flex-col">
                    <h1 className="text-3xl font-semibold">맛있는 귤 10개</h1>
                    <div className="text-gray-400 text-sm py-1">{info.join(" · ")}</div>
                    <h1 className="text-white text-base py-3 font-thin">맛있는 귤이 너무 많아요</h1>

                    {/* 태그 간격 조정 */}
                    <div className="flex flex-row text-sm space-x-3">
                        <p className="bg-teal-400 rounded-full px-3 py-2 font-light inline-block mr-2">
                            마음도 받아요
                        </p>
                        {tags.map((tag, index) => (
                            <p
                                key={index}
                                className="bg-gray-800 rounded-full px-3 py-2 font-light inline-block mr-2"
                            >
                                {tag}
                            </p>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default MainContents;
