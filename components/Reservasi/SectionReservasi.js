import Image from "next/image";
import Container from "../Container";
import HeadSection from "../HeadSection";
import Lub from "./Icon/Lub";
import Pencil from "./Icon/Pencil";
import ItemFav from "./ItemReservasi";
import bg1 from "@/public/reservasi/bg-1.png";
import bg2 from "@/public/reservasi/bg-2.png";

export default function SectionReservasi() {
  return (
    <section className="mb-[170px]">
      <Container>
        <div className="flex gap-[126px]">
          <div className="w-6/12">
            <HeadSection
              sect="reservasi tempat"
              title="Gak mau ngantri? reservsasi aja!🤙🏻"
            />
            <ul className="w-10/12 pr-5 mt-10 space-y-[52px]">
              <ItemFav
                icon={"🔎"}
                title="Cari tempat yang kamu mau"
                desc="Temukan destinasi selanjutnya yang akan kamu kunjungi dengan Destinize"
              />
              <ItemFav
                icon={"✏"}
                title="Cari tempat yang kamu mau"
                desc="Temukan destinasi selanjutnya yang akan kamu kunjungi dengan Destinize"
              />
              <ItemFav
                icon={"😍"}
                title="Cari tempat yang kamu mau"
                desc="Temukan destinasi selanjutnya yang akan kamu kunjungi dengan Destinize"
              />
            </ul>
          </div>
          <div className="w-6/12">
            <div className="relative">
              <div className="w-[380px] left-16 absolute h-[394px] blur-[75px] rounded-full bg-primary/20"></div>
              <Image
                src={bg1}
                alt=""
                className="h-fit absolute top-[75px] shadow-[0px_100px_80px_0_rgba(0,0,0,0.06)] rounded-[26px]"
              />
              <Image
                src={bg2}
                alt=""
                className="absolute top-[310px] right-0 shadow-[0px_100px_80px_0_rgba(0,0,0,0.06)] rounded-[18px]"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
