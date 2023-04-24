import { useState } from "react";
import Arrow from "./Arrow";

export default function ItemFAQ(props) {
  const [down, setDown] = useState(false);
  return (
    <li
      className={`overflow-hidden relative  transition-all border border-[#EBEBEB] ${
        down ? "bg-[#F6F6F6] pb-[256px]" : "bg-white"
      }`}
    >
      {down && (
        <div className="z-50  w-[3px] h-[69px] absolute bg-primary top-0 left-0"></div>
      )}
      <button
        className={`flex items-center transition-all justify-between w-full px-7 py-[23px] ${
          down ? "bg-[#F6F6F6]" : "bg-white"
        }`}
        onClick={() => {
          setDown(!down);
        }}
      >
        <h3
          className={`font-extrabold  ${
            down ? "text-primary" : "text-black-500"
          }`}
        >
          {props.question}
        </h3>
        <div
          className={`rounded-full border transition-all shadow-[0px_2px_4px_0_rgba(0,0,0,0.1)] ${
            down
              ? "border-primary bg-primary text-white -rotate-90"
              : "border-[#d3d3d3] bg-white text-black-300"
          }`}
        >
          <Arrow />
        </div>
      </button>
      <div className="overflow-hidden">
        <p
          className={`absolute pl-7 transition-all  font-montserrat pr-[132px] text-justify ${
            down ? "top-20 z-50 " : "-top-full -z-50"
          }`}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book. It has survived not
          only five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. Lorem Ipsum is simply dummy text of
          the printing and typesetting industry. Lorem Ipsum has been the
          industry&apos;s standard dummy text ever since the 1500s, when an
          unknown printer took a galley of type and scrambled it to make a type
          specimen book. It has survived not only five centuries, but also the
          leap into electronic typesetting, remaining essentially unchanged.
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever since the 1500s, wh
        </p>
      </div>
    </li>
  );
}
