import React from "react";
import HeroImg from "../assets/products/Lucid_Realism_A_professional_fitness_supplement_advertisement__0.jpg";
import brand1 from "../assets/products/download-removebg-preview.png";
import brand2 from "../assets/products/images-removebg-preview (1).png";
import brand3 from "../assets/products/images-removebg-preview (2).png";
import brand4 from "../assets/products/muscle-blaze---400x200-png-removebg-preview.png";
import brand5 from "../assets/products/images-removebg-preview.png";

const HeroSection = () => {
  return (
    <section className="w-full min-h-[80vh] bg-[#f7f6f7] flex flex-col justify-between overflow-x-hidden">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row items-center justify-between px-4 md:px-10 pt-10 md:pt-16 pb-8">
        {/* Left: Text */}
        <div className="md:w-1/2 w-full mb-10 md:mb-0">
          <h1 className="text-3xl md:text-6xl heroText font-bold leading-tight mb-6 text-center">
            FIND SUPPLEMENTS THAT MATCH YOUR GOALS
          </h1>
          <p className="text-gray-600 mb-8 text-base md:text-lg text-center md:text-left">
            Explore our carefully curated selection of high-quality supplements,
            designed to support your unique health journey and help you reach
            your fitness or wellness goals.
          </p>
          <div className="flex flex-col items-center md:items-start">
            <button className="bg-black text-white px-8 py-3 rounded-full text-lg font-medium shadow hover:bg-gray-800 transition mb-6 md:mb-10 cursor-pointer">
              Shop Now
            </button>
            {/* Stats */}
            <div className="flex gap-6 md:gap-10 mt-4 md:mt-8 justify-center md:justify-start">
              <div>
                <div className="text-2xl md:text-3xl font-bold">200+</div>
                <div className="text-gray-600 text-xs md:text-sm">
                  International Brands
                </div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold">2,000+</div>
                <div className="text-gray-600 text-xs md:text-sm">
                  High-Quality Products
                </div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold">30,000+</div>
                <div className="text-gray-600 text-xs md:text-sm">
                  Happy Customers
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Right: Image */}
        <div className="md:w-1/2 w-full flex justify-center relative mt-6 md:mt-0">
          <img
            src={HeroImg}
            alt="hero"
            className="w-64 h-64 md:w-[460px] md:h-[468px] object-cover rounded-xl shadow-lg cursor-pointer"
          />
          {/* Decorative stars */}
          <span className="absolute top-4 left-[-20px] text-2xl md:text-4xl text-black hidden md:block">
            ✦
          </span>
        </div>
      </div>
      {/* Brand Strip */}
      <div className="bg-[#999595] w-full flex justify-evenly items-center h-[80px] md:h-[150px] flex-wrap px-2">
        <img
          src={brand1}
          alt="brand1"
          className="brightness-0 invert w-16 md:w-32 object-contain cursor-pointer"
        />
        <img
          src={brand2}
          alt="brand2"
          className="brightness-0 invert w-16 md:w-32 object-contain cursor-pointer"
        />
        <img
          src={brand3}
          alt="brand3"
          className="brightness-0 invert w-16 md:w-32 object-contain cursor-pointer"
        />
        <img
          src={brand4}
          alt="brand4"
          className="brightness-0 invert w-16 md:w-32 object-contain cursor-pointer"
        />
        <img
          src={brand5}
          alt="brand5"
          className="brightness-0 invert w-16 md:w-32 object-contain cursor-pointer"
        />
      </div>
    </section>
  );
};

export default HeroSection;
