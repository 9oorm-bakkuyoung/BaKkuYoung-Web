const ChatNavbar = () => {
  return (
    <div className="flex flex-row border-b px-5 py-4">
      <button className="flex flex-row items-start text-white">
        {/* <ChevronLeftOutlineIcon size="var(--dimension-300)"/> */}
      </button>
      <div className="flex w-full flex-row items-center justify-center">
        <span className="pr-6 text-lg whitespace-nowrap text-white">
          구영이
        </span>
      </div>
    </div>
  );
};

export default ChatNavbar;
