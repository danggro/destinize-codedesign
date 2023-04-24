import Image from "next/image";
import Container from "../Container";
import HeadSection from "../HeadSection";
import Maps from "@/public/Maps.png";
import ItemMaps from "./ItemMaps";
import Loc from "./Icon/Loc";
import Love from "./Icon/Love";
import People from "./Icon/People";

export default function SectionMaps() {
  return (
    <section className="mb-[140px]">
      <Container>
        <div className="text-center">
          <HeadSection
            sect="cari tempat wisata"
            title="🗺️ • Cari Tempat Wisata Didekatmu"
          />
          <p className="w-8/12 mx-auto text-lg mt-[18px] font-manrope text-black-400">
            Fitur ini memungkinkan kamu untuk mencari tempat wisata atau tempat
            yang sedang populer di daerah kamu dengan begitu kamu akan selalu
            update dan gak kudet lagi 👍🏻
          </p>
        </div>
        <Image
          src={Maps}
          alt=""
          className="rounded-lg mb-14 mt-11 shadow-[0px_56px_80px_0_rgba(185,185,185,0.1)]"
        />
        <ul className="flex gap-[40px] justify-between">
          <ItemMaps
            icon={<Loc />}
            title="Populer di dekatmu"
            desc="Tempat pariwisata yang populer dan pasti dikenal semua orang didekatmu"
          />
          <ItemMaps
            icon={<Love />}
            title="Favorit di dekatmu"
            desc="Tempat favorit dan disukai semua orang orang di sekitar daerah kamu"
          />
          <ItemMaps
            icon={<People />}
            title="Ramai di didekatmu"
            desc="Spot yang paling ramai dikunjungi para warga sekaligus para wisatawan"
          />
        </ul>
      </Container>
    </section>
  );
}
