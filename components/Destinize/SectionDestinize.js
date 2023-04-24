import Link from "next/link";
import HeadSection from "../HeadSection";
import Arrow from "./Arrow";
import Container from "../Container";
import BlogDestinize from "./BlogDestinize";
import Image from "next/image";
import Video from "@/public/destinize/Video.jpg";
import Bot from "@/public/destinize/Bot.jpg";
import Play from "./Play";

export default function SectionDestinize() {
  return (
    <section className="mb-[200px]">
      <Container>
        <div className="flex items-center justify-between">
          <div>
            <HeadSection
              sect="mengenal destinize"
              title="Galeri Pariwisata & Blog Travel"
              first="🖼️ • "
            />
          </div>
          <Link
            href={"/"}
            className="flex hover:underline items-center text-[17px] text-primary font-semibold gap-4"
          >
            Lihat Semua
            <Arrow />
          </Link>
        </div>
        <div className="flex mt-14 gap-11">
          <BlogDestinize />
          <div className="relative w-full overflow-hidden rounded-lg shadow-card">
            <div className="absolute grid w-full h-full gdn-destinize place-items-center">
              <button className="hover:opacity-90">
                <Play />
              </button>
            </div>
            <Image src={Video} alt="" className="w-full" />
          </div>
        </div>
        <div className="mt-[37px] overflow-hidden relative rounded-[5px] shadow-card">
          <div className="absolute w-full h-full gdn-destinize-2">
            <div className="w-8/12 mt-6 p-[25px] space-y-[15px] text-white ">
              <h4 className="text-2xl font-extrabold">
                Tips meminum air kawah biar lidah melepuh
              </h4>
              <p className="font-medium">
                Lidah melepuh? why nott, kawah bukan untuk dilihat kawan.. tapi
                untuk di minum.. rasakan kepanasan yang brutal 🔥
              </p>
              <div className="flex gap-[15px]">
                <p className="text-sm font-semibold">Google</p>
                <p className="text-sm font-semibold">Trending</p>
                <p className="text-sm font-semibold">Baru</p>
              </div>
            </div>
          </div>
          <Image src={Bot} alt="Bot" className="w-full" />
        </div>
      </Container>
    </section>
  );
}
