import React from "react";
import "./css/SpecialSale.css";

const SpecialSale = () => {
  return (
    <>
      <div className="main">
        <div className="container">
          <div className="left-container">
            <p className="sale-text">Summer Sales All Suits And Free Express Delivery - OFF 50%!</p>
            <a href="" className="shopNow-link">ShopNow</a>
          </div>
          <div>
            <label htmlFor="language"></label>
            <select name="Language" id="language" className="languageSelect">
              <option value="English" className="options">English</option>
              <option value="Spanish" className="options">Spanish</option>
              <option value="French" className="options">French</option>
              <option value="German" className="options">German</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
};

export default SpecialSale;
