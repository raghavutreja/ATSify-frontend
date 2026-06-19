import React from 'react'
import "./Navbar.css"
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div>
      <nav className="navbar bg-black bg-body-tertiary">
        <div className='arranging' >
  <div className="container-fluid">
    <a className="navbar-brand linkallu" href="/">
    <img src="/logo.png" height="24" width="30" className='d-inline-block align-text-top image'  alt="" />
      ATSify
    </a>
  </div>
  <div className='extras' >
    <NavLink to="/about">About</NavLink>
    |
    <NavLink to="/contact">Contact</NavLink>
  </div>
   </div>
</nav>

    </div>
  )
}

export default Navbar
