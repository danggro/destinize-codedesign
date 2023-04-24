export default function HeadSection(props) {
  return (
    <>
      <span className="uppercase font-manrope font-extrabold text-lg text-primary tracking-[0.095em]">
        {props.sect}
      </span>
      <h2 className="font-manrope font-extrabold text-[48px] mt-3 leading-[50px] text-black-500">
        <span className="text-[36px]">{props.first}</span>
        {props.title}
      </h2>
    </>
  );
}
