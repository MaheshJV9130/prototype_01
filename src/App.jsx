import React, { useState } from "react";
import SignUpDiscountPopUp from "./components/SignUpDiscountPopUp";
import NavigationBar from "./components/NavigationBar";
import HeroSection from "./components/HeroSection";
import NewArrivals from "./components/NewArrivals";
import cartContext from "./context/cartItems";
import Footer from "./components/Footer";

function App() {
  const [cartItems, setCartItems] = useState(0);
  return (
    <>
      <cartContext.Provider value={{ cartItems, setCartItems }}>
        <header>
          <SignUpDiscountPopUp />
          <NavigationBar />
        </header>
        <main>
          <HeroSection />
          <NewArrivals />
        </main>
        <Footer />
      </cartContext.Provider>
    </>
  );
}

export default App;
