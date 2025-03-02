export async function fetchAllProducts() {
    try {
        const res = await fetch("http://ec2-3-38-13-139.ap-northeast-2.compute.amazonaws.com:8080/api/product/all", {
            method: "GET",
            headers: { "Content-Type": "application/json" },
            cache: "no-store",
        });

        console.log(res)
        const contentType = res.headers.get("content-type") || "";

        if (!res.ok) {
            const errorResponse = contentType.includes("application/json")
                ? await res.json() // JSON 응답이면 JSON으로 파싱
                : await res.text(); // JSON이 아니면 텍스트로 파싱

            console.error("API 오류:", errorResponse);
            return [];
        }

        if (!contentType.includes("application/json")) {
            throw new Error(`잘못된 응답 형식입니다. 서버 응답: ${await res.text()}`);
        }

        const data = await res.json();
        return data.products || []; // 데이터 구조가 다를 경우 대비
    } catch (error) {
        console.error("API 요청 오류:", error);
        return [];
    }
}
