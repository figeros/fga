import React from "react";

import "./ArtEvent.css"

import Image1 from "../../../../assets/images/artevent_img1.svg";
import Image2 from "../../../../assets/images/artevent_img2.svg";
import Image3 from "../../../../assets/images/artevent_img3.svg";

const ArtEvent = props =>{
    return(
        <div className="artEvent__Container">
            <img className="artEvent__Image" src={props.img} />
            <p className="artEvent__Title">{props.title}</p>
        </div>

    )
}

export default ArtEvent;