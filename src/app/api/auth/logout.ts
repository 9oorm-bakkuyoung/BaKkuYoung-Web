import { NextResponse } from "next/server";
import { session } from "@/lib/session";

export async function POST() {
    const res = NextResponse.json({ message: "로그아웃 완료" });
    await session.destroy(res);
    return res;
}
