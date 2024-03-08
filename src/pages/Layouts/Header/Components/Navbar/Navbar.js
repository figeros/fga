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
        <button navbar__DrawerBtn>
            <img src= {require("../../../../../assets/images/icons/home_icon.png")}/>
        </button>
    </nav>
    )
}

export default Navbar