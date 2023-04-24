import Bringtotop from "@/components/Bringtotop";
import SectionCTA from "@/components/CTA/SectionCTA";
import SectionDestinize from "@/components/Destinize/SectionDestinize";
import SectionFAQ from "@/components/FAQ/SectionFAQ";
import Footer from "@/components/Footer/Footer";
import SectionHero from "@/components/Hero/SectionHero";
import SectionMaps from "@/components/Maps/SectionMaps";
import NavBar from "@/components/Navigation/NavBar";
import SectionReservasi from "@/components/Reservasi/SectionReservasi";
import SectionFav from "@/components/SectionFav/SecionFav";
import SectionTesti from "@/components/Testi/SectionTesti";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Destinize | Travel Website</title>
      </Head>
      <NavBar />
      <SectionHero />
      <SectionFav />
      <SectionReservasi />
      <SectionMaps />
      <SectionDestinize />
      <SectionTesti />
      <SectionFAQ />
      <SectionCTA />
      <Footer />
      <Bringtotop />
    </>
  );
}
