import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Css from "../Style/Login.module.css";
import axios from "axios";
function Login() {
  const Naviagte = useNavigate();
  const [error, seterror] = useState("");
  const LoginHandler = async (e) => {
    e.preventDefault();
    if (e.target.Password.value.length < 8) {
      seterror("Password Should Have 8 characters");
    } else {
      seterror("");
      const response = await axios.post("https://powerful-squirrel-production.up.railway.app//admin/login", {
        email: e.target.email.value,
        Password: e.target.Password.value,
      });
      if (response.data.action === "success") {
        localStorage.setItem("AuthToken", response.data.token);
        Naviagte("/admin");
      } else {
        seterror(response.data.message);
      }
    }
  };
  return (
    <div className={Css.Main}>
      <div className={Css.MainHeading}>
        <p>
          Seller <br />
          <span className={Css.span}> Sing In </span>{" "}
        </p>
      </div>

      <div>{error}</div>
      <form
        className={Css.form}
        onSubmit={(e) => {
          LoginHandler(e);
        }}
      >
        <div className={Css.InputArea}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className={Css.Input}
            required
          />
        </div>
        <div className={Css.InputArea}>
          <input
            type="password"
            name="Password"
            placeholder="Password"
            className={Css.Input}
            required
          />
        </div>
        <div className={Css.buttonArea}>
          <button type="submit" className={Css.button}>
            SING IN
          </button>
        </div>
      </form>
      <div className={Css.link}>
        Create an account ?<Link to={"/admin/singUp"}>SingUp</Link>
      </div>
      <div className={Css.link}>
        Swicth To Buyer<Link to={"/login"}>Buyer</Link>
      </div>
    </div>
  );
}

export default Login;
