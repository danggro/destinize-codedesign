import Image from "next/image";
import Hero from "@/public/Hero.png";
import Partner from "./Partner";
import Container from "../Container";

export default function SectionHero() {
  return (
    <>
      <section className="mt-11 pl-[122px] relative" id="hero">
        <div className="w-6/12 pt-7">
          <div className="font-bold py-[9px] w-fit bg-primary/20 px-6 rounded-full text-primary mb-5">
            ✈️ • Explore the woderful Indonesia!
          </div>
          <h1 className="text-black-500 -tracking-[0.04em] leading-[89px] font-extrabold text-[76px]">
            Liburan & nikmati <span className="text-primary">tempat baru</span>{" "}
            di Indonesia 🏝️
          </h1>
          <p className="w-9/12 mb-8 mt-7 text-black-300 leading-[30px]">
            Destinize membuat kamu selalu update terkait tempat liburan baru di
            Indonesia dengan mengikuti perkembangan para influencer di sosial
            media ✨
          </p>
          <div className="flex items-center gap-10">
            <button className="px-8 py-5 font-bold bg-primary text-white rounded-[10px] border border-primary hover:bg-white hover:text-primary shadow-[0px_20px_35px_0_rgba(68,117,242,0.21)]">
              Mulai Sekarang →
            </button>
            <button className="flex items-center gap-4 hover:underline ">
              <div className="rounded-full shadow-[0px_15px_20px_0_rgba(68,117,242,0.2)]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  fill="none"
                  viewBox="0 0 50 50"
                >
                  <circle
                    cx="25"
                    cy="25"
                    r="24.5"
                    fill="#fff"
                    stroke="#4475F2"
                  ></circle>
                  <path
                    fill="#4475F2"
                    d="M31.73 26.442l-10.817 6.246v-12.49l10.817 6.244z"
                  ></path>
                </svg>
              </div>
              <span className="font-bold text-[17px] text-black-400">
                Putar Demo
              </span>
            </button>
          </div>
        </div>
        <Image src={Hero} alt="" className="absolute top-0 right-[34px]" />
      </section>
      <Container>
        <Partner />
      </Container>
    </>
  );
}
