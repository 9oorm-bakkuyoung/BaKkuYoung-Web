import { NextResponse } from "next/server";
import { session } from "@/lib/session";

export async function GET() {
    const user = await session.get();
    if (!user) {
        return NextResponse.json({ message: "세션 없음" }, { status: 401 });
    }
    return NextResponse.json({ user });
}
