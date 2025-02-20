"use client";

import { useState } from "react";
import { SendIcon } from '@goorm-dev/vapor-icons';

const ChatFooter = () => {
    const [message, setMessage] = useState("");

    const handleSendMessage = () => {
        if (message.trim()) {
            console.log("보낸 메시지:", message);
            setMessage("");  // 메시지 전송 후 입력창 비우기
        }
    };

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            handleSendMessage();
        }
    };

    return (
        <div className="border-t py-4 px-4 bg-black">
            <div className="relative w-full pb-4">
                {/* 입력창 */}
                <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="메시지를 입력하세요..."
                    className="w-full rounded-full px-4 pr-14 py-4 text-white focus:outline-none bg-gray-800"
                />

                {/* 전송 버튼 (입력창 내부에 우측 중앙 배치) */}
                <button
                    onClick={handleSendMessage}
                    className="absolute right-3 top-1/5 transform -translate-y-1/5 bg-teal-500 text-white p-2 rounded-full hover:bg-teal-600"
                >
                    <SendIcon size="var(--dimension-300)" />
                </button>
            </div>
        </div>
    );
};

export default ChatFooter;
