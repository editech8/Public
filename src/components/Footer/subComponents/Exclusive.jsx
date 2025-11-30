import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faForward } from "@fortawesome/free-solid-svg-icons";
import "../css/Exclusive.css"

const Exclusive = () => {
  return (
    <>
      <div className="exclusiveBox">
            <div className="exclusiveBoxTopper">
              <div className="exclusiveBoxTopperUpper">
                <h3 className="exclusiveText">Exclusive</h3>
                <p>Subscribe</p>
              </div>
              <div className="exclusiveBoxTopperLower">
                <p>Get 10% off your first order</p>
              </div>
            </div>
            <div className="exclusiveBoxBottom">
              <input type="text" placeholder="Enter your email" className="emailInputBox" />
                <button className="emailSubmitBtn"><FontAwesomeIcon icon={faForward}/></button>
            </div>
          </div>
    </>
  )
}

export default Exclusive
