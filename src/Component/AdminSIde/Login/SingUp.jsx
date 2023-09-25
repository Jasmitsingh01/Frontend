import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Css from "../Style/Login.module.css";
import { useState } from "react";
import axios from "axios";
function SingUpA() {
  const [error, seterror] = useState("");
  const Naviagte = useNavigate();
  const SingUpHandelr = async (e) => {
    e.preventDefault();
    if (e.target.password.value !== e.target.cPassword.value) {
      seterror("Confrim password and Password should Be macthed");
    } else if (e.target.password.value.length < 8) {
      seterror(`Password Should have 8 Characters `);
    } else {
      seterror("");
      const response = await axios.post("https://powerful-squirrel-production.up.railway.app//admin/singup", {
        name: e.target.Name.value,
        User: e.target.UserName.value,
        email: e.target.email.value,
        Password: e.target.password.value,
      });
      if (response.data.action === "fail") {
        seterror(response.data.message);
      } else {
        localStorage.setItem("AuthToken", response.data.token);
        Naviagte("/admin");
      }
    }
  };
  return (
    <div className={Css.Main}>
      <div className={Css.MainHeading}>
        Seller <br />
        <span className={Css.span}>SING UP</span>
      </div>
      <div>{error}</div>
      <form
        className={Css.form}
        onSubmit={(e) => {
          SingUpHandelr(e);
        }}
      >
        <div className={Css.InputArea}>
          <input
            type="text"
            name="Name"
            className={Css.Input}
            placeholder="Name"
            required
          />
        </div>
        <div className={Css.InputArea}>
          <input
            type="text"
            name="UserName"
            className={Css.Input}
            placeholder="UserName"
            required
          />
        </div>
        <div className={Css.InputArea}>
          <input
            type="email"
            name="email"
            className={Css.Input}
            placeholder="Email"
            required
          />
        </div>
        <div className={Css.InputArea}>
          <input
            type="password"
            name="password"
            className={Css.Input}
            placeholder="Password"
            required
          />
        </div>
        <div className={Css.InputArea}>
          <input
            type="password"
            name="cPassword"
            className={Css.Input}
            placeholder="Confirm Password"
            required
          />
        </div>
        <div className={Css.buttonArea}>
          <button type="submit" className={Css.button}>
            SING UP
          </button>
        </div>
      </form>
      <div className={Css.link}>
        Already have an account ?<Link to={"/admin/login"}>SingIn</Link>
      </div>
      <div className={Css.link}>
        Swicth To Buyer<Link to={"/singUp"}>Buyer</Link>
      </div>
    </div>
  );
}

export default SingUpA;
