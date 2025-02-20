"use client";

import React, { useEffect, useState } from "react";

interface BeforeInstallPromptEvent extends Event {
    prompt: () => void;
    userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

export default function PWAInstallButton() {
    const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
    const [isInstalled, setIsInstalled] = useState(false);

    useEffect(() => {
        // PWA 설치 여부 확인
        if (window.matchMedia('(display-mode: standalone)').matches) {
            setIsInstalled(true);
        }

        // beforeinstallprompt 이벤트 감지
        const handler = (e: Event) => {
            e.preventDefault();
            setDeferredPrompt(e as BeforeInstallPromptEvent);
            setIsInstalled(false);
        };

        window.addEventListener("beforeinstallprompt", handler);

        return () => window.removeEventListener("beforeinstallprompt", handler);
    }, []);

    const handleInstall = () => {
        if (deferredPrompt) {
            deferredPrompt.prompt();
            deferredPrompt.userChoice.then((choiceResult) => {
                if (choiceResult.outcome === "accepted") {
                    console.log("PWA 설치 완료");
                    setIsInstalled(true);
                } else {
                    console.log("PWA 설치 취소");
                }
                setDeferredPrompt(null);
            });
        }
    };

    return (
        <>
            {!isInstalled && deferredPrompt && (
                <button
                    onClick={handleInstall}
                    className="mt-4 rounded-lg bg-blue-600 px-4 py-2 text-white shadow-lg"
                >
                    PWA 설치하기
                </button>
            )}
            {isInstalled && (
                <p className="mt-2 text-green-500">PWA가 설치되었습니다!</p>
            )}
        </>
    );
}
