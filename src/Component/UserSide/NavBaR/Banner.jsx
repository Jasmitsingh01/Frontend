import React from "react";
import Css from "../Style/NavBaR.module.css";
import { useNavigate } from "react-router";

function Banner() {
  const navigate = useNavigate();
  const ShopNowHandler = () => {
    navigate("/store");
  };
  return (
    <div className={Css.Background_Banner}>
      <div>
        <p className={Css.Para}>Raining Offers For Hot Summer!</p>
        <button className={Css.button} onClick={() => ShopNowHandler()}>
          SHOP NOW
        </button>
      </div>
    </div>
  );
}

export default Banner;
