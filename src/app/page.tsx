import AppLauncher from "@/components/AppLauncher";

export default function Home() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-blue-200 to-blue-400 p-6">
            <h1 className="text-2xl font-bold text-white mb-4">제주 여행 플랫폼</h1>
            <AppLauncher />
        </main>
    );
}
