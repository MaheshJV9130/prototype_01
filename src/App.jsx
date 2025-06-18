import { useState } from "react";
import SignUpDiscountPopUp from "./components/SignUpDiscountPopUp";
import NavigationBar from "./components/NavigationBar";
import HeroSection from "./components/HeroSection";
import NewArrivals from "./components/NewArrivals";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <header>
        <SignUpDiscountPopUp />
        <NavigationBar />
      </header>
      <main>
        <HeroSection />
        <NewArrivals />
      </main>
      <Footer />
    </>
  );
}

export default App;
