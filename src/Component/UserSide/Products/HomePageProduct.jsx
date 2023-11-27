import React, { useEffect, useState } from 'react';
import Css from '../Style/HomePageProduct.module.css';
import { useNavigate } from 'react-router';
import axios from 'axios';
import { useDispatch } from 'react-redux';
function HomePageProduct() {
  const[Data,setData]=useState([]);
  const navigate=useNavigate();
  const Dispacth=useDispatch()
  const RedirectTO=(TO,Data=null)=>{
    if(TO==="AddToCart"){
      Dispacth({
        type:"ADD_TO_CART",
        payload:Data,})
    }
    else{
    navigate(`/Product/${Data}`);
    }

  }

useEffect(()=>{
  const Data=async()=>{
  const response=await axios.get('https://my-web-qp94.onrender.com/user/HomeProdut');
 if(response.data.operation==="Success"){
setData(response.data.Data)
}
  }
  Data();
},[])
  return (
    <>
          <section className={Css.Freautres_Products}>
        <h2 className={Css.Main_heading_FP}>Hot Products</h2>
        <div className={Css.Products_area_FP}>
        {
          Data.map((value,Index)=>{
            const Convert = btoa(
              new Uint8Array(value.Product_Main_Image.data).reduce((data, byte) => data + String.fromCharCode(byte), '')
          )
            return(
              <div key={Index}>

        <div className={Css.Product_Col} onClick={()=>RedirectTO("MainProd",value.id)}>
            <div className={Css.ProducT_Image_area}>
              <img
                src={`data:image/png;base64,${Convert}`}
                alt="Product "
                className={Css.Product_Image}
              />
            </div>
            <div className={Css.Product_text}>
              <p>{value.Product_Name}</p>
              <p>{value.Product_Catogaries}</p>
              <p>{value.Product_Price}</p>
            </div>
            
          </div>
        <div className="Product_button">
        <button  className={Css.addToCart} onClick={()=>{RedirectTO("AddToCart",value)}}>
                Add To Cart
              </button>
            </div>
        </div>
            )

          })
        }
        
          
          
          </div>
      
      </section>

    </>
  )
}

export default HomePageProduct;