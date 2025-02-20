/** chat/layout.tsx */
"use client";

import { ChevronLeftOutlineIcon } from "@goorm-dev/vapor-icons";
import ChatNavbar from "@/components/chat/ChatNavbar";
import ChatFooter from "@/components/chat/ChatFooter";

const ChatLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex flex-col min-h-screen bg-black">
            {/* 상단 네비게이션 바 */}
            <ChatNavbar/>

            {/* 페이지 본문 렌더링 */}
            <main className="flex-grow">{children}</main>

            {/* 하단 네비게이션 바 */}
            <ChatFooter/>
        </div>
    );
};

export default ChatLayout;
