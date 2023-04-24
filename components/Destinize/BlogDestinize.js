import Image from "next/image";
import Link from "next/link";
import Blog from "@/public/destinize/Blog.png";

export default function BlogDestinize() {
  return (
    <div className="rounded-lg max-w-[276px] overflow-hidden shadow-card">
      <Image src={Blog} alt="" className="w-full" />
      <div className="px-[25px] pt-5 pb-11 space-y-[15px]">
        <p className="text-sm font-semibold uppercase text-black-300">
          26 desember 2021
        </p>
        <h4 className="font-bold text-black-500">
          Tips naik gunung Bromo Biar gak capet cyin 😥😛
        </h4>
        <p className="text-sm text-black-400">
          Jadi gini gann, anda tau bromo? yaaa gunung kann!
        </p>
        <button>
          <Link href={"/"} className="text-sm text-primary hover:underline">
            Baca selengkapnya . .
          </Link>
        </button>
      </div>
    </div>
  );
}
