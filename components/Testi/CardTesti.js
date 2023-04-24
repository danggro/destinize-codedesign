import Image from "next/image";
import AllStar from "./AllStar";

export default function CardTesti(props) {
  return (
    <div className="px-[50px] py-10 rounded-[5px] shadow-card border border-[#DEDEDE]">
      <Image src={props.src} alt={props.alt} className="mx-auto" />
      <div className="mt-[30px] text-center space-y-[15px]">
        <p className="font-medium text-black-300">{props.desc}</p>
        <div className="flex justify-center">
          <AllStar />
        </div>
        <p className="text-sm font-semibold text-primary">{props.nama}</p>
        <p className="text-sm font-semibold text-black-500">{props.jabatan}</p>
      </div>
    </div>
  );
}
