import React, { useEffect, useState } from "react";
import Css from "../Style/HomeTable.module.css";
import { Navigate } from "react-router";
import axios from "axios";

function HomeTable() {
  const [DataOrder, setOrder] = useState([]);
  const [Error, setError] = useState("");
  const data = localStorage.getItem("AuthToken");
  useEffect(() => {
    const GetData = async () => {
      const server = await axios.get(
        `http://localhost:8000/admin/Order/${data}`
      );
      if (server.data.Operation === "Success") {
        setOrder(server.data.data);
        setError("");
      } else {
        setOrder([]);
        setError(server.data.message);
      }
    };
    GetData();
  }, [data]);
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
                    <th>Product Size</th>
                    <th>Product color</th>
                    <th>Stauts Button</th>
                  </tr>
                </thead>
                <tbody className={Css.TableBody}>
                  {DataOrder.map((value, index) => {
                    return (
                      <tr>
                        <td>{index + 1}</td>
                        <td className={Css.ProductImage}>
                          <p className={Css.Text}>{value.Product_id}</p>
                        </td>
                        <td>{value.Delveriy_Address}</td>
                        <td>{value.Status}</td>
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
            <h5 style={{ textAlign: "center" }}>{Error}</h5>
          </div>
        </>
      );
    }
  }
}
export default HomeTable;
