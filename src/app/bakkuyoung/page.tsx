import Image from "next/image";

export default function Home() {
    return (
        <>
            <div className="relative h-[calc(100vh-36px)]">
                <Image src="/mandarin.png" alt="mandarin_image" fill={true} />
            </div>
        </>
    );
}