export default function ItemReservasi(props) {
  return (
    <li className="flex gap-[23px] ">
      <div className="w-[51px] h-[51px] rounded-[13px] bg-[#EFE0B4] grid place-items-center flex-shrink-0 text-xl">
        {props.icon}
      </div>
      <div>
        <h4 className="-mt-2 text-lg font-bold text-black-400">
          {props.title}
        </h4>
        <p className="mt-1 text-base text-black-400">{props.desc}</p>
      </div>
    </li>
  );
}
