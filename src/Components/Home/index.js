import React from "react";
import Banner from "../Banner";
import Contact from "../Contact";
import Footer from "../Footer";
import Header from "../Header";
import Products from "../Products";
import Bannerr from "../Banner-n";
import News from "../News";
import Category from "../Categories";
function Home({ pro, deleteProduct }) {
  return (
    <>
      {/* <Products pro={pro} deleteProduct={deleteProduct} /> */}
      <Category/>
      <Bannerr/>
      <News/>
      <Contact/>
    </>
  );
}

export default Home;
