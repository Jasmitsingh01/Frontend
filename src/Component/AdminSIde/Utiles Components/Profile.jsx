import React from "react";
import { FaUserAlt } from "react-icons/fa";
import Css from "../Style/Profile.module.css";
function Profile() {
  return (
    <div className={Css.profile}>
      <div>
        <FaUserAlt className={Css.icon} />
      </div>

      <div className={Css.text}>Profile</div>
    </div>
  );
}

export default Profile;
