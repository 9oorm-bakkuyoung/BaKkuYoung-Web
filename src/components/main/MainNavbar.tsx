import {PlusOutlineIcon} from "@goorm-dev/vapor-icons";

const MainNavbar = () => {
    return(
        <>
            {/* 상단 네비게이션 바 */}
            <div className="flex flex-row w-full bg-black py-3 px-5 justify-between items-center">
                <p className="text-white">서귀포시</p>

                <button className="bg-teal-400 hover:bg-hover-color rounded-full text-white">
                    <PlusOutlineIcon size="var(--dimension-400)" />
                </button>
            </div>
        </>
    )
}

export default MainNavbar;