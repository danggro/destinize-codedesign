import Link from "next/link";
import Container from "../Container";
import Image from "next/image";
import OTWpana from "@/public/OTWpana.png";

export default function SectionCTA() {
  return (
    <section className="mb-[201px]">
      <Container>
        <div className="bg-primary overflow-hidden flex justify-between rounded-[16px] shadow-card">
          <div className="w-6/12 px-12 py-10 space-y-8 text-white font-manrope">
            <h2 className=" text-[40px] font-extrabold">
              Masih bingung cari tempat yang cocok
            </h2>
            <p className="pr-10 text-lg">
              Tenang, kami mempunyai fitur rekomendasi yang membantu kamu
              mencari tempat berlibur yang tepat dengan menjawab pertanyaan yang
              kami berikan.
            </p>
            <Link
              href={`/`}
              className="flex items-center gap-2 text-xl font-bold"
            >
              <span>Mulai Sekarang</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="14"
                fill="none"
                viewBox="0 0 22 14"
              >
                <path
                  fill="#fff"
                  d="M14.293 1.707A1 1 0 0115.707.293l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L18.586 8H1.011A1.006 1.006 0 010 7c0-.552.453-1 1.011-1h17.575l-4.293-4.293z"
                ></path>
              </svg>
            </Link>
          </div>
          <Image src={OTWpana} alt="OTWpana" />
        </div>
      </Container>
    </section>
  );
}
