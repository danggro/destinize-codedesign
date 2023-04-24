export default function ItemNav(props) {
  return (
    <li>
      <button className="flex gap-2 hover:underline">
        <span className="text-sm text-black-300">{props.children}</span>
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
            strokeMiterlimit="10"
            d="M13.28 6.967L8 11.667l-5.28-4.7"
          ></path>
        </svg>
      </button>
    </li>
  );
}
