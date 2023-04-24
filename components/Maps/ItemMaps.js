export default function ItemMaps(props) {
  return (
    <li className="flex flex-shrink-0 gap-4 font-manrope max-w-[365px]">
      <div className="flex-shrink-0">{props.icon}</div>
      <div>
        <h4 className="text-black-500 text-[22px] font-extrabold">
          {props.title}
        </h4>
        <p className="text-lg font-medium text-black-400">{props.desc}</p>
      </div>
    </li>
  );
}
