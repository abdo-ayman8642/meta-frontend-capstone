import "./App.css";
import logo from "./assets/6866595.png";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

function App() {
  return (
    <main>
      <header>
        <nav>
          <div className="restName">
            <span>
              Little Lemon
              <img src={logo} alt="logo" className="logo" />
            </span>
            <span>Restaurant</span>
          </div>
          <ul className="navLinks">
            <li>About</li>
            <li>Reservation</li>
            <li>Contact us</li>
          </ul>
          <div className="socialLinks">
            <ul>
              <li>
                <FaFacebookF />
              </li>
              <li>
                <FaTwitter />
              </li>
              <li>
                <FaInstagram />
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </main>
  );
}

export default App;
