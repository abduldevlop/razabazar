import { useState } from "react";
import { assets } from "../../assets/assets";
import { links } from "../../constants";
import "./NavBar.css";
import { Link, useLocation, useParams } from "react-router-dom";
const NavBar = () => {
  const [menu, setMenu] = useState("");
  const location = useLocation();

  return (
    <nav className="nav-bar">
      <Link to={"/"}>
        <img src={assets.logo} alt="" className="logo" />
      </Link>
      <ul className="nav-bar-menu">
        {links.map((link) => (
          <Link
            to={link.href}
            key={link.id}
            className={location.pathname === link.href ? "avtive" : ""}
          >
            {link.title}
          </Link>
        ))}
      </ul>
      <div className="nav-right">
        <img src={assets.search_icon} alt="search" />
        <div className="nav-cart">
          <Link to={"/card"}>
            <img src={assets.basket_icon} alt="" />
            <div className="dot"></div>
          </Link>
        </div>
        <button className="sing-in">Sing in</button>
      </div>
    </nav>
  );
};

export default NavBar;
