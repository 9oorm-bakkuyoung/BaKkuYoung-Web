import { useRouter } from "next/navigation";

const MainNavbar = ({ isDrawerOpen }: { isDrawerOpen: boolean }) => {
  const router = useRouter();

  const handleAppClick = (link: string) => {
    router.push(link);
  };

  return (
    <div className="relative">
      {/* 네비게이션 바 */}
      <div
        style={{ backgroundColor: "#252730" }}
        className="flex w-full flex-row items-center justify-between px-5 py-3"
      >
        {/* 좌측 텍스트 */}
        <p className="text-lg font-semibold text-white">서귀포시</p>

        {/* 등록 버튼 */}
        <button
          onClick={() => handleAppClick("/register")}
          className="flex items-center justify-center rounded-full bg-teal-500 text-white transition-all duration-300 hover:bg-teal-600 focus:ring-2 focus:ring-teal-300 focus:outline-none active:scale-90"
        >
          {/* <PlusOutlineIcon size="var(--dimension-400)" /> */}
        </button>
      </div>

      {/* 오버레이 (Drawer가 열렸을 때) */}
      {isDrawerOpen && (
        <div className="pointer-events-auto absolute inset-0 z-10 bg-black opacity-50"></div>
      )}
    </div>
  );
};

export default MainNavbar;
