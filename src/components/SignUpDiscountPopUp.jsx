import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const SignUpDiscountPopUp = () => {
  const [isLogIn, setIsLogIn] = useState(false);
  return (
    <div
      className={`w-screen bg-black text-white flex justify-center items-center gap-1 relative ${
        isLogIn && "hidden"
      } px-2 py-2 sm:py-0 sm:h-10`}
    >
      <div className="flex flex-col sm:flex-row items-center w-full sm:justify-center gap-1">
        <p className="font-light text-[11px] sm:text-[14px] text-center">
          Sign up and get 20% off to your first order.
        </p>
        <a
          className="font-light underline underline-offset-1 text-[13px] sm:text-[14px]"
          href="/signup"
        >
          Sign Up Now
        </a>
      </div>
      <button
        onClick={() => setIsLogIn(!isLogIn)}
        className="absolute right-2 top-2 sm:top-1 sm:right-4 p-1 sm:p-2 cursor-pointer"
        aria-label="Close"
      >
        <FontAwesomeIcon icon={faXmark} size="lg" />
      </button>
    </div>
  );
};

export default SignUpDiscountPopUp;
