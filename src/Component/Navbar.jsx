import React from 'react'
import "./navbar.css"
import logo from "../images/logo.jpg"
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className="navbar">
        <div className="navbarContainer">
            <div className="logo">
                <img className='logoimg' src={logo} alt="logo" />
            </div>
            <div className="links">
                <Link className='link' to="/?cat=art">
                   <h6>ART</h6>
                </Link>
                <Link className='link' to="/?cat=science">
                   <h6>SCIENCE</h6>
                </Link>
                <Link className='link' to="/?cat=technology">
                   <h6>TECHNOLOGY</h6>
                </Link>
                <Link className='link' to="/?cat=cinema">
                   <h6>CINEMA</h6>
                </Link>
                <Link className='link' to="/?cat=design">
                   <h6>DESIGN</h6>
                </Link>
                <Link className='link' to="/?cat=food">
                   <h6>FOOD</h6>
                </Link>
                <span>John</span>
                <span className='link'>Logout</span>
                <Link className='write' to="/write">Write</Link>
            </div>
        </div>
    </div>
  )
}

export default Navbar