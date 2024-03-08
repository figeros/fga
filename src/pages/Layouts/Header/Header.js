import React from "react";

import Navbar from "./Components/Navbar/Navbar";

import "../../../assets/css/header.css";

import bg from "../../../assets/images/bg/bg_navbar.svg"

const Header = () =>{
    return(
        <header>
                <Navbar/>
                <image className="bg" src={bg}/>
        </header>
    )
}

export default Header;