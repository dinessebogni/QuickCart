'use client'
import React from "react";
import HeaderSlider from "@/components/HeaderSlider";
import HomeShop from "@/components/HomeShop";
import Banner from "@/components/Banner";
import NewsLetter from "@/components/NewsLetter";
import FeaturedProduct from "@/components/FeaturedProduct";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Login from "@/app/LoginSession/login";
import SignUp from "@/app/SignupSession/signup";
import Profile from "./profile/page";

const Home = () => {
  return (
    <>
      <Navbar/>
      <div className="px-6 md:px-16 lg:px-32">
        {/* <SignUp />
        <Login /> */}
        {/* <Profile /> */}
        <HeaderSlider />
        <HomeShop />
        <FeaturedProduct />
        <Banner />
        <NewsLetter />
      </div>
      <Footer />
    </>
  );
};

export default Home;
