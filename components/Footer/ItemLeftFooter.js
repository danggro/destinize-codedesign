export default function ItemFooterLeft(props) {
  return (
    <li className="flex gap-2">
      {props.icon}
      <p className="text-sm text-black-300">{props.desc}</p>
    </li>
  );
}
