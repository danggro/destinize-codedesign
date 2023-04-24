export default function NavSearch() {
  return (
    <div className="relative flex-auto">
      <label
        className="absolute top-[50%] -translate-y-[50%] left-6 "
        htmlFor="search"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="none"
          viewBox="0 0 16 16"
        >
          <path
            stroke="#9A9EA6"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M7.666 14a6.333 6.333 0 100-12.667 6.333 6.333 0 000 12.667zM14.666 14.667l-1.333-1.333"
          ></path>
        </svg>
      </label>
      <input
        id="search"
        type="text"
        placeholder="Cari apapun disini . . ."
        className="rounded-full outline-none focus:outline-black-400 bg-[#F0F1F2] pl-12 pr-6 py-[16.5px] text-xs text-black-300 w-full"
      />
    </div>
  );
}
