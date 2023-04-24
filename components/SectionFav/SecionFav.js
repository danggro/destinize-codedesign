import Link from "next/link";
import Container from "../Container";
import HeadSection from "../HeadSection";
import Arrow from "./Arrow";
import ListFav from "./ListFav";

export default function SectionFav() {
  return (
    <section className="mb-[151px]">
      <Container>
        <div className="flex items-center justify-between">
          <div>
            <HeadSection
              sect="destinasi favorit"
              title="Temukan Destinasi Favoritmu"
              first="✈️ • "
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
        <ListFav />
      </Container>
    </section>
  );
}
