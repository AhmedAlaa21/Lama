import React from "react";
import Categories from "../components/Categories";
import Navbar from "../components/Navbar";
import OfferBanner from "../components/OfferBanner";
import SlideShow from "../components/SlideShow";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <OfferBanner />
      <Navbar />
      <SlideShow />
      <Categories />
      <Products />
      <Newsletter />
      <Footer/>
    </div>
  );
};

export default Home;
