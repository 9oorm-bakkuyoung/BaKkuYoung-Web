import { PlusOutlineIcon } from "@goorm-dev/vapor-icons";
import { useRouter } from "next/navigation";

const MainNavbar = () => {
    const router = useRouter();

    const handleAppClick = (link: string) => {
        router.push(link);
    };

    return (
        <div
            style={{ backgroundColor: "#252730" }}
            className="flex flex-row w-full py-3 px-5 justify-between items-center"
        >
            {/* 좌측 텍스트 */}
            <p className="text-white text-lg font-semibold">서귀포시</p>

            {/* 등록 버튼 */}
            <button
                onClick={() => handleAppClick("/register")}
                className="flex items-center justify-center bg-teal-500 text-white rounded-full transition-all duration-300
                           hover:bg-teal-600 active:scale-90 focus:outline-none focus:ring-2 focus:ring-teal-300"
            >
                <PlusOutlineIcon size="var(--dimension-400)" />
            </button>
        </div>
    );
};

export default MainNavbar;
