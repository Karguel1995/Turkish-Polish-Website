import React from "react";
import {Link} from "react-router-dom";
import './Scss/Navigation.scss'

const Navigation = () => {
    return (
      <>
      <nav className="navigation">
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
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About us</Link>
          </li>
          <li>
            <Link to="/trips">Our Trips</Link>
          </li>
          <li>
            <Link to="/study">Learn language</Link>
          </li>
        </ul>
      </nav>
      <span className="main-line"></span>
      </>
    )
}

export default Navigation;