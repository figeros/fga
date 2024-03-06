
import "./ArtPieces.css"

import artwork1 from "../../../../assets/images/artwork1.svg";
import artwork2 from "../../../../assets/images/artwork2.svg";
import artwork3 from "../../../../assets/images/artwork3.svg";
import artwork4 from "../../../../assets/images/artwork4.svg";

const ArtPieces = () => {

    const artworks = [
        {imgURL: artwork1},
        {imgURL: artwork2},
        {imgURL: artwork3},
        {imgURL: artwork4}
    ]
    
    return (  
        <div className="artPieces__Container">
            <p className="artPieces__Title">ESERLER</p>
            <div className="artPieces__ArtworksContainer">
                {artworks.map((artwork,index) => {
                        return <img key={index} src={artwork.imgURL}/>
                    })}
            </div>
        </div>
    );
}
 
export default ArtPieces;