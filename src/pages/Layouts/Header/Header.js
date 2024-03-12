import React from "react";

import Navbar from "./Components/Navbar/Navbar";

import "../../../assets/css/header.css";

import bg from "../../../assets/images/bg/bg_navbar.svg"

const Header = () =>{
    return(
        <header>
                <img className="bg" src={bg} alt=""/>
                <Navbar/>
        </header>
    )
}

export default Header;