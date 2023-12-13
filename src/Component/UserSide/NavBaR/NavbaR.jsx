import React, { useEffect, useState } from "react";
import Css from "../Style/NavBaR.module.css";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { ImUser } from "react-icons/im";
import {AiOutlineMenu} from "react-icons/ai"
import Img from "../Images/logo/logo1-free-img.png";
function NavbaR() {
  const [Home, setHome] = useState("");
  const [About, setAbout] = useState("");
  const [Contact, setContact] = useState("");
  const [Login, setLogin] = useState("");
  const [Cart, setCart] = useState("");
  const [Profile, setProfile] = useState("");
  const[ActiveMenu,SetActive]=useState(false);
  const Data = localStorage.getItem("AuthUserToken");

  useEffect(() => {
    return ActiveCalssHandler();
  });
const UtilHandler=()=>{
  SetActive(false);
}
  const ActiveCalssHandler = () => {
    if (window.location.pathname === "/About") {
      setHome("");
      setContact("");
      setLogin("");
      setCart("");
      setAbout(Css.color);
      setProfile("");
    } else if (window.location.pathname === "/") {
      setAbout("");

      setHome(Css.color);
      setContact("");
      setLogin("");
      setCart("");
      setProfile("");
    } else if (window.location.pathname === "/Contact") {
      setAbout("");
      setHome("");
      setContact(Css.color);
      setLogin("");
      setCart("");
      setProfile("");
    } else if (window.location.pathname === "/Login") {
      setAbout("");
      setContact("");
      setLogin(Css.color);
      setCart("");
      setHome("");
      setProfile("");
    } else if (window.location.pathname === "/Cart") {
      setAbout("");
      setContact("");
      setLogin("");
      setCart(Css.color);
      setHome("");
      setProfile("");
    } else {
      setAbout("");
      setContact("");
      setLogin("");
      setCart("");
      setHome("");
      setProfile(Css.color);
    }
  };

  return (
    <>
    <header>
      <nav className={Css.NavBar_Home}>
        <div className={Css.Logo_area}>
          <img src={Img} alt="Logo" className={Css.Logo_Image} />
        </div>
        <ul className={Css.NavLink}>
          <li id="Home" className={Home}>
            <Link to="/">Home</Link>
          </li>
          
          <li id="Contact" className={Contact}>
            <Link to="/Contact"> Contact us</Link>
          </li>
          {Data ? (
            <li id={Css.Cart} className={Profile}>
              <Link to="/Profile">
                <ImUser />
              </Link>
            </li>
          ) : (
            <li id="Login" className={Login}>
              <Link to="/Login">Login</Link>
            </li>
          )}

          <li id={Css.Cart} className={Cart}>
            <Link to="/Cart">
              {" "}
              <FaShoppingCart />
            </Link>
          </li>
        </ul>
        <div className={Css.ResponsiveMenu}>
          <AiOutlineMenu className={Css.menu} onClick={()=>SetActive(!ActiveMenu)}/>
        </div>
      </nav>
    </header>
    {
      ActiveMenu?
      <div>
   <ul className={Css.ResponsiveLink}>
          <li id="Home" className={Home} onClick={()=>UtilHandler()}>
            <Link to="/">Home</Link>
          </li>
          <li id="Contact" className={Contact} onClick={()=>UtilHandler()}>
            <Link to="/Contact"> Contact us</Link>
          </li>
          {Data ? (
            <li id={Css.Cart} className={Profile} onClick={()=>UtilHandler()}>
              <Link to="/Profile">
                <ImUser />
              </Link>
            </li>
          ) : (
            <li id="Login" className={Login} onClick={()=>UtilHandler()}>
              <Link to="/Login">Login</Link>
            </li>
          )}

          <li id={Css.Cart} className={Cart} onClick={()=>UtilHandler()}>
            <Link to="/Cart">
              {" "}
              <FaShoppingCart />
            </Link>
          </li>
        </ul>
      </div>:""
    }
    </>
  );
}

export default NavbaR;
