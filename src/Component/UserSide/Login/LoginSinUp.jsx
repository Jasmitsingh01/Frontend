import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Css from "../Style/Login.module.css";
import axios from "axios";
function LoginSinUp() {
  const Navigate = useNavigate();
  const [Email, setEmail] = useState("");
  const [Password, setpassword] = useState("");
  const [error, seterror] = useState("");
  const LoginHandler = async (e) => {
    e.preventDefault();
    if (Password.length < 8) {
      seterror("Password Should be greater Than 8 Characters");
    } else {
      const response = await axios.post("https://ecommerce-production-a1ff.up.railway.app/user/Login", {
        email: Email,
        Password: Password,
      });

      if (response.data.action === "success") {
        localStorage.setItem("AuthUserToken", response.data.token);
        localStorage.setItem("Data", JSON.stringify(response.data.Data));

        Navigate("/");
      } else {
        seterror(response.data.message);
      }
    }
  };

  return (
    <div className={Css.Main}>
      <div className={Css.MainHeading}>SING IN</div>
      <div>{error}</div>
      <form className={Css.form} onSubmit={(e) => LoginHandler(e)}>
        <div className={Css.InputArea}>
          <input
            type="email"
            className={Css.Input}
            value={Email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="Email"
            required
          />
        </div>
        <div className={Css.InputArea}>
          <input
            type="password"
            className={Css.Input}
            value={Password}
            onChange={(e) => setpassword(e.target.value)}
            placeholder="Password"
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
        Create an account ?<Link to={"/singUp"}>SingUp</Link>
      </div>
      <div className={Css.link}>
        Swicth To Seller :<Link to={"/admin/login"}>Admin</Link>
      </div>
    </div>
  );
}

export default LoginSinUp;
