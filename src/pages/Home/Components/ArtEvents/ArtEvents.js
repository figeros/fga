import React from "react";

import ArtEvent from "./ArtEvent";

import "./ArtEvents.css";

import Image1 from "../../../../assets/images/artevent_img1.svg";
import Image2 from "../../../../assets/images/artevent_img2.svg";
import Image3 from "../../../../assets/images/artevent_img3.svg";


const  ArtEvents = () => {

    const artEventsList = [
        {img: Image1, title: "22 Şubat 2024 Tarihinde Gerçekleşen Resim Sergisi" },
        {img: Image2, title:"Açık Galerimiz Birçok Sanatçının Eserlerini Sanat Severlerle Buluşturdu"},
        {img: Image3, title:"Genç Sanatçıların Üretmiş Olduğu Eserler xxx Vakfı Yararına Galerimizde Sergilendi"},
    ]

    return(
        <div className="artEvents__OuterContainer">
            <p className="artEvents__Title">ETKİNLİKLER</p>
            <div className="artEvents__InnerContainer">

                {artEventsList.map((artEvent,index) => {
                    return <ArtEvent key={index} img={artEvent.img} title={artEvent.title}/>
                    })}

            </div>
        </div>
    )

}

export default ArtEvents