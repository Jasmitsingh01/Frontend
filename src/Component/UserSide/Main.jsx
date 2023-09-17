import React from "react";
import NavbaR from "./NavBaR/NavbaR";
import Banner from "./NavBaR/Banner";
import HomePageProduct from "./Products/HomePageProduct";
import CompanyLogosection from "./Products/CompanyLogosection";
import Catogaries from "./Catogaries/Catogaries";
import Banner2 from "./utiles Components/Banner2";
import Footer from "./utiles Components/Footer";
import Address from "./utiles Components/Address";

function Main() {
  return (
    <>
      <NavbaR />
      <Banner />
      <CompanyLogosection />
      <HomePageProduct />
      <Catogaries />
      <Banner2 />

      <Address />
      <Footer />
    </>
  );
}

export default Main;
