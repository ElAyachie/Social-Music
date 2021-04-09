import ExplicitIcon from "../../assets/explicit.svg";
import axios from 'axios';
import React, { useRef } from "react";
import api from '../../config/api';
import {Dropdown, DropdownButton} from 'react-bootstrap';
import {LoadMusicInterests} from "../search/LoadMusicInterests";

const Track = ({ musicResult }) => {

    const addArtist = () => {
        const loggedInUser = localStorage.getItem("user");
        const foundUser = JSON.parse(loggedInUser);
        const userID = foundUser[0];
        axios.post(api.base_url + "/users/artist_interests/insert", {
            ID: userID,
            ArtistID: musicResult.artist.id,
            ArtistName: musicResult.artist.name,
            ArtistPic: musicResult.artist.picture,
        })
        .then(() => {
            console.log("Successful insert");
            // Reload the localstorage
            LoadMusicInterests();
        });
    }

    const addSong = () => {
        const loggedInUser = localStorage.getItem("user");
        const userInformation = JSON.parse(loggedInUser);
        const userID = userInformation[0];
        axios.post(api.base_url + "/users/song_interests/insert", {
            UserID: userID,
            SongName: musicResult.title,
            SongLink: musicResult.preview,
            ArtistID: musicResult.artist.id,
            ArtistName: musicResult.artist.name,
            AlbumID: musicResult.album.id,
            AlbumPic: musicResult.album.cover
        })
        .then(() => {
            console.log("Successful insert");
            // Reload the localstorage
            LoadMusicInterests();
            
        });
    }

    const addAlbum = () => {
        const loggedInUser = localStorage.getItem("user");
        const foundUser = JSON.parse(loggedInUser);
        const userID = foundUser[0];
        axios.post(api.base_url + "/users/album_interests/insert", {
            UserID: userID,
            AlbumID: musicResult.album.id,
            AlbumName: musicResult.album.title,
            AlbumPic: musicResult.album.cover,
            ArtistID: musicResult.artist.id,
            ArtistName: musicResult.artist.name
        })
        .then(() => {
            console.log("Successful insert");
            // Reload the localstorage
            LoadMusicInterests();
        });
    }
    
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
              <DropdownButton className="drop-up" id="dropdown-button-drop-up" drop="up" title="+">
                    <Dropdown.Item onClick={addSong}>Add Song</Dropdown.Item>
                    <Dropdown.Item onClick={addArtist}>Add Artist</Dropdown.Item>
                    <Dropdown.Item onClick={addAlbum}>Add Album</Dropdown.Item>
              </DropdownButton>
              {
                    musicResult.explicit_content_lyrics ? 
                    <img className="explicit-icon" src={ExplicitIcon} alt="explicit icon" width="90px" height="55" /> : <div />
                }
              <audio className="audio" controls ref={audioRef}>
                  <source src={musicResult.preview} type="audio/mpeg"/>
                  Your browser does not support the audio tag.
              </audio>
          </div>
      </div>
    );
}
  
export default Track;