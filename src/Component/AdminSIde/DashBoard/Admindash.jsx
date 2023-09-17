import React from "react";
import AddProduct from "./AddProduct";
import Order from "../Utiles Components/Order";
import TotalIncome from "../Utiles Components/TotalIncome";
import Profile from "../Utiles Components/Profile";
import HomeTable from "./HomeTable";
import Css from '../Style/AdminDash.module.css'
import Img from '../Images/logo/logo@2x-free-img.png'
import { Navigate, useNavigate } from "react-router";

function Admindash() {
  const Data=localStorage.getItem('AuthToken');
  const navigate=useNavigate();
  const MoveHandler=(Data)=>{
    if(Data==="add"){
   navigate('/admin/AddProduct')
  }else if(Data==="order"){
    navigate('/admin')

  }
}
if(!Data){
  return (
    <Navigate to={'/admin/login'}/>   )    
}
else{
  return (
    <div className={Css.main}>
      <div className={Css.Box}>
        <div className={Css.LogoArea}>
            <img src={Img} alt="Logo" className={Css.Logo}/>
        </div>
        <div onClick={()=>{
            MoveHandler("add")
}}>
          <AddProduct />
        </div>
        <div onClick={()=>{
          MoveHandler("order")
        }}>
          <Order />
        </div>
        <div>
          <TotalIncome />
        </div>
        <div>
          <Profile />
        </div>
      </div>
      <div><HomeTable/></div>
    </div>
  );
}
}
export default Admindash;
