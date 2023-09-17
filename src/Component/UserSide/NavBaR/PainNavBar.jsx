import React, { useEffect, useState } from "react";
import Css from "../Style/NavBaR.module.css";
import Css1 from "../Style/PainNavBar.module.css";
import { Link } from "react-router-dom";
import Img from "../Images/logo/logo@2x-free-img.png";

function PainNavBar() {
  const [Home, setHome] = useState("");
  const [About, setAbout] = useState("");
  const [Contact, setContact] = useState("");
  const [Login, setLogin] = useState("");
  const [Cart, setCart] = useState("");

  useEffect(() => {
    return ActiveCalssHandler();
  });
  const ActiveCalssHandler = (A) => {
    if (window.location.pathname === "/Home") {
      setHome(Css1.color);
      setContact("");
      setLogin("");
      setCart("");
      setAbout("");
    } else if (window.location.pathname === "/men") {
      setHome("");
      setContact("");
      setLogin("");
      setCart("");
      setAbout(Css1.color);
    } else if (window.location.pathname === "/women") {
      setAbout("");
      setHome("");
      setContact(Css1.color);
      setLogin("");
      setCart("");
    } else if (window.location.pathname === "/store") {
      setAbout("");
      setContact("");
      setLogin(Css1.color);
      setCart("");
      setHome("");
    } else if (window.location.pathname === "/Cart") {
      setAbout("");
      setHome("");
      setContact("");
      setLogin("");
      setCart(Css1.color);
    } else {
      setAbout("");
      setHome("");
      setContact("");
      setLogin("");
      setCart("");
    }
  };

  return (
    <nav className={Css1.NavBar_Home}>
      <div className={Css.Logo_area}>
        <img src={Img} alt="Logo" className={Css1.Logo_Image} />
      </div>
      <ul className={Css1.NavLink}>
        <li
          id="Home"
          className={Home}
          onClick={() => ActiveCalssHandler("Home")}
        >
          <Link to="/">Home</Link>
        </li>
        <li
          id="About"
          className={About}
          onClick={() => ActiveCalssHandler("About")}
        >
          <Link to="/men">Men</Link>
        </li>
        <li
          id="Contact"
          className={Contact}
          onClick={() => ActiveCalssHandler("Contact")}
        >
          <Link to="/women"> Women</Link>
        </li>
        <li
          id="Login"
          className={Login}
          onClick={() => ActiveCalssHandler("Login")}
        >
          <Link to="/store">Store</Link>
        </li>
        <li
          id="Cart"
          className={Cart}
          onClick={() => ActiveCalssHandler("Cart")}
        >
          <Link to="/Cart">Cart</Link>
        </li>
      </ul>
    </nav>
  );
}

export default PainNavBar;
