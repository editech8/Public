import React from 'react'
import "../css/AccountBox.css";

const AccountBox = () => {
  return (
    <>
      <div className="accountBox">
        <div className='accountBoxTopper'>
            <h3>Account</h3>
        </div>
        <div className='accountBoxBottom'>
            <p>My Account</p>
            <p>Login / Register</p>
            <p>Cart</p>
            <p>Wishlist</p>
            <p>Shop</p>
        </div>
      </div>
    </>
  )
}

export default AccountBox
