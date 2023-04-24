import Image from "next/image";

export default function CardFav(props) {
  return (
    <li className="relative rounded-[8px] overflow-hidden shadow-[0px_21px_98px_0_rgba(129,129,129,0.08)]">
      <Image src={props.src} alt="" />
      <div className="bg-white/70 absolute bottom-0 left-0 backdrop-blur-sm rounded-tr-[5px] py-2 pl-5 pr-6">
        <p className="font-semibold text-[17px]">{props.loc}</p>
        <p className="text-black-300 text-[15px]">{props.subLoc}</p>
      </div>
    </li>
  );
}
