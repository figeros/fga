import React from "react";

import { useState, useEffect } from "react";

import "./Navbar.css"

import Navlinks from "./Navlinks";
import SideDrawer from "../Sidedrawer/Sidedrawer";
import Backdrop from "../../../Backdrop/Backdrop";

import logo from "../../../../../../assets/images/logos/logo.svg"


const Navbar = () =>{


    const [show,setShow] = useState(false);

    const openSDrawerHandler = () =>{
        setShow(true);
    }

    const closeSDrawerHandler = () =>{
        setShow(false);
    }

    return(
        <React.Fragment>
        <nav>
            <img className="logo" src={logo}/>
            <div className="navbar__HeaderNavlinks">
                <Navlinks/>
            </div>
            <button className="navbar__DrawerBtn" onClick={openSDrawerHandler}>
                <div></div>
                <div></div>
                <div></div>
            </button>
        </nav>

            {show && <Backdrop className="drawerfragment" onClick={closeSDrawerHandler} />}  
            <SideDrawer className="drawerfragment" show={show}>
            <div className="navbar__DrawerNavlinks ">
                <Navlinks/>
            </div>
            </SideDrawer>

        </React.Fragment>


    )

     
}

export default Navbar