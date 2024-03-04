import React from 'react';

import Artist from "./Artist";

import "./Artists.css";

const Artists = props =>{

    return(
        <div className="artistsContainer">
            <p>SANATÇILAR</p>
            <div className="innerArtistContainer">
                <Artist />
                <Artist />
            </div>
            
        </div>
    )

}

export default Artists;
