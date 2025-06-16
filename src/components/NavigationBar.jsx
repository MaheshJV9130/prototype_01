import React, { useContext, useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faCartShopping,
  faUser,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import cartContext from "../context/cartItems";

const NavigationBar = () => {
  const { cartItems } = useContext(cartContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showMobileSearch, setShowMobileSearch] = useState(false);
  const searchInputRef = useRef(null);

  // Focus input when shown
  useEffect(() => {
    if (showMobileSearch && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [showMobileSearch]);

  return (
    <nav className="w-full bg-white border-b border-gray-200 fixed top-0 left-0 z-50">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between h-14 px-3 md:px-6 relative">
        {/* Left: Hamburger */}
        <button
          className="md:hidden text-2xl text-black focus:outline-none mr-2"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <FontAwesomeIcon icon={faBars} />
        </button>

        {/* Center: Logo */}
        <a
          href="/"
          className="flex items-center flex-1 md:flex-none justify-center md:justify-start"
        >
          <span className="font-extrabold text-2xl tracking-tight text-black">
            SHOP.CO
          </span>
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex flex-1 justify-center ml-6">
          <ol className="flex gap-8 text-black font-medium text-base items-center">
            <li>
              <select className="bg-transparent outline-none cursor-pointer">
                <option value="">Shop</option>
              </select>
            </li>
            <li className="cursor-pointer">On Sale</li>
            <li className="cursor-pointer">New Arrivals</li>
            <li className="cursor-pointer">Brands</li>
          </ol>
        </div>

        {/* Desktop Search Input */}
        <div className="hidden md:flex flex-1 justify-end px-4">
          <div className="relative w-full max-w-xs">
            <input
              type="text"
              placeholder="Search for products..."
              className="w-full pl-10 pr-4 py-2 rounded-full bg-gray-100 text-gray-700 placeholder-gray-400 focus:outline-none"
            />
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />
          </div>
        </div>

        {/* Right: Icons */}
        <div className="flex items-center gap-4 md:gap-6">
          {/* Search icon only on mobile */}
          <button
            className="text-black text-xl hover:text-gray-600 cursor-pointer md:hidden"
            aria-label="Search"
            onClick={() => setShowMobileSearch((prev) => !prev)}
          >
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>

          <button
            className="text-black text-xl hover:text-gray-600 cursor-pointer"
            aria-label="Cart"
          >
            <FontAwesomeIcon icon={faCartShopping} />
            <span className="text-base align-top">{cartItems}</span>
          </button>

          <button
            className="text-black text-xl hover:text-gray-600 cursor-pointer"
            aria-label="User"
          >
            <FontAwesomeIcon icon={faUser} />
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div
            className="fixed inset-0 bg-black/30 z-40"
            onClick={() => setMenuOpen(false)}
          >
            <div
              className="absolute left-0 top-0 w-64 h-full bg-white shadow-lg flex flex-col p-6 z-50"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="self-end text-2xl mb-6"
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
              >
                <FontAwesomeIcon icon={faXmark} />
              </button>
              <ol className="flex flex-col gap-6 text-black font-medium text-lg">
                <li>
                  <select className="bg-transparent outline-none cursor-pointer">
                    <option value="">Shop</option>
                  </select>
                </li>
                <li className="cursor-pointer">On Sale</li>
                <li className="cursor-pointer">New Arrivals</li>
                <li className="cursor-pointer">Brands</li>
              </ol>
            </div>
          </div>
        )}

        {/* Mobile Search Input Overlay */}
        {showMobileSearch && (
          <div
            className="fixed inset-0 bg-black/30 z-50 flex items-start pt-8 px-4"
            onClick={() => setShowMobileSearch(false)}
          >
            <div className="w-full" onClick={(e) => e.stopPropagation()}>
              <div className="relative w-full max-w-xs mx-auto">
                <input
                  ref={searchInputRef}
                  type="text"
                  placeholder="Search for products..."
                  className="w-full pl-10 pr-4 py-2 rounded-full bg-gray-100 text-gray-700 placeholder-gray-400 focus:outline-none"
                />
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                />
                <button
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xl text-gray-500"
                  onClick={() => setShowMobileSearch(false)}
                  aria-label="Close search"
                >
                  <FontAwesomeIcon icon={faXmark} />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavigationBar;
