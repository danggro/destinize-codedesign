import ItemNav from "./ItemNav";

export default function NavBot() {
  return (
    <div className="flex justify-between py-[9px] items-center">
      <ul className="flex gap-10">
        <ItemNav>Gunung</ItemNav>
        <ItemNav>Pantai</ItemNav>
        <ItemNav>Kuliner</ItemNav>
        <ItemNav>Outbond</ItemNav>
        <ItemNav>Sejarah</ItemNav>
        <ItemNav>Edukasi</ItemNav>
        <ItemNav>Romantis</ItemNav>
        <ItemNav>Alam</ItemNav>
      </ul>
      <div className="flex gap-2">
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            fill="none"
            viewBox="0 0 48 48"
          >
            <rect width="48" height="48" fill="#4475F2" rx="24"></rect>
            <path
              stroke="#fff"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="10"
              strokeWidth="1.2"
              d="M21.342 15.666l-3.017 3.026M26.658 15.666l3.017 3.026"
            ></path>
            <path
              stroke="#fff"
              strokeWidth="1.2"
              d="M15.667 20.542c0-1.542.825-1.667 1.85-1.667h12.967c1.025 0 1.85.125 1.85 1.667 0 1.791-.825 1.666-1.85 1.666H17.517c-1.025 0-1.85.125-1.85-1.666z"
            ></path>
            <path
              stroke="#fff"
              strokeLinecap="round"
              strokeWidth="1.2"
              d="M22.134 25.666v2.959M25.967 25.666v2.959M16.917 22.334l1.175 7.2c.267 1.616.908 2.8 3.292 2.8h5.025c2.591 0 2.975-1.134 3.275-2.7l1.4-7.3"
            ></path>
          </svg>
        </button>
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            fill="none"
            viewBox="0 0 48 48"
          >
            <rect width="48" height="48" fill="#E3EBFD" rx="24"></rect>
            <path
              stroke="#4475F2"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.2"
              d="M24 24a4.167 4.167 0 100-8.333A4.167 4.167 0 0024 24zM31.159 32.333c0-3.225-3.209-5.833-7.159-5.833-3.95 0-7.158 2.608-7.158 5.833"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
}
