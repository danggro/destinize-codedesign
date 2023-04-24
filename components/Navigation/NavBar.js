import Container from "../Container";
import NavBot from "./NavBot";
import NavLang from "./NavLang";
import NavLoc from "./NavLoc";
import NavLogo from "./NavLogo";
import NavSearch from "./NavSearch";

export default function NavBar() {
  return (
    <nav id="home">
      <Container>
        <div className="flex items-center justify-between gap-10 py-3">
          <NavLogo />
          <NavSearch />
          <NavLang />
          <NavLoc />
        </div>
      </Container>
      <div className="w-screen h-[1px] bg-black-200"></div>
      <Container>
        <NavBot />
      </Container>
    </nav>
  );
}
