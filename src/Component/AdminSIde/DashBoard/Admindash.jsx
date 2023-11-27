import React, { useEffect, useState } from "react";
import AddProduct from "./AddProduct";
import Order from "../Utiles Components/Order";
import TotalIncome from "../Utiles Components/TotalIncome";
import Profile from "../Utiles Components/Profile";
import HomeTable from "./HomeTable";
import Css from '../Style/AdminDash.module.css'
import Img from '../Images/logo/logo@2x-free-img.png'
import { Navigate, useNavigate } from "react-router";
import axios from "axios";
function Admindash() {
  const [Val,setval]=useState({
    Product:0,
    Order:0,
    Profit:0,
  });
  const Data=localStorage.getItem('AuthToken');
  const navigate=useNavigate();
  const MoveHandler=(Data)=>{
    if(Data==="add"){
   navigate('/admin/AddProduct')
  }else {
    navigate('/admin/Profile')

  }
}
useEffect(()=>{
const data=async()=>{
  const Values= await axios.get("https://my-web-qp94.onrender.com/admin/AllValues");
  if(Values.data.operation==="Success"){
    setval({
      Product:Values.data.Total_Product,
      Order:Values.data.Total_Orders,
      Profit:Values.data.Total_Profit,
    })
  }
  else{
    setval({
      Product:0,
      Order:0,
      Profit:0,
    })
  }
    
}
data()
},[]);
if(!Data){
  return (
    <Navigate to={'/admin/login'}/>   )    
}
else{
  return (
    <>
    <div className={Css.main}>
      <div className={Css.Box}>
        <div className={Css.LogoArea}>
            <img src={Img} alt="Logo" className={Css.Logo}/>
        </div>
          
        <div onClick={()=>{
            MoveHandler("add")
}}>
          <AddProduct Total={Val.Product}/>
        </div>
        <div >
          <Order  Total={Val.Order}/>
        </div>
        <div>
          <TotalIncome Total={Val.Profit}/>
        </div>
        <div onClick={()=>{
          MoveHandler("PRoFile")
        }}>
          <Profile />
        </div>
      </div>
      <div><HomeTable/></div>
    </div>
    <div className={Css.Responsive}>
      <p>Please use laptop or Desktop For Better Experience</p>
    </div>
    </>
  );
}
}
export default Admindash;
