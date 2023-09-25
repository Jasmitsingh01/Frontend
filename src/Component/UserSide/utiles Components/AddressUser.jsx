import React, { useCallback, useEffect, useState } from "react";
import Css from "../Style/AddressUser.module.css";
import axios from "axios";
import { Navigate, useNavigate } from "react-router";
function AddressUser() {
  const navigate = useNavigate();
  const [DeatilsToken, setDetilsToken] = useState("");
  const Token = localStorage.getItem("AuthUserToken");
  useEffect(() => {
    
    
    const Data = async () => {
      const response = await axios.get(
        `https://powerful-squirrel-production.up.railway.app//user/GetDetalis/${Token}`
      );
      if (response.data.operation === "Sucess") {
        const Data = JSON.stringify(response.data.data);
        localStorage.setItem("UserDeatils", Data);
        const Details = localStorage.getItem("UserDeatils");
        setDetilsToken(Details)
      } 
    };
    if(Token){
    Data();
    }
  }, [Token]);

  const Move=useCallback(()=>{
        navigate('/Cart')
        console.log('Aa')
  },[navigate])
 
  const SaveDetails = async (e) => {
    e.preventDefault();
    const Address =
      e.target.street.value +
      " " +
      e.target.Address.value +
      " " +
      e.target.Locality.value +
      " " +
      e.target.PinCode.value;
    const response = await axios.post("https://powerful-squirrel-production.up.railway.app//user/SaveData", {
      token: Token,
      Phone: e.target.Phone.value,
      Address: Address,
    });
    if (response.data.operation === "Success") {
      const Data=JSON.parse(localStorage.getItem('Data'));
      Data["Address"]=Address;
      Data["Phone_Number"]=e.target.Phone.value;
      
       const values=JSON.stringify({data:[Data]});
      
      localStorage.setItem("UserDeatils",values);
      navigate("/Cart");
    }
  };
  if (Token) {
    
    if (DeatilsToken) {
      return <Navigate to={"/Cart"} />;
    } else {
      return (
        <div>
          <div className={Css.Main}>
            <div className={Css.Heading}>
              <h1>Delivery Details</h1>
            </div>
            <form
              onSubmit={(e) => SaveDetails(e)}
              method="post"
              encType="multipart/form-data"
              className={Css.ForM}
            >
              <div className={Css.InputGroup}>
                <input
                  type="text"
                  name="Name"
                  placeholder="Name"
                  className={Css.input}
                  required
                />
                <input
                  type="text"
                  name="Phone"
                  placeholder="Phone Number"
                  className={Css.input}
                  maxLength={12}
                  required
                />
              </div>
              <div className={Css.InputGroup}>
                <input
                  type="text"
                  name="street"
                  placeholder="street No"
                  className={Css.input}
                  required
                />
                <input
                  type="text"
                  name="Address"
                  placeholder="Full Address"
                  className={Css.input}
                  required
                />
              </div>
              <div className={Css.InputGroup}>
                <select name="Locality" className={Css.input} required>
                  <option value="#">seleect your state...</option>
                  <option value="Andhra Pradesh">Andhra Pradesh</option>
                  <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                  <option value="Assam">Assam</option>
                  <option value="Bihar">Bihar</option>
                  <option value="Chhattisgarh">Chhattisgarh</option>
                  <option value="Goa">Goa</option>
                  <option value="Gujarat">Gujarat</option>
                  <option value="Haryana">Haryana </option>
                  <option value="Himachal Pradesh">Himachal Pradesh </option>
                  <option value="Jharkhand">Jharkhand</option>
                  <option value="Karnataka">Karnataka </option>
                  <option value="Kerala">Kerala</option>
                  <option value="Madhya Pradesh">Madhya Pradesh</option>
                  <option value="Maharashtra">Maharashtra</option>
                  <option value="Manipur">Manipur</option>
                  <option value="Meghalaya">Meghalaya</option>
                  <option value="Mizoram">Mizoram</option>
                  <option value="Nagaland">Nagaland </option>
                  <option value="Odisha">Odisha </option>
                  <option value="Punjab">Punjab</option>
                  <option value="Rajasthan">Rajasthan </option>
                  <option value="Sikkim">Sikkim</option>
                  <option value="Tamil Nadu">Tamil Nadu</option>
                  <option value="Telangana">Telangana</option>
                  <option value="Uttarakhand">Uttarakhand</option>
                  <option value="Uttar Pradesh">Uttar Pradesh</option>
                  <option value="Tripura">Tripura</option>
                  <option value="West Bengal">West Bengal</option>
                  <option value="Andaman and Nicobar Islands">
                    Andaman and Nicobar Islands
                  </option>
                  <option value="Chandigarh">Chandigarh</option>
                  <option value="Dadra & Nagar Haveli and Daman & Diu">
                    Dadra & Nagar Haveli and Daman & Diu
                  </option>
                  <option value="Lakshadweep">Lakshadweep</option>
                  <option value="Puducherry">Puducherry</option>
                  <option value="National Capital Territory of Delhi">
                    National Capital Territory of Delhi
                  </option>
                  <option value="Jammu & Kashmir">Jammu & Kashmir</option>
                  <option value="Ladakh">Ladakh </option>
                </select>
                <input
                  type="Number"
                  name="PinCode"
                  placeholder="Pin Code"
                  className={Css.input}
                  required
                />
              </div>
              <div className={Css.ButtonArea}>
                <button type="submit" className={Css.button}>
                  Save Deatils
                </button>
              </div>
            </form>
          </div>
        </div>
      );
    }
  } else {
    return <Navigate to={"/Login"} />;
  }
}

export default AddressUser;
