// src/app/OfflinePage.tsx
import Link from "next/link";

export default function OfflinePage() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
            <h1 className="text-3xl font-bold text-red-500">오프라인 상태입니다.</h1>
            <p className="mt-4 text-gray-700">인터넷 연결을 확인한 후 다시 시도해 주세요.</p>

            {/* a 태그 대신 Link 사용 */}
            <Link href="/" className="mt-6 inline-block rounded bg-blue-500 px-4 py-2 text-white">
                홈으로 돌아가기
            </Link>
        </main>
    );
}
