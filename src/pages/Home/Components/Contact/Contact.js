import React from "react";

import "./Contact.css";

const Contact = () =>{

    return(
        <div className="contact__OuterContainer">
            <div className="contact__MapContainer">
                <img className="mapPlaceholderImg" src={require("../../../../assets/images/google-maps-placeholder.svg").default}/>
            </div>
            <div className="contact__InfoContainer">
                <p>İletişim</p>
                <p>Adres: Downtown</p>
                <p>Tel:0 224 224 24 24</p>
                <p>Mesaj:</p>
                <div className="contact__Message"></div>
            </div>

        </div>
    )

}

export default Contact;