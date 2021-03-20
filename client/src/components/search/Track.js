import AddIcon from "../../assets/add.svg";
import ExplicitIcon from "../../assets/explicit.svg";
import React, { useRef } from "react";

const Track = ({ musicResult }) => {

    const audioRef = useRef();

    if(audioRef.current) {
        audioRef.current.load();
    }

    
    return (
      <div className="card result">
          <div className="card-body">
              <img src={musicResult.album.cover} alt={musicResult.artist.name} />
              <br />
              <h5 className="card-title header">{musicResult.artist.name} - {musicResult.title}</h5>
              <img className="add-icon" src={AddIcon} height="50px" width="50px" alt="add-icon"/>
              {musicResult.explicit_content_lyrics && <img className="explicit-icon" src={ExplicitIcon} alt="explicit icon" width="90px" height="55" />}
              <audio className="audio" controls ref={audioRef}>
                  <source src={musicResult.preview} type="audio/mpeg"/>
                  Your browser does not support the audio tag.
              </audio>
          </div>
      </div>
    );
}
  
export default Track;