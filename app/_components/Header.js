import Navigation from "@/app/_components/Navigation";
import Logo from "@/app/_components/Logo";
import Avatar from "./Avatar";
import { Suspense } from "react";
import Spinner from "./Spinner";

function Header() {
  return (
    <header className=" px-8 py-5 sticky top-0 backdrop-blur-md z-50">
      <div className="flex justify-between items-center max-w-8xl mx-auto">
        <Logo />
        <Navigation>
          <Suspense fallback={<Spinner />}>
            <Avatar />
          </Suspense>
        </Navigation>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary-50 to-transparent"></div>
    </header>
  );
}

export default Header;
