import React from "react";
import "./css/Sections.css";
import Categories from "../Categories/Categories";
import ProductShowCase from "../ProductShowCase/ProductShowCase";

const Sections = () => {
  return (
    <div className="categoriesAndShowCase">
      <div className="vertical">
        <Categories />
      </div>
      <div className="horizontal">
        <ProductShowCase />
      </div>
    </div>
  );
};

export default Sections;
