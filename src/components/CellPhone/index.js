import { transform } from "typescript";
import "./CellPhone.css";
import React, { useState } from "react";

const CellPhone = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleTabClick = () => {
    setIsOpen(!isOpen);
  };

  const contentStyle = {
    transform: isOpen ? "translateX(0)" : "translateX(-100%)",
    
    transition: "transform 0.3s ease-in-out"
  };
  const tabStyle = {
    transform: isOpen ? "translateX(380px)" : "translateX(0)",
    transition: "transform 0.3s ease-in-out"
};

  return (
    <div className="cell-phone" >
      <div className="cell-phone-tab" onClick={handleTabClick} style={tabStyle}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          viewBox="0 0 50 50"
          fill="none"
        >
          <path
            d="M37.1419 7.07894V43.2895C37.1398 44.0705 36.8287 44.819 36.2764 45.3713C35.7241 45.9236 34.9756 46.2348 34.1946 46.2368H16.0577C15.2767 46.2348 14.5282 45.9236 13.9759 45.3713C13.4236 44.819 13.1124 44.0705 13.1104 43.2895V7.07894C13.1124 6.29789 13.4236 5.54943 13.9759 4.99714C14.5282 4.44485 15.2767 4.13366 16.0577 4.13158H34.1946C34.9756 4.13366 35.7241 4.44485 36.2764 4.99714C36.8287 5.54943 37.1398 6.29789 37.1419 7.07894ZM34.1946 11.9316H16.0577V38.8947H34.1946V11.9316ZM20.2209 8.2C20.2209 8.59084 20.3761 8.96568 20.6525 9.24205C20.9289 9.51842 21.3037 9.67368 21.6946 9.67368H28.563C28.9538 9.67368 29.3287 9.51842 29.605 9.24205C29.8814 8.96568 30.0367 8.59084 30.0367 8.2C30.0367 7.80915 29.8814 7.43431 29.605 7.15795C29.3287 6.88158 28.9538 6.72631 28.563 6.72631H21.6946C21.3037 6.72631 20.9289 6.88158 20.6525 7.15795C20.3761 7.43431 20.2209 7.80915 20.2209 8.2ZM26.5972 42.5658C26.5972 42.2755 26.5111 41.9917 26.3499 41.7503C26.1887 41.5088 25.9595 41.3206 25.6913 41.2094C25.4232 41.0982 25.128 41.0689 24.8433 41.1254C24.5585 41.1818 24.2968 41.3214 24.0914 41.5265C23.8859 41.7316 23.7458 41.993 23.6889 42.2777C23.6319 42.5624 23.6606 42.8575 23.7714 43.1259C23.8821 43.3943 24.0699 43.6238 24.311 43.7855C24.5522 43.9471 24.8358 44.0337 25.1261 44.0342C25.3192 44.0346 25.5104 43.9968 25.6889 43.9232C25.8674 43.8495 26.0295 43.7414 26.1662 43.605C26.3028 43.4687 26.4112 43.3067 26.4852 43.1283C26.5591 42.95 26.5972 42.7588 26.5972 42.5658Z"
            fill="#C7915E"
          />
        </svg>
      </div>
      <div className="cell-phone-content" style={contentStyle}>
        <div className="cell-phone-fully image-container">

          <img className="cell-phone-image" src="https://i.imgur.com/GAupnkg.png" alt="cellphone" />
          <img className="cell-phone-background"
            src="https://e0.pxfuel.com/wallpapers/1/441/desktop-wallpaper-pin-de-amoor-omar-em-phone-background-hipster-02-papel-de-parede-de-arte-papel-de-parede-de-celular-producao-de-arte-awesome-cool-thumbnail.jpg"
            alt="cellphone background"
          />
        </div>
      </div>
    </div>
  );
};

export default CellPhone;
