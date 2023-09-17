import React from "react";
import { TbPigMoney } from "react-icons/tb";
import { BsCurrencyRupee } from "react-icons/bs";
import Css from "../Style/TotalIncome.module.css";
function TotalIncome() {
  return (
    <div className={Css.Main}>
      <div>
        <div className={Css.Heading}>Profit</div>
        <div className={Css.text}>Eraned Amount</div>
        <div className={Css.Amount}>
          <BsCurrencyRupee className={Css.rupee} />
          1500
        </div>
      </div>
      <div>
        <TbPigMoney className={Css.icon} />
      </div>
    </div>
  );
}

export default TotalIncome;
