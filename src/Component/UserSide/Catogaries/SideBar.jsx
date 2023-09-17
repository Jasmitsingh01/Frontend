import React from "react";
import Img from "../Images/sports-shoe1-300x300.jpg";
import { AiOutlineStar } from "react-icons/ai";
import Css from "../Style/SideBar.module.css";
import { useDispatch } from "react-redux";

function SideBar() {
  const dispacth = useDispatch();

  const SearchHandler = (Data) => {
    dispacth({
      type: "Search_Name",
      payload: Data,
    });
  };

  const ValueHandler = (Data) => {
    dispacth({
      type: "Search_Price",
      payload: Data,
    });
  };
  return (
    <div className={Css.main}>
      <div className={Css.SearchSection}>
        <input
          typeof="text"
          placeholder="Search Product..."
          className={Css.Input}
          onChange={(e) => SearchHandler(e.target.value)}
        />
      </div>
      <div className={Css.FliterSection}>
        <h3 className={Css.FliterSectionH}>Filter by Price</h3>
        <div className={Css.RangeFilter}>
          <input
            type="range"
            min={0}
            max={20000}
            step={10}
            className={Css.Range}
            onChange={(e) => ValueHandler(e.target.value)}
          />
        </div>
      </div>
      <div className={Css.CategoriesSection}>
        <h3 className={Css.CategoriesHeading}>Categories</h3>
        <div className={Css.product}>
          <div className={Css.productH}>Accessories</div>
          <div className={Css.productCount}>{`(7)`}</div>
        </div>
        <div className={Css.product}>
          <div className={Css.productH}>Men</div>
          <div className={Css.productCount}>{`(14)`}</div>
        </div>
        <div className={Css.product}>
          <div className={Css.productH}>Women</div>
          <div className={Css.productCount}>{`(17)`}</div>
        </div>
      </div>
      <div className={Css.BestSeller}>
        <h3 className={Css.BestSellerH}>Our Best Sellers</h3>
        <div className={Css.BestSellerSection}>
          <div className={Css.BestSellerImgSection}>
            <img src={Img} alt="productImage" className={Css.BestSellerImg} />
          </div>
          <div className={Css.BestSellerText}>
            <div className={Css.BestSellerPH}>DNK Yellow shoe</div>
            <div className={Css.BestSellerPR}>
              <AiOutlineStar />
              <AiOutlineStar />
              <AiOutlineStar />
              <AiOutlineStar />
              <AiOutlineStar />
            </div>
            <div className={Css.BestSellerPP}>$120</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
