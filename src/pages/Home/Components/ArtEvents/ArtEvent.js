import React from "react";

import "./ArtEvent.css"

const ArtEvent = props =>{
    return(
        <div className="artEvent__Container">
            <img className="artEvent__Image" src={props.img} />
            <p className="artEvent__Title">{props.title}</p>
        </div>

    )
}

export default ArtEvent;