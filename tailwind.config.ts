// tailwind.config.ts
import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",  // 모든 컴포넌트 경로 포함
  ],
  theme: {
    extend: {
      colors: {
        main: {
          DEFAULT: "#00C38C",  // 기본 색상
          light: "#66E8C2",    // 밝은 톤
          dark: "#009970",     // 어두운 톤
        },
        hover: "#00A375",       // 호버 색상
        back: "#212124",        // 배경색
        overlay: "rgba(0, 0, 0, 0.5)",  // 오버레이 색상
      },
    },
  },
  plugins: [],
} satisfies Config;
