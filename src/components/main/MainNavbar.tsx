import {PlusOutlineIcon} from "@goorm-dev/vapor-icons";

const MainNavbar = () => {
    return(
        <>
            {/* 상단 네비게이션 바 */}
            <div style={{ backgroundColor: "#252730" }}
                className="flex flex-row w-full py-3 px-5 justify-between items-center">
                <p className="text-white">서귀포시</p>

                <button className="bg-teal-400 hover:bg-hover-color rounded-full text-white">
                    <PlusOutlineIcon size="var(--dimension-400)" />
                </button>
            </div>
        </>
    )
}

export default MainNavbar;