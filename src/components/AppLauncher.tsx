"use client";

import AppIcon from "@/components/AppIcon";
import { useRouter } from "next/navigation";

export default function AppLauncher() {
    const router = useRouter();

    const apps = [
        { name: "카메라 공유", icon: "/icons/camera.png", link: "/camera" },
        { name: "물품 공유", icon: "/icons/share.png", link: "/share" },
        { name: "여행 기록", icon: "/icons/travel.png", link: "/travel" },
        { name: "포토북", icon: "/icons/photobook.png", link: "/photobook" },
    ];

    const handleAppClick = (link: string) => {
        router.push(link); // 클라이언트 측 네비게이션
    };

    return (
        <div className="grid grid-cols-3 gap-6">
            {apps.map((app) => (
                <AppIcon
                    key={app.name}
                    icon={app.icon}
                    name={app.name}
                    onClick={() => handleAppClick(app.link)}
                />
            ))}
        </div>
    );
}