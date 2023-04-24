import Link from "next/link";
import Container from "../Container";
import HeadSection from "../HeadSection";
import ItemFAQ from "./ItemFAQ";
import Arrow from "../Destinize/Arrow";

export default function SectionFAQ() {
  return (
    <section className="mb-[201px]">
      <Container>
        <div className="flex items-center justify-between">
          <div>
            <HeadSection
              sect="FREQUENTLY ASKED QUESTION"
              title="Pertanyaan yang Sering Diajukan"
              first="🤔• "
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
        <ul className="mt-[88px]  shadow-card">
          <ItemFAQ question="Kenapa ya pembayarnku gagal banh?😁" />
          <ItemFAQ question="Apakah rehan wangsaff adalah CEO dari destinize?😅😅😅" />
          <ItemFAQ question="Kenapa harus memilih Destinize?" />
          <ItemFAQ question="Afa iyah bang? gapeduli 👆🏻😅" />
          <ItemFAQ question="Apa rekomendasi tempat buat orang yang jomblo? 😥" />
        </ul>
      </Container>
    </section>
  );
}
