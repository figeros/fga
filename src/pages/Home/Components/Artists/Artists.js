import React from 'react';

import Artist from "./Artist";

import "./Artists.css";

import artistImage from "../../../../assets/images/artistImage.svg";

const Artists = props =>{

// json şeklinde alınan bilgiler bu diziye konularak
// .map fonksiyonu ile her bir nesne için ayrı artist componenti oluşturulabilir

    const artistsList = [
        {
            name:"AHMET MEHMET",
            job:"RESSAM",
            year:"1997",
            city:"BURSA",
            desc:"SÜRREAL ÇİZİMLER ÜZERİNE ÇALIŞIYOR",
            img: artistImage
        },
        {
            name:"AHMET MEHMET",
            job:"RESSAM",
            year:"1997",
            city:"BURSA",
            desc:"SÜRREAL ÇİZİMLER ÜZERİNE ÇALIŞIYOR",
            img: artistImage
        }
    ]

    return(
        /*<div className="outerArtists__Container">
            <p className='artists__Title'>SANATÇILAR</p>
            <div className="innerArtists__Container">
                <Artist />
                <Artist />
            </div>
        </div>*/

        <div className="artists__OuterContainer">
            <p className='artists__Title'>SANATÇILAR</p>
            <div className="artists__InnerContainer">

                {artistsList.map((artist,index)=> {

                    return <Artist 
                    key={index} 
                    name={artist.name} 
                    job={artist.job} 
                    year={artist.year} 
                    city={artist.city} 
                    desc={artist.desc} 
                    img={artist.img} />

                })}

            </div>
            
        </div>
    )

}

export default Artists;
