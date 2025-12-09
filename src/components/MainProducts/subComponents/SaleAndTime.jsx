import React from "react";
import Timer from "./Timer";
import "../css/SaleAndTime.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const SaleAndTime = () => {
  return (
    <>
      <div className="saleAndTimeAndSlideButtons">
        <div className="saleAndTime">
          <div className="saleName">
            <div className="todayText">
              <div className="redBox"></div>
              <p>Today's</p>
            </div>
            <p>Flash Sales</p>
          </div>
          <div className="saleTime">
            <Timer />
          </div>
        </div>
        <div className="slideButtons">
          <button>
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <button>
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
      </div>
    </>
  );
};

export default SaleAndTime;
