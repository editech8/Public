import React from 'react'
import NavLinks from './NavLinks'
import UserActions from './UserActions'
import './css/NavBar.css'


const NavBar = () => {
  return (
    <nav className='NavBar'>
      <NavLinks/>
      <UserActions/>
    </nav>
  )
}

export default NavBar
