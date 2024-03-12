import React from "react";

import { NavLink } from "react-router-dom";

import "./Navlinks.css";

const Navlinks = () => {

    return(
            <ul className="navlinks__uList">
                <li><NavLink className="navlink">ESERLER</NavLink></li>
                <li><NavLink className="navlink">SANATÇILAR</NavLink></li>
                <li><NavLink className="navlink">ETKİNLİKLER</NavLink></li>
                <li><NavLink className="navlink">İLETİŞİM</NavLink></li>
            </ul>
    )

}

export default Navlinks;