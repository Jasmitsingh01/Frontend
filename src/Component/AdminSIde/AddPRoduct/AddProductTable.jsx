import React from "react";
import Css from "../Style/AddProductTable.module.css";
import { useState, useEffect } from "react";
import axios from "axios";
function AddProductTable({ Func }) {
  const [Data, setData] = useState([]);
  const [error, seterror] = useState("");
  // show Hide Buttons
  const [ShowDetails, setDetails] = useState("");
  const [ButtonText, SetButtonText] = useState("Show Details");
  const [SelectProduct, setSelect] = useState("");
  //Manage Edit Buttons And Section
  const [EditName, setEditName] = useState(false);
  const [EditPrice, setEditPrice] = useState(false);
  const [EditDiscription, setEditDiscription] = useState(false);
  const [EditColor, setEditcolor] = useState(false);
  const [EditSize, setEditSize] = useState(false);
  const [EditCatogaries, setEditCaTogaries] = useState(false);
  const [EditQunatity, setEditQunatity] = useState(false);
  const [Upadate, setUpdate] = useState(0);
  // Update Data
  const [Name, setName] = useState("");
  const [Price, setPrice] = useState("");
  const [Discription, setDiscription] = useState("");
  const [Color, setColor] = useState("");
  const [Size, setSize] = useState("");
  const [Catogaries, setCatogaries] = useState("");
  const [Qunatity, setQunatity] = useState("");
  // Delete handler
  const [Delete, setDelete] = useState({});
  const [DeleteActive, setDeleteActive] = useState(false);

  //Error Css
  const [Error,setCssEe]=useState("");

  const data = localStorage.getItem("AuthToken");

  const Details = (value) => {
    if (ShowDetails) {
      setDetails("");
      SetButtonText("Show Details");
      setSelect("");
    } else {
      setDetails("true");
      SetButtonText("Hide Details");
      setSelect(value.id);
      setName(value.Product_Name);
      setPrice(value.Product_Price);
      setDiscription(value.Product_Discription);
      setCatogaries(value.Product_Catogaries);
      setColor(value.Product_Color);
      setSize(value.Product_Size);
      setQunatity(value.Product_Qunatity);
    }
  };

  useEffect(() => {
    const Data = async () => {
      const GetData = await axios.get(
        `https://powerful-squirrel-production.up.railway.app/admin/GetProduct/${data}`
      );
      if (GetData.data.error === "NO Products !!!") {
        seterror(GetData.data.error);
        setCssEe(Css.error)
        setData([]);
      } else if (GetData.data.error === "Something went worng") {
        seterror(GetData.data.error);
        setCssEe(Css.error)
        setData([]);
      } else {
        seterror("");
        setCssEe(Css.sucssess)
        
        setData(GetData.data.Products);
      }
    };
    const DataUpDate = async () => {
      const GetData = await axios.put(
        `https://powerful-squirrel-production.up.railway.app/admin/AddProduct`,
        {
          Name,
          Price,
          Discription,
          Color,
          Size,
          Catogaries,
          Qunatity,
          ProductId: SelectProduct,
          UserId: data,
        }
      );
      if (GetData.data.operation === "Success") {
        setUpdate(false);
        seterror("");
      } else {
        seterror(GetData.data.message);
      }
    };
    const DeleteData = async () => {
      const Uid = Delete.UserId;
      const Pid = Delete.ProductId;
      const DeleteDatas = await axios.post(
        "https://powerful-squirrel-production.up.railway.app/admin/DeleteProduct",
        {
          Uid,
          Pid,
        }
      );
      if (DeleteDatas.data.operation === "Success") {
        setDeleteActive(false);
        seterror("");
      } else {
        seterror(DeleteDatas.data.message);
      }
    };
    if (Upadate === true) {
      DataUpDate();
    } else if (DeleteActive === true) {
      DeleteData();
    } else {
      Data();
    }
  }, [
    Func,
    data,
    Upadate,
    Name,
    Color,
    Price,
    Discription,
    Size,
    Qunatity,
    SelectProduct,
    Catogaries,
    Delete,
    DeleteActive,
  ]);
  if (error === "") {
    return (
      <div>
        <div>
          <h3 className={Css.Heading}>Live Products</h3>
        </div>
        <table>
          <thead>
            <tr className={Css.Head}>
              <th>S.No</th>
              <th>Product Image</th>
              <th>Product Name</th>
              <th>Manage Button</th>
            </tr>
          </thead>
          <tbody>
            {Data.map((value, index) => {
              const First = btoa(
                new Uint8Array(value.Product_Main_Image.data).reduce(
                  (data, byte) => data + String.fromCharCode(byte),
                  ""
                )
              );

              return (
                <>
                  <tr className={Css.body} key={index}>
                    <td className={Css.SNo}>
                      <p>{index + 1}</p>
                    </td>
                    <td>
                      <img
                        src={`data:image/png;base64,${First}`}
                        alt="Product"
                        className={Css.Image}
                      />
                    </td>

                    <td className={Css.ProductName}>
                      <p>{value.Product_Name}</p>
                    </td>

                    <td>
                      {SelectProduct === value.id ? (
                        <button
                          className={Css.button}
                          id={Css.edit}
                          onClick={() => Details(value.id)}
                        >
                          {ButtonText}
                        </button>
                      ) : (
                        <button
                          className={Css.button}
                          id={Css.edit}
                          onClick={() => Details(value)}
                        >
                          ShowDetails
                        </button>
                      )}
                      <br />
                      <button
                        className={Css.button}
                        onClick={() => {
                          setDelete({
                            ProductId: value.id,
                            UserId: value.User_id,
                          });
                          setDeleteActive(true);
                        }}
                      >
                        delete
                      </button>
                    </td>
                  </tr>

                  {SelectProduct === value.id ? (
                    <>
                      <div className={Css.show} key={Math.random()}>
                        <h4>Product Details</h4>
                        <ul>
                          <li
                            className={Css.ProductName}
                            key={index + Math.random()}
                          >
                            {EditName ? (
                              <>
                                {" "}
                                Name :
                                <input
                                  type="text"
                                  value={Name}
                                  placeholder="Name"
                                  onChange={(e) => setName(e.target.value)}
                                />
                                <div className={Css.ButttonSection}>
                                  <button
                                    className={Css.ProductDeatilsB}
                                    onClick={() => setEditName(false)}
                                  >
                                    Save
                                  </button>
                                </div>
                              </>
                            ) : (
                              <>
                                <div>Name : {Name}</div>
                                <div className={Css.ButttonSection}>
                                  <button
                                    className={Css.ProductDeatilsB}
                                    onClick={() => setEditName(true)}
                                  >
                                    Edit
                                  </button>
                                </div>
                              </>
                            )}
                          </li>
                          <li
                            className={Css.ProductName}
                            key={index + Math.random()}
                          >
                            {EditPrice ? (
                              <>
                                Price :
                                <input
                                  type="text"
                                  value={Price}
                                  onChange={(e) => setPrice(e.target.value)}
                                  placeholder="Price"
                                />
                                <div className={Css.ButttonSection}>
                                  <button
                                    className={Css.ProductDeatilsB}
                                    onClick={() => setEditPrice(false)}
                                  >
                                    Save
                                  </button>
                                </div>
                              </>
                            ) : (
                              <>
                                <div>Price : {Price}</div>
                                <div className={Css.ButttonSection}>
                                  <button
                                    className={Css.ProductDeatilsB}
                                    onClick={() => setEditPrice(true)}
                                  >
                                    Edit
                                  </button>
                                </div>
                              </>
                            )}
                          </li>
                          <li
                            className={Css.ProductName}
                            key={index + Math.random()}
                          >
                            {EditDiscription ? (
                              <>
                                Discription :
                                <input
                                  type="text"
                                  value={Discription}
                                  onChange={(e) =>
                                    setDiscription(e.target.value)
                                  }
                                  placeholder="Discription"
                                />
                                <div className={Css.ButttonSection}>
                                  <button
                                    className={Css.ProductDeatilsB}
                                    onClick={() => setEditDiscription(false)}
                                  >
                                    Save
                                  </button>
                                </div>
                              </>
                            ) : (
                              <>
                                <div className={Css.ProductDiscription}>
                                  Discription : {Discription}
                                </div>
                                <div className={Css.ButttonSection}>
                                  <button
                                    className={Css.ProductDeatilsB}
                                    onClick={() => setEditDiscription(true)}
                                  >
                                    Edit
                                  </button>
                                </div>
                              </>
                            )}
                          </li>
                          <li
                            className={Css.ProductName}
                            key={index + Math.random()}
                          >
                            {EditColor ? (
                              <>
                                {" "}
                                Color :
                                <input
                                  type="text"
                                  value={Color}
                                  onChange={(e) => setColor(e.target.value)}
                                  placeholder="Color"
                                />
                                <div className={Css.ButttonSection}>
                                  <button
                                    className={Css.ProductDeatilsB}
                                    onClick={() => setEditcolor(false)}
                                  >
                                    Save
                                  </button>
                                </div>
                              </>
                            ) : (
                              <>
                                <div className={Css.ProductDiscription}>
                                  Color : {Color}
                                </div>
                                <div className={Css.ButttonSection}>
                                  <button
                                    className={Css.ProductDeatilsB}
                                    onClick={() => setEditcolor(true)}
                                  >
                                    Edit
                                  </button>
                                </div>
                              </>
                            )}
                          </li>
                          <li
                            className={Css.ProductName}
                            key={index + Math.random()}
                          >
                            {EditSize ? (
                              <>
                                {" "}
                                Size :
                                <input
                                  type="text"
                                  value={Size}
                                  onChange={(e) => setSize(e.target.value)}
                                  placeholder="Size"
                                />
                                <div className={Css.ButttonSection}>
                                  <button
                                    className={Css.ProductDeatilsB}
                                    onClick={() => setEditSize(false)}
                                  >
                                    Save
                                  </button>
                                </div>
                              </>
                            ) : (
                              <>
                                <div className={Css.ProductDiscription}>
                                  Size : {Size}
                                </div>
                                <div className={Css.ButttonSection}>
                                  <button
                                    className={Css.ProductDeatilsB}
                                    onClick={() => setEditSize(true)}
                                  >
                                    Edit
                                  </button>
                                </div>
                              </>
                            )}
                          </li>
                          <li
                            className={Css.ProductName}
                            key={index + Math.random()}
                          >
                            {EditCatogaries ? (
                              <>
                                Catogaries :
                                <input
                                  type="text"
                                  value={Catogaries}
                                  onChange={(e) =>
                                    setCatogaries(e.target.value)
                                  }
                                  placeholder="Catogaries"
                                />
                                <div className={Css.ButttonSection}>
                                  <button
                                    className={Css.ProductDeatilsB}
                                    onClick={() => setEditCaTogaries(false)}
                                  >
                                    Save
                                  </button>
                                </div>
                              </>
                            ) : (
                              <>
                                <div className={Css.ProductDiscription}>
                                  {" "}
                                  Catogaries : {Catogaries}
                                </div>
                                <div className={Css.ButttonSection}>
                                  <button
                                    className={Css.ProductDeatilsB}
                                    onClick={() => setEditCaTogaries(true)}
                                  >
                                    Edit
                                  </button>
                                </div>
                              </>
                            )}
                          </li>
                          <li
                            className={Css.ProductName}
                            key={index + Math.random()}
                          >
                            {EditQunatity ? (
                              <>
                                Qunatity :
                                <input
                                  type="text"
                                  value={Qunatity}
                                  onChange={(e) => setQunatity(e.target.value)}
                                  placeholder="Qunatity"
                                />
                                <div className={Css.ButttonSection}>
                                  <button
                                    className={Css.ProductDeatilsB}
                                    onClick={() => setEditQunatity(false)}
                                  >
                                    Save
                                  </button>
                                </div>
                              </>
                            ) : (
                              <>
                                <div className={Css.ProductDiscription}>
                                  Qunatity : {Qunatity}
                                </div>
                                <div className={Css.ButttonSection}>
                                  <button
                                    className={Css.ProductDeatilsB}
                                    onClick={() => setEditQunatity(true)}
                                  >
                                    Edit
                                  </button>
                                </div>
                              </>
                            )}
                          </li>
                        </ul>
                        <div
                          style={{ textAlign: "center" }}
                          key={Math.random()}
                        >
                          <button
                            className={Css.Update}
                            onClick={() => setUpdate(true)}
                          >
                            {" "}
                            Upadate Details
                          </button>
                        </div>
                      </div>
                    </>
                  ) : (
                    <></>
                  )}
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  } else {
    return (
      <div className={Error}>
        <h1>{error}</h1>
      </div>
    );
  }
}

export default AddProductTable;
