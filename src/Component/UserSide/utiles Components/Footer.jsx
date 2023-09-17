import React from "react";
import Css from "../Style/Footer.module.css";
function Footer() {
  return (
    <div>
      <div className={Css.footer}>
        <p>Copyright © 2023 Brandstore. Powered by Brandstore.</p>
        <ul className={Css.footer_link}>
          <li>YOuTube</li>
          <li>Facebook</li>
          <li>Instagram</li>
          <li>Twitter</li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
