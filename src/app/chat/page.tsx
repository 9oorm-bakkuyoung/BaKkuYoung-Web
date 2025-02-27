"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const ChatPage = () => {
  const [messages, setMessages] = useState<string[]>([]);

  // localStorage에서 메시지 불러오기
  useEffect(() => {
    const storedMessages = JSON.parse(
      localStorage.getItem("chatMessages") || "[]",
    );
    setMessages(storedMessages);
  }, []);

  return (
    <div className="p-4 text-white">
      <Image
        src="/chat1.svg"
        alt="chat"
        className="mb-4"
        width={400}
        height={400}
      />
      {/* 입력된 메시지 표시 */}
      <div className="space-y-2">
        {messages.map((msg, index) => (
          <div key={index} className="rounded-lg bg-gray-700 p-3">
            {msg}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatPage;
