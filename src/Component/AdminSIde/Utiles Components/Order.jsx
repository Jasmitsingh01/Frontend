import React from "react";
import { FaBoxOpen } from "react-icons/fa";
import Css from "../Style/Order.module.css";
function Order() {
  return (
    <div className={Css.Order}>
      <div>
        <div className={Css.Heading}>Orders</div>

        <div className={Css.Text}>Total Number Of Orders</div>
        <div className={Css.Number}>150000</div>
      </div>
      <div>
        <FaBoxOpen className={Css.icon} />
      </div>
    </div>
  );
}

export default Order;
