"use client";

import { useState } from "react";
import { SendIcon } from "@goorm-dev/vapor-icons";

interface ChatFooterProps {
    onSendMessage: (message: string) => void;
}

const ChatFooter = ({ onSendMessage }: ChatFooterProps) => {
    const [message, setMessage] = useState("");

    const handleSendMessage = () => {
        if (message.trim()) {
            onSendMessage(message);  // 상위 컴포넌트로 메시지 전달
            setMessage("");          // 입력창 초기화
        }
    };

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            handleSendMessage();
        }
    };

    return (
        <div className="border-t py-4 px-4 bg-black">
            <div className="relative w-full">
                <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="메시지를 입력하세요..."
                    className="w-full rounded-full px-4 pr-14 py-4 text-white focus:outline-none bg-gray-800"
                />

                <button
                    onClick={handleSendMessage}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-teal-500 text-white p-2 rounded-full hover:bg-teal-600"
                >
                    <SendIcon size="var(--dimension-300)" />
                </button>
            </div>
        </div>
    );
};

export default ChatFooter;
