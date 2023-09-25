import React, { useState,useEffect } from "react";
import Css from "../Style/ProductDeatils.module.css";
import T from "../Images/sports-shoe1-300x300.jpg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {AiOutlineLeft,AiOutlineRight} from 'react-icons/ai'
import axios from "axios";
import { useNavigate, useParams } from "react-router";
import { useDispatch } from "react-redux";
function ProductDetails() {
  const{id}=useParams();
  const[Data,setData]=useState('');

  

  const Dispacth=useDispatch();
  const navigate=useNavigate();
    const[error,seterror]=useState('');
    const[Index,setIndex]=useState(0);
    const BUYPRODUCT=()=>{
      
      
        Dispacth({
          type:"ADD_TO_CART",
          payload:Data,})
        navigate('/Data');
      
      
    }
   const ADDTOCART=()=>{
    Dispacth({
      type:"ADD_TO_CART",
      payload:Data,})
   }
    
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  


useEffect(() => {

  const Data=async()=>{
    const Response= await axios.get(`https://powerful-squirrel-production.up.railway.app/user/MainProduct/${id}`);
    const [Product]=Response.data.data;
    if(Response.data.operation==="Success"){
            setData(Product)
        }
     else{
        setData('');
        seterror("Something went wrong")
     }
  }
  Data();
},[id]);
if(Data){

const First = btoa(
  new Uint8Array(Data.Product_Main_Image.data).reduce((data, byte) => data + String.fromCharCode(byte), '')
)
const Second = btoa(
  new Uint8Array(Data.Product_1_Image.data).reduce((data, byte) => data + String.fromCharCode(byte), '')
)
const Third = btoa(
  new Uint8Array(Data.Product_2_Image.data).reduce((data, byte) => data + String.fromCharCode(byte), '')
)
const Fourth = btoa(
  new Uint8Array(Data.Product_3_Image.data).reduce((data, byte) => data + String.fromCharCode(byte), '')
)
  const Images=[
    {
      src:First 
    }
,{
    src:Second
},{
    src:Third
},
{
    src:Fourth
}]
const LeftHandler=()=>{
  if(Index>0 && Index<=Images.length-1){
      setIndex(Index-1);
  
  }
  

  }
  const RightHandler=()=>{
    if(Index>=0 && Index<Images.length-1){
       setIndex(Index+1)
       
    }
    
      

  }
  return (
    <div className={Css.Main}>
      <div>
        <div className={Css.ImagesSection}>
        <span onClick={()=>LeftHandler()} className={Css.LeftButton}><AiOutlineLeft className={Css.iCon}/></span>

          <img src={`data:image/png;base64,${Images[Index].src}`} alt="Product" className={Css.MainImage} />
          <span onClick={()=>RightHandler()} className={Css.RightButton}><AiOutlineRight className={Css.iCon}/></span>
          <div className={Css.gallery}>
           {Images.map((value,items)=>{
           
           return(
             
            <div className={Css.ImageArea} key={items}>
              <img src={`data:image/png;base64,${value.src}`} alt="P1" className={Css.Image} onClick={()=>{setIndex(items)} } />
            </div>
           )
           })} 
           
          </div>
          <div className={Css.ProductPrice}>${Data.Product_Price}</div>

          <div className={Css.ProductButtnImg}>
            <button onClick={()=>ADDTOCART()}>Add To Cart</button>
            <button onClick={()=>BUYPRODUCT()}>Buy Now</button>
          </div>
        </div>
        <div className={Css.textSection}>
          <div className={Css.ProductName}>{Data.Product_Name}</div>
          <div className={Css.ProductPrice}>Price : ${Data.Product_Price}</div>
          
          <div className={Css.ProductDiscriptionSection}>
            <div className={Css.ProductDisHead}>Product Description</div>
            <p>
              {Data.Product_Discription}
            </p>
          </div>
          <div className={Css.ProductButtn}>
            <button onClick={()=>ADDTOCART()}>Add To Cart</button>
            <button onClick={()=>BUYPRODUCT()}>Buy Now</button>
          </div>
          <div className={Css.ProductDealtis}>
            <div>Product Deatils</div>
            <div className={Css.Productlist}>
              <ul>
                <li> Price : ${Data.Product_Price}</li>
                <li> Color :{Data.Product_Color} </li>
                <li> Size :{Data.Product_Size} </li>
                <li> Catogery :{Data.Product_Catogaries}</li>
              </ul>
            </div>
          </div>
        </div>

        <div className={Css.SimilarProduct}>
          <h4 className={Css.SimilarHeading}>Similar Products</h4>
          <Carousel responsive={responsive}>
            <div className={Css.Product}>
                <div className={Css.ProducT_Image_area}>
                    <img src={T} alt="product" className={Css.Product_Image}/>
                </div>
                <div>
 
                    <p className={Css.Product_text}>Product Name</p>
                    <p className={Css.Product_text}>Product  Price</p>
                    <p className={Css.Product_text}>Product Catogeary</p>
                </div>
                <button  className={Css.addToCart}>Add To Cart</button>
            </div>
            <div className={Css.Product}>
                <div className={Css.ProducT_Image_area}>
                    <img src={T} alt="product" className={Css.Product_Image}/>
                </div>
                <div>
 
                    <p className={Css.Product_text}>Product Name</p>
                    <p className={Css.Product_text}>Product  Price</p>
                    <p className={Css.Product_text}>Product Catogeary</p>
                </div>
                <button type="button" className={Css.addToCart}>Add To Cart</button>
            </div>
        
            <div className={Css.Product}>
                <div className={Css.ProducT_Image_area}>
                    <img src={T} alt="product" className={Css.Product_Image}/>
                </div>
                <div>
 
                    <p className={Css.Product_text}>Product Name</p>
                    <p className={Css.Product_text}>Product  Price</p>
                    <p className={Css.Product_text}>Product Catogeary</p>
                </div>
                <button className={Css.addToCart} >Add To Cart</button>
            </div>
        
            <div className={Css.Product}>
                <div className={Css.ProducT_Image_area}>
                    <img src={T} alt="product" className={Css.Product_Image}/>
                </div>
                <div>
 
                    <p className={Css.Product_text}>Product Name</p>
                    <p className={Css.Product_text}>Product  Price</p>
                    <p className={Css.Product_text}>Product Catogeary</p>
                </div>
                <button  className={Css.addToCart}>Add To Cart</button>
            </div>
        
            <div className={Css.Product}>
                <div className={Css.ProducT_Image_area}>
                    <img src={T} alt="product" className={Css.Product_Image}/>
                </div>
                <div>
 
                    <p className={Css.Product_text}>Product Name</p>
                    <p className={Css.Product_text}>Product  Price</p>
                    <p className={Css.Product_text}>Product Catogeary</p>
                </div>
                <button  className={Css.addToCart}>Add To Cart</button>
            </div>
        

        
          </Carousel>
          
        </div>
      </div>
    </div>
  );
}
else{
  return(
    <div>
      <h1>{error}</h1>
    </div>
  )
}
}

export default ProductDetails;
