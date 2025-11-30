import React from "react";
import "./css/Categories.css";

const Categories = () => {
  return (
    <div className="categories">
      <button className="womanFashion">
        <p>Woman's Fashion</p> <select name="womanFashion" id="" className="womanCategories"></select>
      </button>
      <button className="menFashion"><p>Men's Fashion</p> <select name="menFashion" id="" className="menCategories"></select></button>
      <button className="">Electonics</button>
      <button className="">Home & Lifestyle</button>
      <button className="">Medicine</button>
      <button className="">Sports & Outdoor</button>
      <button className="">Baby's & Toys</button>
      <button className="">Groceries & Pets</button>
      <button className="">Health & Beauty</button>
    </div>
  );
};

export default Categories;
