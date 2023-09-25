import React, { useEffect, useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { BiRupee } from "react-icons/bi";
import Css from "../Style/Cart.module.css";
import Icon from '../Images/logo/logo@2x-free-img.png'
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router";
import axios from "axios";
function Cart() {
  const[Message,setMessage]=useState('');
  const[messageCss,setmessageCss]=useState('');
  const{Product,count}=useSelector(state=>state.UpdateState);
  let Total_price = 0;
  Product.map((value, Index) => {
      Total_price+=value.Price*value.Qunatity
      if(Index===Product.length-1){
       return Total_price;
      } 
      else{
          return '';
 } }
 
 )
 const navigation=useNavigate();

 const Checkout=async()=>{
  const Details=JSON.parse(localStorage.getItem('UserDeatils'));
  console.log(Details)
  if(Details){
  const Order=await axios.post('https://powerful-squirrel-production.up.railway.app/user/Checkout',{
    Price:Total_price+500,
  })
const {amount,key,Checkout}=Order.data;
  if(Order.data.operation==="True"){
    var options = {
      key: key, 
      amount: amount, 
      currency: "INR",
      name: "Dnk Ecommerce",
      description: "Dnk Eommmerce Products",
      image: Icon,
      order_id: Checkout.id,
      handler: async(response)=>{
      const  Data= await axios.post("https://powerful-squirrel-production.up.railway.app/user/paymentVeriFication",{
        razorpay_payment_id: response.razorpay_payment_id,
        razorpay_order_id:response.razorpay_order_id,
        razorpay_signature: response.razorpay_signature,
        token:DATA,
        Product:Product,
        Address:Details.data[0].Address,
        
      })
        if(Data.data.operation==="Success"){
          setMessage(Data.data.message)
          setmessageCss(Css.SuccessMessage)
        }
        else{
          setMessage("Order Failed");
          setmessageCss(Css.ErrorMessage);
        }
       
      },
      prefill: {
          name: Details.data[0].Name,
          email: Details.data[0].email,
          contact: Details.data[0].Phone_Number
      },
      notes: {
          address: Details.data[0].Address
      },
      theme: {
          color: "#3399cc"
      }
  };
   const rzp1 = new window.Razorpay(options);
  rzp1.on('payment.failed', function (response){
          alert(response.error.description);
          setMessage("Order Failed");
          setmessageCss(Css.ErrorMessage);
});
  
      rzp1.open();
      
  
  
  }
  }
  else{
    navigation('/Data')
  }
}
useEffect(()=>{
  setTimeout(() => {
    setMessage('')
  }, 5000);
},[Message])
    const DATA=localStorage.getItem('AuthUserToken');





  

 
 
 
  const Dispacth=useDispatch();
  const INC=(index)=>{
    Dispacth({
      type:"Quantity_INC",
      payload:index
    })
  }
  const SUB=(index)=>{
    Dispacth({
      type:"Quantity_DEC",
      payload:index
    })
  }
  const REMOVE=(index)=>{
    Dispacth({
      type:"REMOVE_TO_CART",
      payload:index
    })
  }
if(DATA){
  if(Product.length>0){
  return (

    <div>
      <div><div className={messageCss}>{Message}</div></div>
    <div className={Css.Main_Cart}>
      <div className={Css.Card}>
         <div className={Css.Heading}>Cart({count})</div> 

          
           {
            Product.map((value,index)=>{
              const First = btoa(
                new Uint8Array(value.Product_Main_Image.data).reduce((data, byte) => data + String.fromCharCode(byte), '')
              )
              return(
                <div className={Css.Product} key={index}>
                <div className={Css.Product_Image_area}>
                  <img src={`data:image/png;base64,${First}`} alt="#" className={Css.Product_Image} />
                </div>
                <div className={Css.Box}>
                  <div className={Css.Product_text}>
                    <div className={Css.Product_Name}>{value.Name}</div>
                    <div className={Css.Product_Catogarie}>{value.Cat}</div>
                  </div>
                  <div className={Css.Bttons}>
                    <button type="button" className={Css.subButtn} onClick={()=>SUB(index)} >
                      -
                    </button>
                    <input type="text" className={Css.Input} value={value.Qunatity} readOnly />
                    <button type="button" className={Css.AddButtn} onClick={()=>INC(index)} >
                      +
                    </button>
                  </div>
                </div>
                <div className={Css.Buttn2}>
                  <button type="button" className={Css.button} onClick={()=>REMOVE(index)}>
                    <RiDeleteBin6Line /> Remove Item
                  </button>
                </div>
                <div className={Css.Product_Price}>
                  <BiRupee />
                  {value.Price}
                </div>
              </div>
              )
            })
           }
          
      </div>
      <div className={Css.PayRoll}>
        <div className={Css.Heading2}>The total amount of</div>
        <div className={Css.TempRuppe}>
          <div className="Text">Temporary amount</div>
          <div className="Price">
            <BiRupee />
            {Total_price}
          </div>
        </div>
        <div className={Css.Shipping_Delatis}>
          <div className="Text">Shipping</div>
          <div className="Address">New Delhi</div>
        </div>
        <div className={Css.ToTal_section}>
          <div className="Text">
            The total amount of
            <br /> (Including GST)
          </div>
          <div className="Total_Price">
            <BiRupee />
            {Total_price+500}
          </div>
        </div>
        <div className={Css.Checkout_Section}>
          <button  className={Css.Checkout} onClick={()=>Checkout()}>
            Go To Checkout
          </button>
        </div>
      </div>
    </div>
    </div>
  );
  }
  else{
    return(
      <h1> No Products.....</h1>
    )
  }
}
  else{
    return <Navigate to={'/Login'}/>
  }
}

export default Cart;
