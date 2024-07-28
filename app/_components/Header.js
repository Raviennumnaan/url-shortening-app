import Logo from "@/app/_components/Logo";
import Navbar from "@/app/_components/Navbar";

function Header() {
  return (
    <header>
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5 sm:justify-normal">
        <Logo />
        <Navbar />
      </div>
    </header>
  );
}

export default Header;
