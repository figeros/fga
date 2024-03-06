import React from 'react';

import Artist from "./Artist";

import "./Artists.css";

const Artists = props =>{

    return(
        <div className="outerArtists__Container">
            <p className='artists__Title'>SANATÇILAR</p>
            <div className="innerArtists__Container">
                <Artist />
                <Artist />
            </div>
            
        </div>
    )

}

export default Artists;
