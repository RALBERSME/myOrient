import { useState } from "react";
import "./Header.css";
import { Link } from "react-scroll";
import HamburgerIcon from "../../../assets/hamburger.png";
import Logo from "../../../assets/logo.png";
const Header = () => {
  const mobile = window.innerWidth <= 768 ? true : false;

  const [menuOpened, setMenuOpened] = useState(false);
  return (
    <div className="header">
      <img className="logo" src={Logo} alt="logo"></img>
      {menuOpened === false && mobile === true ? (
        <div onClick={() => setMenuOpened(true)}>
          <img
            style={{ widht: "1.5rem", height: "1.5rem" }}
            src={HamburgerIcon}
            alt=""
          />
        </div>
      ) : (
        <ul className="header-menu">
          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              to="Home"
              spy={true}
              smooth={true}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              to="Programs"
              spy={true}
              smooth={true}
            >
              Itinerary
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              onClick={() => setMenuOpened(false)}
              to="Reasons"
              spy={true}
              smooth={true}
            >
              Our strength & Crew
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              onClick={() => setMenuOpened(false)}
              to="plans"
              spy={true}
              smooth={true}
            >
              Tickets
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              to="Testimonials"
              spy={true}
              smooth={true}
            >
              Travel Reports
            </Link>
          </li>
          {menuOpened === true && mobile === true && (
            <li onClick={() => setMenuOpened(false)}>close</li>
          )}
        </ul>
      )}
    </div>
  );
};

export default Header;
