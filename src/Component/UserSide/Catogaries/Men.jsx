import React, { useEffect, useState } from "react";
import {
  AiOutlineStar,
  AiFillCaretLeft,
  AiFillCaretRight,
} from "react-icons/ai";
import Css from "../Style/AllProduct.module.css";
import { useNavigate } from "react-router";
import axios from "axios";
import { useSelector } from "react-redux";
function MenProduct() {
  const [Pages, setPage] = useState(0);
  const [error, seterror] = useState("");
  const [Data, setData] = useState([]);
  const [CurrentPage, setCurrentPage] = useState(1);

  const { SearchN, SearchP } = useSelector((state) => state.UpdateState);

  const Left = () => {
    if (CurrentPage !== 1) {
      setCurrentPage(CurrentPage - 1);
    }
  };

  const Right = () => {
    if (CurrentPage !== Pages) {
      setCurrentPage(CurrentPage + 1);
    }
  };

  const Navigate = useNavigate();
  const ViewProductHandler = (data) => {
    Navigate(`/Product/${data}`);
  };

  useEffect(() => {
    const Data = async () => {
      const Data = await axios.get("https://ecommerce-production-c6bb.up.railway.app/user/totalPages");
      if (Data.data.operation === "true") {
        setPage(Data.data.data);
        const response = await axios.get(
          `https://ecommerce-production-c6bb.up.railway.app/user/Catogaries/men?page=${CurrentPage}&limit=4`
        );
        if (response.data.operation === "success") {
          setData(response.data.data);
          seterror("");
        } else {
          setData([]);
          seterror("No Product was found");
        }
      } else {
        seterror("Something went wrong");
      }
    };
    Data();
  }, [CurrentPage]);
  return (
    <div className={Css.main}>
      <div className={Css.mainHeading}>
        <h2>Men's Products</h2>
      </div>
      <div>{error}</div>
      <div className={Css.ProductColumn}>
        {Data.filter((value) => {
          if (SearchN === "") {
            return value;
          } else if (
            value.Product_Name.toLowerCase().includes(
              `${SearchN.toLowerCase()}`
            )
          ) {
            return value;
          } else {
            return null;
          }
        })
          .filter((value) => {
            if (SearchP === 0) {
              return value;
            } else {
              if (value.Product_Price <= SearchP) {
                return value;
              } else {
                return null;
              }
            }
          })
          .map((value, index) => {
            const First = btoa(
              new Uint8Array(value.Product_Main_Image.data).reduce(
                (data, byte) => data + String.fromCharCode(byte),
                ""
              )
            );
            return (
              <div
                className={Css.Product}
                onClick={() => ViewProductHandler(value.id)}
                key={index}
              >
                <div className={Css.Pimg}>
                  <img
                    src={`data:image/png;base64,${First}`}
                    alt="Product"
                    className={Css.Proimg}
                  />
                </div>
                <div className={Css.ProductHeading}>
                  <p>{value.Product_Name}</p>
                </div>
                <div className={Css.ProductCatogaires}>
                  <p>{value.Product_Catogaries}</p>
                </div>
                <div className={Css.ProductPrice}>
                  <p>{value.Product_Price}</p>
                </div>
                <div className={Css.ProductRating}>
                  <AiOutlineStar />
                  <AiOutlineStar />
                  <AiOutlineStar />
                  <AiOutlineStar />
                  <AiOutlineStar />
                </div>
              </div>
            );
          })}
      </div>
      <div className={Css.Pages}>
        {" "}
        <span onClick={() => Left()}>
          <AiFillCaretLeft className={Css.Left} />
        </span>{" "}
        {CurrentPage} of {Pages}
        <span onClick={() => Right()}>
          <AiFillCaretRight className={Css.Left} />
        </span>
      </div>
    </div>
  );
}

export default MenProduct;
