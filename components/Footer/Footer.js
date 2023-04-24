import Image from "next/image";
import Container from "../Container";
import Link from "next/link";
import ItemFooterLeft from "./ItemLeftFooter";
import Phone from "./Icon/Phone";
import Logo from "@/public/NavLogo.png";
import Mail from "./Icon/Mail";
import Loc from "./Icon/Loc";
import Print from "./Icon/Print";
import ItemRightFooter from "./ItemRightFooter";
import ItemLinkFooter from "./ItemLinkFooter";

export default function Footer() {
  return (
    <footer>
      <Container>
        <div className="flex gap-[120px]">
          <div className="max-w-[483px]">
            <div className="mb-8 space-y-4">
              <Image src={Logo} alt="Logo" className="w-8" />
              <h4 className="text-2xl font-bold text-black-500">Destinize</h4>
              <p className="text-sm leading-5 text-black-300">
                Destinize adalah website atau layanan aplikasi yang membantu
                kamu memilih atau merekomendasikan tempat yang dijuluki 'hidden
                gems' agar lebih dikenal dan ramai{" "}
                <Link
                  href={"/"}
                  className="font-bold text-primary hover:underline"
                >
                  Baca Selengkapnya
                </Link>
              </p>
            </div>
            <ul className="space-y-5">
              <ItemFooterLeft icon={<Phone />} desc="0851-5616-2840" />
              <ItemFooterLeft icon={<Mail />} desc="syaokay@gmail.com" />
              <ItemFooterLeft
                icon={<Loc />}
                desc="Ciamis, Jawa Barat, Indonesia"
              />
              <ItemFooterLeft icon={<Print />} desc="+1-212-9876543" />
            </ul>
          </div>
          <div className="flex justify-between w-full">
            <ItemRightFooter title="Tentang">
              <ItemLinkFooter href="/">Tentang Kami</ItemLinkFooter>
              <ItemLinkFooter href="/">Blog</ItemLinkFooter>
              <ItemLinkFooter href="/">Karir</ItemLinkFooter>
              <ItemLinkFooter href="/">Pekerjaan</ItemLinkFooter>
              <ItemLinkFooter href="/">Berita</ItemLinkFooter>
              <ItemLinkFooter href="/">Galeri</ItemLinkFooter>
              <ItemLinkFooter href="/">Afiliasi</ItemLinkFooter>
            </ItemRightFooter>
            <ItemRightFooter title="Support">
              <ItemLinkFooter href="/">Kontak Kami</ItemLinkFooter>
              <ItemLinkFooter href="/">Online Chat</ItemLinkFooter>
              <ItemLinkFooter href="/">Whatsapp</ItemLinkFooter>
              <ItemLinkFooter href="/">Telegram</ItemLinkFooter>
              <ItemLinkFooter href="/">Tiket</ItemLinkFooter>
              <ItemLinkFooter href="/">Call Center</ItemLinkFooter>
              <ItemLinkFooter href="/">Bantuan</ItemLinkFooter>
            </ItemRightFooter>
            <ItemRightFooter title="FAQ">
              <ItemLinkFooter href="/">Akun</ItemLinkFooter>
              <ItemLinkFooter href="/">Organisir</ItemLinkFooter>
              <ItemLinkFooter href="/">Orfer</ItemLinkFooter>
              <ItemLinkFooter href="/">Pembayaran</ItemLinkFooter>
              <ItemLinkFooter href="/">Pengembalian</ItemLinkFooter>
              <ItemLinkFooter href="/">Copyright</ItemLinkFooter>
              <ItemLinkFooter href="/">Bahasa</ItemLinkFooter>
            </ItemRightFooter>
          </div>
        </div>
        <div className="flex justify-between mb-12 mt-7">
          <p className="text-sm text-black-300">
            &copy; 2021-2022. All Rights Reserved
          </p>
          <ul className="flex justify-between gap-10">
            <ItemLinkFooter href="/">Tentang Kami</ItemLinkFooter>
            <ItemLinkFooter href="/">Kontak</ItemLinkFooter>
            <ItemLinkFooter href="/">Privacy & Policy</ItemLinkFooter>
            <ItemLinkFooter href="/">Sitemap</ItemLinkFooter>
            <ItemLinkFooter href="/">Panduan Penggunaan</ItemLinkFooter>
          </ul>
        </div>
      </Container>
    </footer>
  );
}
