"use client";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center bg-gradient-to-br from-emerald-400 to-cyan-300 p-6">
      <div>
        <div className="flex flex-col gap-[15px]">
          <div className="mt-[59px] w-full text-center">
            <h1 className="text-2xl font-bold text-white">
              필요한 순간, 필요한 물건
            </h1>
          </div>
          <img src="/icons/bakkuyoung.svg" alt="bakkuyoung" className="z-10" />
        </div>

        <img
          src="/arrow_bakkuyoung.svg"
          className="absolute top-[-82px] left-0 h-[852px] w-full"
        />

        <img
          src="/hello_jeju.svg"
          className="absolute top-[400px] left-[30px] z-10"
        />

        <img
          src="/hello_pigeon_bg.svg"
          className="absolute right-0 bottom-0 h-[500px] w-[500px]"
        />

        <img
          src="/hello_pigeon.svg"
          className="absolute right-0 bottom-0 h-[520px] w-[350px]"
        />
      </div>
    </main>
  );
}
