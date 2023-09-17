import React from "react";
import Css from "../Style/CompanyLogossection.module.css";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import image1 from "../Images/Comonpany Logo/client-logo-1.png";
import image2 from "../Images/Comonpany Logo/client-logo-2.png";
import image3 from "../Images/Comonpany Logo/client-logo-3.png";
import image4 from "../Images/Comonpany Logo/client-logo-4.png";
import image5 from "../Images/Comonpany Logo/client-logo-5.png";
function CompanyLogosection() {
  const showImages = () => {};
  return (
    <>
      <div className={Css.Company}>
        <AiFillCaretLeft
          className={Css.left}
          onClick={() => showImages("sub")}
        />
        <div className={Css.Row}>
          <div className={Css.Column}>
            <img src={image1} alt="Logo" />
          </div>
          <div className={Css.Column}>
            <img src={image2} alt="Logo" />
          </div>
          <div className={Css.Column}>
            <img src={image3} alt="Logo" />
          </div>
          <div className={Css.Column}>
            <img src={image4} alt="Logo" />
          </div>
          <div className={Css.Column}>
            <img src={image5} alt="Logo" />
          </div>
        </div>
        <AiFillCaretRight
          className={Css.right}
          onClick={() => showImages("add")}
        />
      </div>
    </>
  );
}

export default CompanyLogosection;
