
import React, { useState, useEffect } from "react";
import { NavLink } from 'react-router-dom';
import "./Navbar.css";

function Navbar() {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 60) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  return (
    <>
    <div className={scroll ? "navbar opaque" : "navbar transparent"}>
        <div className="container">
        <NavLink  to="/" className="logo" style={{marginLeft:"2%", marginTop:"1%"}}>
            Whereby 
           </NavLink>
          <ul className="menu" style={{marginRight:"", marginTop:"1%"}}>
          <li className="dropdown">
          <NavLink href="/" >Product </NavLink>
          <ul className="dropdown-content">
          <li><NavLink href="/" className="dropdown-content-menu-1"> Product 1 </NavLink></li>
            <li><NavLink href="/" className="dropdown-content-menu-2">Product 2 </NavLink></li>
            <li><NavLink href="/" className="dropdown-content-menu-3">Product 3 </NavLink></li>
          </ul>
        </li>
        <li className="dropdown">
          <NavLink href="/">Pricing </NavLink>
          <ul className="dropdown-content">
            <li><NavLink href="/" className="dropdown-content-menu-1">Product 1 </NavLink></li>
            <li><NavLink href="/" className="dropdown-content-menu-2">Product 2 </NavLink></li>
            <li><NavLink href="/" className="dropdown-content-menu-3">Product 3 </NavLink></li>
          </ul>
        </li>
            <li className="dropdown">
            <NavLink  to="/" >Support </NavLink>
            </li>
            <li className="dropdown">
              <NavLink   to="/"  >Login </NavLink>
            </li>
         <li className="tryfree">
         <NavLink>Try For Free </NavLink>

         </li>


          </ul>
        </div>
      </div>
      </>
    );
  }

  export default Navbar;
