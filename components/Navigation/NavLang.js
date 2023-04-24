export default function NavLang() {
  return (
    <button className="flex gap-[6px] items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        fill="none"
        viewBox="0 0 20 20"
      >
        <path
          stroke="#9A9EA6"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.2"
          d="M10 18.333a8.333 8.333 0 100-16.667 8.333 8.333 0 000 16.667z"
        ></path>
        <path
          stroke="#9A9EA6"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.2"
          d="M6.667 2.5H7.5a23.686 23.686 0 000 15h-.833M12.5 2.5a23.686 23.686 0 010 15"
        ></path>
        <path
          stroke="#9A9EA6"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.2"
          d="M2.5 13.333V12.5a23.686 23.686 0 0015 0v.833M2.5 7.5a23.686 23.686 0 0115 0"
        ></path>
      </svg>
      <span className="text-sm text-black-300">Bahasa Indonesia</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="none"
        viewBox="0 0 16 16"
      >
        <path
          fill="#9A9EA6"
          d="M11.947 6.253H4.053c-.64 0-.96.774-.506 1.227L7 10.933a1.42 1.42 0 002.007 0L10.32 9.62l2.14-2.14a.721.721 0 00-.514-1.227z"
        ></path>
      </svg>
    </button>
  );
}
