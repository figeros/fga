import React from 'react';

import "./Artist.css";

const Artist = props =>{

    return(
        /*<div>
            <div className="text">
                <div>
                    <p>{props.name}</p>
                </div>
                <p>{props.job}</p>
                <p>{props.year}</p>
                <p>{props.city}</p>
                <p>{props.desc}</p>
            </div>
            <div className="image">
                <img src={props.img} />
            </div>
        </div>*/

        <div className="artistOuterContainer">
            <div className="artistInfo">
                <div className="nameBox">AHMET MEHMET</div>
                <p>RESSAM</p>
                <p>1977</p>
                <p>BURSA</p>
                <p>SÜRREAL ÇİZİMLER ÜZERİNE ÇALIŞIYOR</p>
            </div>
            <div className="artistImg">
                <img src={require("../../../../assets/images/artistImage.svg").default}/>
            </div>
        </div>
    )

}

export default Artist;