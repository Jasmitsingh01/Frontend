import React, { useEffect, useState } from "react";
import Css from "../Style/HomeTable.module.css";
import { Navigate } from "react-router";
import axios from "axios";

function HomeTable() {
  const [DataOrder, setOrder] = useState([]);
  const [Error, setError] = useState("");
  const[Dispacth,setDispacth]=useState("")
  const data = localStorage.getItem("AuthToken");
  useEffect(() => {
    const GetData = async () => {
      const server = await axios.get(
        `ecommerce-production-c6bb.up.railway.app/admin/Order/${data}`
      );
      if (server.data.Operation === "Success") {
        setOrder(server.data.data);
        setError("");
      } else {
        setOrder([]);
        setError(server.data.message);
      }
    };
    const DispacthProduct=async()=>{
      const D=await axios.post(`https://ecommerce-production-c6bb.up.railway.app/admin/Dispacth`,{
        Data:Dispacth
      })
      if(D.data.Operation==="Success"){
        setDispacth("");
      setError("");
      }
      else{
setError("Something Went Wrong")
      }
    }
    if(Dispacth===""){
    GetData();
    }
    else{
      DispacthProduct();
    }
  }, [data,Dispacth]);
  if (!data) {
    return <Navigate to={"/admin/login"} />;
  } else {
    if (!Error) {
      return (
        <div>
          <div>
            <div className={Css.Tablearea}>
              <table className={Css.Table}>
                <thead className={Css.TableHead}>
                  <tr>
                    <th>S.No</th>
                    <th>Product Name</th>
                    <th>Delivered Address</th>
                    <th>Buyer Name</th>
                    <th>Product Qunatity</th>
                    <th>Dispacth Button</th>
                  </tr>
                </thead>
                <tbody className={Css.TableBody}>
                  {DataOrder.map((value, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td className={Css.ProductImage}>
                          <p className={Css.Text}>{value.Product_name}</p>
                        </td>
                        <td>{value.Delveriy_Address}</td>
                        <td>{value.Buyer_Name}</td>
                        <td>{value.Quntatity_of_Products}</td>
                        <td><button className={Css.button} onClick={()=>setDispacth(value.id)}>Dispacth</button></td>

                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <>
          <div>
            <h5 className={Css.Errors}>{Error}</h5>
          </div>
        </>
      );
    }
  }
}
export default HomeTable;
