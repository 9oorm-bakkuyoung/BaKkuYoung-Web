export const login = async (id: string, password: string) => {
    try {
        const response = await fetch("http://ec2-3-38-13-139.ap-northeast-2.compute.amazonaws.com:8080/api/auth/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ id, password }),
        });

        if (!response.ok) {
            throw new Error("로그인 실패. 아이디 또는 비밀번호를 확인해주세요.");
        }

        return await response.json();
    } catch (error) {
        // console.error("로그인 오류:", error);
        throw new Error("로그인 실패. 아이디 또는 비밀번호를 확인해주세요.");
    }
};

export const join = async (id: string, password: string, memberName: string) => {
    try {
        const response = await fetch("http://ec2-3-38-13-139.ap-northeast-2.compute.amazonaws.com:8080/api/auth/join", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ id, password, memberName }),
        });

        if (!response.ok) {
            throw new Error("회원가입 실패. 입력 정보를 확인해주세요.");
        }

        return await response.json();
    } catch (error) {
        // console.error("회원가입 오류:", error);
        throw new Error("서버 오류. 나중에 다시 시도해주세요.");
    }
};
