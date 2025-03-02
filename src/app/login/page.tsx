// import Login from "@/components/login/Login";
import Login from "@/components/auth/Login";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "로그인 - 바꾸영",
    description: "바꾸영 로그인 페이지",
    // ❌ themeColor는 metadata에서 제거해야 함!!
};

const Page = () => {
    return(
        <>
            <Login/>
        </>
    )
}

export default Page;