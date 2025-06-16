import React, { useEffect, useState, useContext } from "react";
import cartContext from "../context/cartItems";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // Add this import

const url = "https://fakestoreapi.com/products";

const StarRating = ({ rating }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (rating >= i) {
      stars.push(
        <span key={i} className="text-yellow-400 text-lg">
          ★
        </span>
      );
    } else if (rating >= i - 0.5) {
      stars.push(
        <span key={i} className="text-yellow-400 text-lg">
          ☆
        </span>
      );
    } else {
      stars.push(
        <span key={i} className="text-gray-300 text-lg">
          ★
        </span>
      );
    }
  }
  return <span>{stars}</span>;
};

const NewArrivals = () => {
  const [products, setProducts] = useState([]);
  const { cartItems, setCartItems } = useContext(cartContext);
  const scrollRef = React.useRef(null);

  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const getProducts = async () => {
    let req = await fetch(url);
    let res = await req.json();
    setProducts(res);
  };

  useEffect(() => {
    getProducts();
  }, []);

  // Scroll handler
  const scrollByCard = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = window.innerWidth;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  // Update arrow visibility on scroll
  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setShowLeftArrow(el.scrollLeft > 10);
    setShowRightArrow(el.scrollLeft + el.offsetWidth < el.scrollWidth - 10);
  };

  // Ensure arrow visibility updates on scroll and when products load
  useEffect(() => {
    handleScroll();
  }, [products]);

  return (
    <section className="bg-white py-10">
      <h2 className="text-center font-serif font-normal text-5xl mb-10 tracking-wider">
        NEW ARRIVALS
      </h2>
      <div className="relative">
        {/* Arrow buttons for mobile */}
        <div className="flex justify-between items-center mb-4 px-4 sm:hidden">
          {showLeftArrow ? (
            <button
              aria-label="Scroll left"
              className="p-2 rounded-full bg-white shadow border border-gray-200"
              onClick={() => scrollByCard("left")}
            >
              <FaChevronLeft size={20} />
            </button>
          ) : <span style={{ width: 40 }}></span>}
          {showRightArrow ? (
            <button
              aria-label="Scroll right"
              className="p-2 rounded-full bg-white shadow border border-gray-200"
              onClick={() => scrollByCard("right")}
            >
              <FaChevronRight size={20} />
            </button>
          ) : <span style={{ width: 40 }}></span>}
        </div>
        {/* Blur effect for horizontal scroll */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="
            flex flex-nowrap gap-8 mb-10
            overflow-x-auto pl-0
            md:flex-wrap md:overflow-visible
          "
          style={{
            WebkitOverflowScrolling: "touch",
            scrollSnapType: "x mandatory",
            scrollPaddingLeft: 0,
          }}
        >
          {products.map((product, idx) => (
            <div
              key={product.id}
              className={`
                bg-gray-50 rounded-3xl p-6 box-border shadow-sm flex flex-col items-center cursor-pointer
                flex-shrink-0
                w-screen
                snap-center
                sm:w-60
                sm:snap-start
                ${idx === 0 ? 'ml-0' : ''}
              `}
              style={{
                minHeight: 420,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                marginLeft: idx === 0 ? 0 : undefined, // Ensures no gap before first card
              }}
            >
              <div
                style={{
                  minHeight: 260,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "flex-start",
                }}
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-44 h-44 object-contain mb-4"
                />
                <div className="font-semibold text-xl mb-2 text-center">
                  {product.title}
                </div>
                <div className="flex items-center gap-2 mb-1">
                  <StarRating rating={product.rating.rate} />
                  <span className="text-gray-500 text-base">
                    {product.rating.rate}/5 ({product.rating.count})
                  </span>
                </div>
                <div className="mb-2"></div>
              </div>
              <div className="flex items-center gap-3 mt-2">
                <span className="font-bold text-2xl">
                  ₹{Math.floor(product.price * 86.06)}
                </span>
              </div>
              <span>
                <button
                  className="border border-gray-200 rounded-3xl px-4 py-3 bg-orange-400 text-lg font-medium cursor-pointer transition hover:bg-orange-200 "
                  onClick={() => setCartItems(cartItems + 1)}
                >
                  Add to cart
                </button>
              </span>
            </div>
          ))}
        </div>
        {/* Blur effect for horizontal scroll on mobile */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-8 bg-gradient-to-r from-white via-white/80 to-transparent z-10 sm:hidden"></div>
        <div className="pointer-events-none absolute right-0 top-0 h-full w-8 bg-gradient-to-l from-white via-white/80 to-transparent z-10 sm:hidden"></div>
      </div>
      <div className="flex justify-center mb-6">
        <button className="border border-gray-200 rounded-3xl px-12 py-3 bg-white text-lg font-medium cursor-pointer transition hover:bg-gray-100">
          View All
        </button>
      </div>
      <hr className="border-t border-gray-200 mx-2 sm:mx-10" />
    </section>
  );
};

export default NewArrivals;
