import React, { useEffect } from "react";
import AddProductTable from "./AddProductTable";
import Css from '../Style/Plus.module.css'
import { useState } from "react";
import axios from "axios";
import { Navigate } from "react-router";
function PlusProduct() {

  const[ErrorImg,setImgError]=useState('');
  const[ErrorDis,setErrorDis]=useState('')
  const[Response,setResponse]=useState()
  const[Csss,setCsss]=useState("");
 const data= localStorage.getItem('AuthToken');
 
const FormDataSubmitHandler=async(e)=>{
  e.preventDefault();
  if(e.target.ProductImg.files.length<4){
    setImgError('Please select 4 Only Images ....');
  }
  else if(e.target.ProductImg.files.length>4){
    setImgError('Please select only 4 Images ....');
  }
  else if(e.target.Discription.value.length<100){
    setErrorDis('Discription is Too Short...')
  }
  else if(e.target.Discription.value.length>300){
    setErrorDis('Discription is Too long....')
  }
  else{
    setImgError('');
    setErrorDis('')
    const formData = new FormData(e.target);
    formData.append('token',data)

    
   const SendData=await axios.post('https://ecommerce-production-a1ff.up.railway.app/admin/AddProduct',formData,{
    headers:{
      'Content-Type': 'application/form-data'
    }
   })
   if(SendData.data.Response){
    setResponse(SendData.data.Response);
    setCsss(Css.sucssess);
   }
   else{
    setResponse(SendData.data.error)
    setCsss(Css.error)
    
   }
  }


}
useEffect(()=>{
  setTimeout(() => {
    setResponse('')
  }, 2000);
  })
if(!data){
  return(
    <Navigate to={'/admin/login'}/>
  )
}
else{
  return (
    <div className={Css.Main}>
      <div className={Csss}>
        {Response}
      </div>
      <div>
        <h3 className={Css.MainHeading}>Manage Products</h3>
      </div>
      <form className={Css.form}   onSubmit={(e)=>FormDataSubmitHandler(e)} encType="multipart/form-data" method="post">
        <div className={Css.row}>
        <div className={Css.InputArea}>
          <input type="text" name={"ProductName"} required placeholder="Product Name" className={Css.input}/>
        </div>
        <div className={Css.InputArea}>
          <input type="text" name={"ProductPrice"} required placeholder="Product Price" className={Css.input}/>
        </div>
        </div>
        <div className={Css.row}>
        <div className={Css.InputArea}>
          <label htmlFor={"ProductImg"}>PRODUCT IMAGE</label>
          <input type="file" name={"ProductImg"} required  className={Css.imgInput} multiple max={4}/>
          <span>{ErrorImg}</span>
        </div>
        
        <div className={Css.InputArea}>
          
          <input type="text" name={"ProductColor"} required placeholder="Product Color" className={Css.input}/>
        </div>
        </div>
       <div className={Css.row}>
       <div className={Css.InputArea}>
          
          <input type="text" name={"ProductSize"} required placeholder="Product Size" className={Css.input}/>
        </div>
        <div className={Css.InputArea}>
          <label htmlFor={"CATEGARIES"}>PRODUCT CATEGARIES</label>
          <select name="CATEGARIES" id="ProductCat" required className={Css.select}>
            <option value="#">Please Select Category...</option>
            <option value="Men">Men</option>
            <option value="Women">Women</option>
          </select>
        </div>
       </div>
       <div className={Css.Qunatity}>
       <div className={Css.InputArea}>
          <input type="text" name={"ProductQunatity"} required placeholder="Product Qunatity" className={Css.input}/>
        </div>
       </div>
        <div className={Css.textareaArea}>
        
          <textarea name="Discription" id="" cols="30" rows="10" placeholder="Product Discription" className={Css.textarea} ></textarea>
        <span>{ErrorDis}</span>
        </div>
        <div className={Css.buttonArea}>
            <button type="submit" className={Css.button}>Add Product</button>
        </div>
      </form>

      <div>
        <AddProductTable  Func={FormDataSubmitHandler}/>
      </div>
    </div>
  );
}
}

export default PlusProduct;
