import React from "react";
import { useState } from "react";
import {Link} from "react-router-dom";
import './Scss/Navigation.scss'

const MobileNavigation = () => {

    const [activeClass, setActiveClass] = useState(false)

    const handleHamburgerClick = () => {
        setActiveClass(!activeClass);
    }

    return (
      <>
      <nav className="mobileNavigation">
        <div className="logoContainer">
          <div className="underLogo">
            <div className="logo">
            </div>
          </div>
        </div>
        <div className="profile">
          <h2>{`Ceren&Filip`}</h2>
          <p>{`Turkey&Poland`}</p>
        </div>
        <div className="mobileNav">
            <i className="fas fa-bars" onClick={handleHamburgerClick}></i>
            <ul className={activeClass ? "active" : ''}>
            <li>
                <Link to="/" onClick={handleHamburgerClick}>Home</Link>
            </li>
            <li>
                <Link to="/about" onClick={handleHamburgerClick}>About us</Link>
            </li>
            <li>
                <Link to="/trips" onClick={handleHamburgerClick}>Our Trips</Link>
            </li>
            <li>
                <Link to="/study" onClick={handleHamburgerClick}>Learn language</Link>
            </li>
            </ul>
        </div>
      </nav>
      <span className="main-line"></span>
      </>
    )
}

export default MobileNavigation;