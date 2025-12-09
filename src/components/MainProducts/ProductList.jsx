import React from "react";
import SaleAndTime from "./subComponents/SaleAndTime";
import "./css/ProductList.css";
import ActualProduts from "./subComponents/ActualProduts";

const ProductList = () => {
  return (
    <>
      <div className="mainBodyProductList">
        <div className="salaAndTime">
          <SaleAndTime />
        </div>
        <div className="actualProducts">
          <ActualProduts />
        </div>
      </div>
    </>
  );
};

export default ProductList;
