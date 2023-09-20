import React from "react";
import Css from "../Style/Catogaries.module.css";
import { useNavigate } from "react-router";
function Catogaries() {
  const navigate = useNavigate();
  const WomenProduct = () => {
    navigate("/women");
  };
  const MenProduct = () => {
    navigate("/men");
  };
  const AllProduct = () => {
    navigate("/store");
  };
  return (
    <div>
      <div className={Css.Catogaries}>
        <h2 className={Css.Product_Catogaries}>Products Catogaries</h2>

        <div className={Css.Catogaries_area}>
          <div className={Css.women}>
            <div className={Css.text}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,
              nihil!
            </div>
            <button className={Css.View} onClick={() => WomenProduct()}>
              View Women Products
            </button>
          </div>
          <div className={Css.men}>
            <div className={Css.text}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,
              nihil!
            </div>
            <button className={Css.View} onClick={() => MenProduct()}>
              View Men Products
            </button>
          </div>
          <div className={Css.Other}>
            <div className={Css.text}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,
              nihil!
            </div>
            <button className={Css.View} onClick={() => AllProduct()}>
              View All Products
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Catogaries;
