import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#F0F0F0] pt-8 md:pt-12">
      {/* Newsletter Section */}
      <div className="bg-black rounded-xl mx-2 md:mx-20 px-4 md:px-20 py-8 md:py-10 flex flex-col md:flex-row items-center justify-between mb-8 md:mb-12">
        <div className="text-white font-extrabold text-2xl md:text-4xl leading-tight mb-6 md:mb-0 text-center md:text-left">
          <span>
            STAY UPTO DATE ABOUT
            <br />
            OUR LATEST OFFERS
          </span>
        </div>
        <div className="flex flex-col gap-4 w-full md:w-[400px]">
          <div className="flex items-center bg-white rounded-full px-4 py-2">
            <span className="mr-2 text-gray-400 text-xl">&#9993;</span>
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 outline-none bg-transparent text-black"
            />
          </div>
          <button className="bg-white text-black rounded-full py-2 font-medium hover:bg-gray-200 transition">
            Subscribe to Newsletter
          </button>
        </div>
      </div>

      {/* Footer Main Content */}
      <div className="max-w-7xl mx-auto px-2 md:px-20 pb-6 md:pb-8">
        <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-10">
          {/* Brand & Social */}
          <div className="flex flex-col gap-4 max-w-xs mb-6 md:mb-0">
            <div className="text-2xl md:text-3xl font-extrabold">SHOP.CO</div>
            <div className="text-gray-500 text-sm">
              We have clothes that suits your style and which you’re proud to
              wear. From women to men.
            </div>
            <div className="flex gap-4 mt-2 justify-center md:justify-start">
              <a
                href="#"
                className="bg-white rounded-full p-2 shadow hover:bg-gray-100 transition"
              >
                <img
                  src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/twitter.svg"
                  alt="Twitter"
                  className="w-5 h-5"
                />
              </a>
              <a
                href="#"
                className="bg-white rounded-full p-2 shadow hover:bg-gray-100 transition"
              >
                <img
                  src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/facebook.svg"
                  alt="Facebook"
                  className="w-5 h-5"
                />
              </a>
              <a
                href="#"
                className="bg-white rounded-full p-2 shadow hover:bg-gray-100 transition"
              >
                <img
                  src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/instagram.svg"
                  alt="Instagram"
                  className="w-5 h-5"
                />
              </a>
              <a
                href="#"
                className="bg-white rounded-full p-2 shadow hover:bg-gray-100 transition"
              >
                <img
                  src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/github.svg"
                  alt="GitHub"
                  className="w-5 h-5"
                />
              </a>
            </div>
          </div>
          {/* Links */}
          <div className="flex flex-1 justify-between flex-wrap gap-8">
            <div>
              <div className="font-semibold tracking-widest mb-3">COMPANY</div>
              <ul className="text-gray-600 text-sm space-y-2">
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Features</a>
                </li>
                <li>
                  <a href="#">Works</a>
                </li>
                <li>
                  <a href="#">Career</a>
                </li>
              </ul>
            </div>
            <div>
              <div className="font-semibold tracking-widest mb-3">HELP</div>
              <ul className="text-gray-600 text-sm space-y-2">
                <li>
                  <a href="#">Customer Support</a>
                </li>
                <li>
                  <a href="#">Delivery Details</a>
                </li>
                <li>
                  <a href="#">Terms & Conditions</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
              </ul>
            </div>
            <div>
              <div className="font-semibold tracking-widest mb-3">FAQ</div>
              <ul className="text-gray-600 text-sm space-y-2">
                <li>
                  <a href="#">Account</a>
                </li>
                <li>
                  <a href="#">Manage Deliveries</a>
                </li>
                <li>
                  <a href="#">Orders</a>
                </li>
                <li>
                  <a href="#">Payments</a>
                </li>
              </ul>
            </div>
            <div>
              <div className="font-semibold tracking-widest mb-3">
                RESOURCES
              </div>
              <ul className="text-gray-600 text-sm space-y-2">
                <li>
                  <a href="#">Free eBooks</a>
                </li>
                <li>
                  <a href="#">Development Tutorial</a>
                </li>
                <li>
                  <a href="#">How to - Blog</a>
                </li>
                <li>
                  <a href="#">Youtube Playlist</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-200 mt-10 pt-6 gap-4">
          <div className="text-gray-400 text-xs">
            Shop.co © 2000-2023, All Rights Reserved
          </div>
          <div className="flex gap-2">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png"
              alt="Visa"
              className="h-[35px] w-[55px] object-contain  "
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png"
              alt="Mastercard"
              className="h-[35px] w-[55px] object-contain  "
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
              alt="PayPal"
              className="h-[35px] w-[55px] object-contain  "
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
              alt="Apple Pay"
              className="h-[35px] w-[45px] object-contain  "
            />
            <img
              src="https://images.seeklogo.com/logo-png/33/2/google-pay-logo-png_seeklogo-334912.png"
              alt="Google Pay"
              className="h-[35px] w-[55px] object-contain  "
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
