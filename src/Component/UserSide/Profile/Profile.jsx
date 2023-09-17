import React from "react";
import Css from "../Style/Profile.module.css";
import Img from "../Images/women-fashion-free-img.jpg";
import { Navigate, useNavigate } from "react-router";
function Profile() {
  const Data = localStorage.getItem("AuthUserToken");

  const NaviagteS = useNavigate();

  if (Data) {
    const USER = JSON.parse(localStorage.getItem("Data"));
    const LogoutUser = () => {
      localStorage.clear();
      NaviagteS("/Login");
    };
    return (
      <div className={Css.container}>
        <h1>My Profile</h1>
        <img src={Img} alt="ProfilePicture" className={Css.profilepicture} />
        <div className={Css.profileinfo}>
          <h2>{USER.Name}</h2>
          <p>Email:{USER.email}</p>
        </div>
        <button className={Css.Lbutton} onClick={() => LogoutUser()}>
          Logout
        </button>
      </div>
    );
  } else {
    return <Navigate to={"/Login"} />;
  }
}
export default Profile;
