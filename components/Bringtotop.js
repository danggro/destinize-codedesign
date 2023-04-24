import { useEffect } from "react";

export default function Bringtotop() {
  useEffect(() => {
    const button = document.getElementById("but-up");
    const hero = document.getElementById("hero");
    window.onscroll = function () {
      if (window.pageYOffset > hero.offsetTop) {
        button.classList.remove("scale-0");
        button.classList.add("scale-100");
      } else {
        button.classList.add("scale-0");
        button.classList.remove("scale-100");
      }
    };
  }, []);

  const totop = function () {};

  return (
    <a
      href="#home"
      id="but-up"
      className="fixed z-50 grid font-extrabold text-center text-white transition-all scale-0 rounded-full shadow-xl hover:opacity-60 w-14 place-items-center h-14 bottom-14 right-14 bg-primary"
    >
      Up
    </a>
  );
}
