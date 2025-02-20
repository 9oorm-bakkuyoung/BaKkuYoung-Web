"use client";

import Image from "next/image";
import React from "react";

interface AppIconProps {
    icon: string;
    name: string;
    onClick?: () => void;
}

export default function AppIcon({ icon, name, onClick }: AppIconProps) {
    return (
        <div
            onClick={onClick}
            className="flex flex-col items-center justify-center cursor-pointer"
        >
            <div className="w-16 h-16 rounded-xl bg-white shadow-lg">
                <Image
                    src={icon}
                    alt={name}
                    width={64}
                    height={64}
                    className="rounded-xl"
                />
            </div>
            <p className="mt-1 text-sm text-center text-gray-800">{name}</p>
        </div>
    );
}