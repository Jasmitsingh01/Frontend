import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Css from "../Style/Login.module.css";
import { useState } from "react";
import axios from "axios";
function SingUp() {
  const Navigate = useNavigate();
  const [Name, setname] = useState("");
  const [userName, setusername] = useState("");
  const [Email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [Cpassword, setCpassword] = useState("");
  const [error, seterror] = useState("");
  const SubmitHandler = async (e) => {
    e.preventDefault();
    if (password !== Cpassword) {
      seterror("Password And Cnfrom Password are not Same");
    } else if (
      password.length < 8 &&
      (password.includes("@") ||
        password.includes("#") ||
        password.includes("$") ||
        password.includes("&"))
    ) {
      seterror(
        `Password Should have 8 Characters And should have '@','#', '$', '&' Character in Password`
      );
    } else {
      seterror("");
      const response = await axios.post("https://ecommerce-production-c6bb.up.railway.app/user/singup", {
        name: Name,
        User: userName,
        email: Email,
        Password: password,
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
      <div className={Css.MainHeading}>SING UP</div>
      <div>{error}</div>
      <form
        className={Css.form}
        encType="multipart/form-data"
        onSubmit={(e) => {
          SubmitHandler(e);
        }}
        method="post"
      >
        <div className={Css.InputArea}>
          <input
            type="text"
            className={Css.Input}
            value={Name}
            onChange={(e) => {
              setname(e.target.value);
            }}
            placeholder="Name"
            required
          />
        </div>
        <div className={Css.InputArea}>
          <input
            type="text"
            className={Css.Input}
            value={userName}
            onChange={(e) => {
              setusername(e.target.value);
            }}
            placeholder="UserName"
            required
          />
        </div>
        <div className={Css.InputArea}>
          <input
            type="email"
            className={Css.Input}
            placeholder="Email"
            value={Email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
          />
        </div>
        <div className={Css.InputArea}>
          <input
            type="password"
            className={Css.Input}
            value={password}
            onChange={(e) => {
              setpassword(e.target.value);
            }}
            placeholder="Password"
            required
          />
        </div>
        <div className={Css.InputArea}>
          <input
            type="password"
            className={Css.Input}
            value={Cpassword}
            onChange={(e) => {
              setCpassword(e.target.value);
            }}
            placeholder="Confirm Password"
            required
          />
        </div>
        <div className={Css.buttonArea}>
          <button type="submit" className={Css.button}>
            SING UP
          </button>
        </div>
        <div className={Css.link}>
          Already have an account ?<Link to={"/login"}>SingIn</Link>
        </div>
        <div className={Css.link}>
          Swicth To Seller :<Link to={"/admin/singUp"}>Admin</Link>
        </div>
      </form>
    </div>
  );
}

export default SingUp;
