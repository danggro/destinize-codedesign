export default function NavLoc() {
  return (
    <div className="flex items-center gap-3">
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
            strokeWidth="1.2"
            d="M24 25.192a2.6 2.6 0 100-5.2 2.6 2.6 0 000 5.2z"
          ></path>
          <path
            stroke="#4475F2"
            strokeWidth="1.2"
            d="M17.017 21.075c1.641-7.217 12.333-7.208 13.966.008.959 4.234-1.675 7.817-3.983 10.034a4.328 4.328 0 01-6.008 0c-2.3-2.217-4.934-5.809-3.975-10.042z"
          ></path>
        </svg>
      </button>
      <div>
        <span className="text-xs text-black-300">Lokasi</span>
        <button className="flex gap-1">
          <span className="text-base font-bold text-primary">
            Indonesia, Yogyakarta
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="21"
            fill="none"
            viewBox="0 0 20 21"
          >
            <path
              fill="#4475F2"
              d="M14.934 8.316H5.067c-.8 0-1.2.967-.633 1.534l4.316 4.316a1.775 1.775 0 002.509 0l1.641-1.641 2.675-2.675c.559-.567.159-1.534-.641-1.534z"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
}
