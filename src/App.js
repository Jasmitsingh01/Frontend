import React from "react";
import { Navigate, Route, Routes } from "react-router";
import Main from "./Component/UserSide/Main";
import PainNavBar from "./Component/UserSide/NavBaR/PainNavBar";
import NavbaR from "./Component/UserSide/NavBaR/NavbaR";
import About from "./Component/UserSide/About/About";
import Cart from "./Component/UserSide/Cart/Cart";
import SideBar from "./Component/UserSide/Catogaries/SideBar";
import ALLProduct from "./Component/UserSide/Catogaries/ALLProduct";
import StoreFooter from "./Component/UserSide/utiles Components/StoreFooter";
import LoginSinUp from "./Component/UserSide/Login/LoginSinUp";
import SingUp from "./Component/UserSide/Login/SingUp";
import Login from "./Component/AdminSIde/Login/Login";
import SingUpA from "./Component/AdminSIde/Login/SingUp";
import Admindash from "./Component/AdminSIde/DashBoard/Admindash";
import PlusProduct from "./Component/AdminSIde/AddPRoduct/PlusProduct";
import Contact from "./Component/UserSide/Contact/Contact";
import ProductDetails from "./Component/UserSide/Products/ProductDetails";
import MenProduct from "./Component/UserSide/Catogaries/Men";
import Women from "./Component/UserSide/Catogaries/Women";
import Profile from "./Component/UserSide/Profile/Profile";
import AddressUser from "./Component/UserSide/utiles Components/AddressUser";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route
          path="/About"
          element={
            <>
              <NavbaR />
              <About />
            </>
          }
        />
        <Route
          path="/Contact"
          element={
            <>
              <NavbaR /> <Contact />
            </>
          }
        />
        <Route
          path="/login"
          element={
            <>
              <NavbaR /> <LoginSinUp />
            </>
          }
        />
        <Route
          path="/singUp"
          element={
            <>
              <NavbaR /> <SingUp />
            </>
          }
        />

        <Route
          path="/Cart"
          element={
            <>
              <NavbaR /> <Cart />
            </>
          }
        />
        <Route
          path={"/Profile"}
          element={
            <>
              <NavbaR /> <Profile /> <StoreFooter />
            </>
          }
        />

        <Route
          path={"/store"}
          element={
            <>
              <PainNavBar /> <SideBar /> <ALLProduct /> <StoreFooter />
            </>
          }
        />
        <Route
          path={"/Data"}
          element={
            <>
              <PainNavBar /> <AddressUser /> <StoreFooter />
            </>
          }
        />
        <Route
          path={"/men"}
          element={
            <>
              <PainNavBar /> <SideBar /> <MenProduct /> <StoreFooter />
            </>
          }
        />
        <Route
          path={"/women"}
          element={
            <>
              <PainNavBar /> <SideBar /> <Women /> <StoreFooter />
            </>
          }
        />
        <Route
          path="/Product/:id"
          element={
            <>
              <PainNavBar />
              <ProductDetails /> <StoreFooter />
            </>
          }
        />

        {
          // Admin Routes
        }
        <Route
          path="/admin"
          element={
            <>
              <Admindash />
            </>
          }
        />
        <Route
          path="/admin/login"
          element={
            <>
              <NavbaR /> <Login />
            </>
          }
        />
        <Route
          path="/admin/singUp"
          element={
            <>
              <NavbaR /> <SingUpA />
            </>
          }
        />
        <Route
          path="/admin/AddProduct"
          element={
            <>
              <PlusProduct />
            </>
          }
        />
        <Route path="*" element={<Navigate to={"/"} />} />
      </Routes>
    </>
  );
}

export default App;
