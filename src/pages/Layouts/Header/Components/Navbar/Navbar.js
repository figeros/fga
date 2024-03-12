import React from "react";

import "./Navbar.css"

import Navlinks from "./Navlinks";

import logo from "../../../../../assets/images/logos/logo.svg"


const Navbar = () =>{

    return(
    <nav>
        <img className="logo" src={logo}/>
        <div className="navbar__HeaderNavlinks">
            <Navlinks/>
        </div>
        <button className="navbar__DrawerBtn">
            <div></div>
            <div></div>
            <div></div>
        </button>
    </nav>
    )

     
}

export default Navbar