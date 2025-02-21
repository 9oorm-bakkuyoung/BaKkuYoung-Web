import {ChevronLeftOutlineIcon} from "@goorm-dev/vapor-icons";

const ChatNavbar = () => {
    return (
        <div className="flex flex-row border-b px-5 py-4">
            <button className="flex flex-row items-start text-white">
                <ChevronLeftOutlineIcon size="var(--dimension-300)"/>
            </button>
            <div className="flex flex-row w-full justify-center items-center">
                <span className="whitespace-nowrap text-white text-lg pr-6">구영이</span>
            </div>
        </div>
    )
}

export default ChatNavbar;