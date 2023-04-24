import Image from "next/image";
import Logo from "@/public/NavLogo.png";

export default function NavLogo() {
  return (
    <div className="flex gap-2">
      <Image src={Logo} alt="" className="h-fit" />
      <h3 className="-mt-[2px] text-lg font-bold">Destinize</h3>
    </div>
  );
}
