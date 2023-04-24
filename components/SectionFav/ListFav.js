import CardFav from "./CardFav";
import RajaAmpat from "@/public/favorit/RajaAmpat.png";
import Fanjingshan from "@/public/favorit/Fanjingshan.png";
import Vevey from "@/public/favorit/Vevey.png";
import Skadar from "@/public/favorit/Skadar.png";

export default function ListFav() {
  return (
    <ul className="flex justify-between mt-[46px]">
      <CardFav src={RajaAmpat} loc="Raja Ampat" subLoc="Bali" />
      <CardFav src={Fanjingshan} loc="Labuan Bajo" subLoc="NTT" />
      <CardFav src={Vevey} loc="Kawah Ijen" subLoc="Jawa Timur" />
      <CardFav src={Skadar} loc="Bromo" subLoc="Jawa Timur" />
    </ul>
  );
}
