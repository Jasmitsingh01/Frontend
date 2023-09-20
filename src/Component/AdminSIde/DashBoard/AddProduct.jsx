import React from "react";
import { FaPlusCircle } from "react-icons/fa";
import Css from "../Style/AddProduct.module.css";
function AddProduct(props) {
  return (
    <div className={Css.Row}>
      <div>
        <div className={Css.Heading}>
          <p>Add Product</p>
        </div>

        <div>
          <p className={Css.Ptext}>Total Number Of Product</p>
          <p className={Css.text}>{props.Total}</p>
        </div>
      </div>
      <div>
        <FaPlusCircle className={Css.icon} />
      </div>
    </div>
  );
}

export default AddProduct;
