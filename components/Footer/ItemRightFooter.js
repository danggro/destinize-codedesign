export default function ItemRightFooter(props) {
  return (
    <div>
      <h5 className="text-lg font-bold text-black-500">{props.title}</h5>
      <ul className="mt-6 space-y-3">{props.children}</ul>
    </div>
  );
}
