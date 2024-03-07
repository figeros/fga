import React from "react";

import "../../assets/css/header.css";

import logo from "../../assets/images/logos/logo.svg"

const Header = () =>{
    return(
        <header>
            <img className="logo" src={logo}/>
            <nav>
                <ul>
                    <li><a>ESERLER</a></li>
                    <li><a>SANATÇILAR</a></li>
                    <li><a>ETKİNLİKLER</a></li>
                    <li><a>İLETİŞİM</a></li>
                </ul>
                <div>
                    <img src= {require("../../assets/images/icons/home_icon.png")}/>
                </div>
            </nav>
        </header>
    )
}

export default Header;