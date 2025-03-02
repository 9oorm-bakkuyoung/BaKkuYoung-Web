import { NextResponse } from "next/server";
import { session } from "@/lib/session"; // 세션 저장 관리 함수

export async function POST(req: Request) {
    const { id, password } = await req.json();

    if (id === "admin" && password === "1234") {
        const res = NextResponse.json({ message: "로그인 성공" });
        await session.set(res, { user: { id } });
        return res;
    }

    return NextResponse.json({ message: "로그인 실패" }, { status: 401 });
}
