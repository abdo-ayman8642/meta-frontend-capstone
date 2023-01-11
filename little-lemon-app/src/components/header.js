import Logo from "./logo";
import SocialLinks from "./socialLinks";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header>
      <nav>
        <Logo />
        <ul className="navLinks">
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <Link to={"/reservation"}>Reservation</Link>
          </li>
          <li>
            <Link to={"/contactus"}>Contact us</Link>
          </li>
        </ul>
        <SocialLinks />
      </nav>
    </header>
  );
};
export default Header;
