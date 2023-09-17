import React from "react";
import Css from "../Style/About.module.css";
function About() {
  return (
    <div>
      <div className={Css.section}>
        <div className={Css.text}>
          <h2 className={Css.MainHeading}>About Us</h2>
          <p className={Css.Paragarph}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            quaerat quam, enim ipsa explicabo fugiat pariatur et! Incidunt ipsum
            deleniti eos non culpa aliquid neque fugiat quidem amet
            voluptatibus. Sit minima autem sint et aliquid praesentium .
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
