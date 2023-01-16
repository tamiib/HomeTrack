import logo from "@assets/logo.png";

import Link from "next/link";
import Image from "next/image";
import Navigation from "../Navigation/Navigation";

const Header = ({ activeTab }) => {
  return (
    <header>
      <nav>
        <Link href="/">
          <Image
            width="162.76px"
            height="26.61px"
            src={logo}
            alt="HomeTrack Logo"
          />
        </Link>
        <Navigation activeTab={activeTab}/>
      </nav>
    </header>
  );
};

export default Header;
