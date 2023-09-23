import React, { useState } from "react";
import Css from "../../UserSide/Style/Profile.module.css";
import Img from "../Images/women-fashion-free-img.jpg";
import { Navigate, useNavigate } from "react-router";
import { useEffect } from "react";
import axios from "axios";

function AdminProfile() {
  const [User, setuser] = useState({
    Name: "",
    email: "",
  });
  const [error, setError] = useState("");
  const Datas = localStorage.getItem("AuthToken");
  useEffect(() => {
    const Data = async () => {
      const response = await axios.post("https://ecommerce-production-a1ff.up.railway.app/admin/user", {
        token: Datas,
      });
      if (response.data.opteration === "Success") {
        setuser({
          Name: response.data.Name,
          email: response.data.email,
        });
        setError("");
      } else {
        setuser({
          Name: "",
          email: "",
        });
        setError(response.data.message);
      }
    };

    Data();
  }, [Datas]);
  const NaviagteS = useNavigate();
  if (Datas) {
    const LogoutUser = () => {
      localStorage.clear();
      NaviagteS("/admin/Login");
    };
    if (User.Name !== "" && User.email !== "") {
      return (
        <div className={Css.container}>
          <h1>My Profile</h1>
          <img src={Img} alt="ProfilePicture" className={Css.profilepicture} />
          <div className={Css.profileinfo}>
            <h2>{User.Name}</h2>
            <p>Email:{User.email}</p>
          </div>
          <button className={Css.Lbutton} onClick={() => LogoutUser()}>
            Logout
          </button>
        </div>
      );
    } else {
      return (
        <div style={{ fontSize: "48px", textAlign: "center" }}>{error}</div>
      );
    }
  } else {
    return <Navigate to={"/admin/Login"} />;
  }
}

export default AdminProfile;
