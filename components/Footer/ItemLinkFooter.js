import Link from "next/link";

export default function ItemLinkFooter(props) {
  return (
    <li>
      <Link
        href={props.href}
        className="text-sm text-black-300 hover:underline "
      >
        {props.children}
      </Link>
    </li>
  );
}
