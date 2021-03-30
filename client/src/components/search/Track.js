import ExplicitIcon from "../../assets/explicit.svg";
import React, { useRef } from "react";
import AddMusicInterest from './AddMusicInterest';

const Track = ({ musicResult }) => {

    const audioRef = useRef();

    if(audioRef.current) {
        audioRef.current.load();
    }

    
    return (
      <div className="card result" id={"musicResult" + musicResult.id}>
          <div className="card-body">
              <img src={musicResult.album.cover} alt={musicResult.artist.name} />
              <br />
              <h5 className="card-title header">{musicResult.artist.name} - {musicResult.title}</h5>
              <AddMusicInterest musicResult={musicResult} artistResult={musicResult.artist} albumResult={musicResult.album}></AddMusicInterest>
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