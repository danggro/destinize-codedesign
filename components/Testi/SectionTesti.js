import Container from "../Container";
import HeadSection from "../HeadSection";
import CardTesti from "./CardTesti";
import CardPic1 from "@/public/testi/cover.png";
import CardPic2 from "@/public/testi/cover-1.png";
import CardPic3 from "@/public/testi/cover-2.png";

export default function SectionTesti() {
  return (
    <section className="mb-[201px]">
      <Container>
        <div className="w-10/12 mx-auto text-center mb-[87px]">
          <HeadSection
            sect="testimonial destinize"
            title="💬 • Apa Kata Mereka Tentang Kami"
          />
          <p className="w-10/12 mt-[18px] mx-auto text-lg text-center text-black-500">
            Penasaran apa saja review dari pengguna yang memakai aplikasi dan
            website Destinize buat nentuin kemana liburan mereka selanjutnya?
            Yuk cek dibawah!
          </p>
        </div>
        <div className="flex gap-[52px]">
          <CardTesti
            src={CardPic1}
            desc="Destinize membantu saya Mencari spot tempat wisata baru di Indonesia dengan Mudah"
            nama="Sandhika Galih"
            jabatan="Dosen di WPU"
            alt="1"
          />
          <CardTesti
            src={CardPic2}
            desc="Destinize membantu saya mendapatkan jodoh, tidak disangka
            bahwa jodoh saya adalah CS nya"
            nama="Syauqizaidan Khairan Khalaf"
            jabatan="Mahasiswa di WPU"
            alt="2"
          />
          <CardTesti
            src={CardPic3}
            desc="Bikini Bottom menjadi sangat ramai dikunjungi saat saya memasukkannya di Destinize"
            nama="Patrik Sesat"
            jabatan="Warga di Bikini Bottom"
            alt="3"
          />
        </div>
      </Container>
    </section>
  );
}
