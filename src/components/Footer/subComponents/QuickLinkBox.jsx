import React from 'react'
import "../css/QuickLinkBox.css";

const QuickLinkBox = () => {
  return (
    <>
      <div className="quickLinkBox">
        <div className='quickLinkBoxTopper'>
            <h3>Quick Link</h3>
        </div>
        <div className='quickLinkBoxBottom'>
            <p>Privacy Policy</p>
            <p>Terms Of Use</p>
            <p>FAQ</p>
            <p>Contact</p>
        </div>
      </div>
    </>
  )
}

export default QuickLinkBox
