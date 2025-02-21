"use client";

import { useEffect, useState } from "react";
import ChatNavbar from "@/components/chat/ChatNavbar";
import ChatFooter from "@/components/chat/ChatFooter";

const ChatLayout = ({ children }: { children: React.ReactNode }) => {
    const [messages, setMessages] = useState<string[]>([]);

    // 컴포넌트 마운트 시 localStorage에서 메시지 불러오기
    useEffect(() => {
        const storedMessages = JSON.parse(localStorage.getItem("chatMessages") || "[]");
        setMessages(storedMessages);
    }, []);

    // 메시지 추가 및 localStorage 저장
    const handleSendMessage = (newMessage: string) => {
        const updatedMessages = [...messages, newMessage];
        setMessages(updatedMessages);
        localStorage.setItem("chatMessages", JSON.stringify(updatedMessages));
    };

    return (
        <div className="flex flex-col min-h-screen bg-black">
            {/* 상단 네비게이션 바 */}
            <ChatNavbar />

            {/* 페이지 본문 */}
            <main className="flex-grow">
                {children}
            </main>

            {/* 하단 입력창 */}
            <ChatFooter onSendMessage={handleSendMessage} />
        </div>
    );
};

export default ChatLayout;
