import React from "react";

import { NavLink } from "react-router-dom";

import "./Navlinks.css";

const Navlinks = () => {

    return(
            <ul className="navlinks__uList">
                <li><NavLink>ESERLER</NavLink></li>
                <li><NavLink>ANATÇILAR</NavLink></li>
                <li><NavLink>ETKİNLİKLER</NavLink></li>
                <li><NavLink>İLETİŞİM</NavLink></li>
            </ul>
    )

}

export default Navlinks;