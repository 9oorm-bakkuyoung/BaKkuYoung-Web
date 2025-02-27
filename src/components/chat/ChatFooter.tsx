"use client";

import { useState } from "react";

interface ChatFooterProps {
  onSendMessage: (message: string) => void;
}

const ChatFooter = ({ onSendMessage }: ChatFooterProps) => {
  const [message, setMessage] = useState("");

  const handleSendMessage = () => {
    if (message.trim()) {
      onSendMessage(message); // 상위 컴포넌트로 메시지 전달
      setMessage(""); // 입력창 초기화
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <div className="border-t bg-black px-4 py-4">
      <div className="relative w-full">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="메시지를 입력하세요..."
          className="w-full rounded-full bg-gray-800 px-4 py-4 pr-14 text-white focus:outline-none"
        />

        <button
          onClick={handleSendMessage}
          className="absolute top-1/2 right-3 -translate-y-1/2 transform rounded-full bg-teal-500 p-2 text-white hover:bg-teal-600"
        >
          {/* <SendIcon size="var(--dimension-300)" /> */}
        </button>
      </div>
    </div>
  );
};

export default ChatFooter;
