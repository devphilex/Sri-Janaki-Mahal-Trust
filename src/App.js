import React from "react";
import Nav from "./Components/Nav";
import HomeImageComponent from "./Components/HomeImageComponent";
import GalleryComponent from "./Components/GalleryComponent";

import Footer from "./Components/Footer";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import AboutPage from "./Components/AboutPage";
import HotelFacilityPage from "./Components/HotelFacilityPage";
import Testimonials from "./Components/Testimonials";
import Gallery from "./Components/Gallery";

const App = () => {
  return (
    <div className="relative w-full overflow-hidden">
      <Nav />
      <HomeImageComponent />
      <AboutPage />
      <GalleryComponent />
      <HotelFacilityPage />
      <Testimonials />
      <Gallery />
      {/* 
      <BirlaDharamshala /> */}
      <Footer />
      <div className="fixed flex  items-center  justify-between p-4 w-full bottom-[10px] sm:bottom-0 left-0 ">
        <a href="tel:+919799589829" className="">
          <FaPhoneAlt className="text-5xl text-white bg-black p-2   rounded-full" />
        </a>
        <a href="http://wa.me/+919799589829">
          <IoLogoWhatsapp className="text-5xl text-[#08c241] " />
        </a>
      </div>
    </div>
  );
};

export default App;
