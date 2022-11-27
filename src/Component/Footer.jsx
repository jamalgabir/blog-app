import React from 'react'
import logo from "../images/logo.jpg";
import "./footer.css"
const Footer = () => {
  return (
    <footer>
      <img src={logo} alt="imge" className="footerlogo" />
      <span>Made with reat.js @</span>
    </footer>
  )
}

export default Footer