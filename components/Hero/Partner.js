import Image from "next/image";
import Axon from "@/public/partner/Axon.png";
import Jetstar from "@/public/partner/Jetstar.png";
import Expedia from "@/public/partner/Expedia.png";
import Qantas from "@/public/partner/Qantas.png";
import Alitalia from "@/public/partner/Alitalia.png";

export default function Partner() {
  return (
    <div className="flex mt-[114px] mb-[153px] items-center justify-between">
      <div className="bg-white">
        <Image
          src={Axon}
          alt="Axon"
          className="mix-blend-luminosity hover:mix-blend-normal"
        />
      </div>
      <div className="bg-white">
        <Image
          src={Jetstar}
          alt="Jetstar"
          className="mix-blend-luminosity hover:mix-blend-normal"
        />
      </div>
      <div className="bg-white">
        <Image
          src={Expedia}
          alt="Expedia"
          className=" mix-blend-luminosity hover:mix-blend-normal"
        />
      </div>
      <div className="bg-white">
        <Image
          src={Qantas}
          alt="Qantas"
          className="mix-blend-luminosity hover:mix-blend-normal"
        />
      </div>
      <div className="bg-white">
        <Image
          src={Alitalia}
          alt="Alitalia"
          className="mix-blend-luminosity hover:mix-blend-normal"
        />
      </div>
    </div>
  );
}
