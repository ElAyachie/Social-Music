import React, { useState } from "react";
import api from '../../config/api';
import axios from 'axios';
import "./profiles.scss";
import { Button } from "react-bootstrap";

const UserTracks = () => {
    const [songInterests, setSongInterests] = useState(JSON.parse(localStorage.getItem("song_interests")));
    const [user] = useState(JSON.parse(localStorage.getItem("user")));
    const [userID] = useState(user.UserID);

    const deleteSongInterest = async e => {
        let elementID = e.target.id;
        let songID = e.target.dataset.songid;
        const song = {
            UserID: userID,
            SongID: songID 
        };
        await axios.delete(api.base_url + "/users/song_interests/delete", {data: song})
            .then(response => {
                console.log(response);
                songInterests.splice(elementID, 1);
                localStorage.setItem("song_interests", JSON.stringify(songInterests));
                setSongInterests(JSON.parse(localStorage.getItem("song_interests")));
            })      
            .catch(function(error) {
                console.log(error);
            });  
    };

    return (
        <div>
        {
        (songInterests.length !== 0) ? (
            <div>
            { 
            songInterests.map((song, index) => (
                <div className="track" key={index}>
                    <img className="picture" src={song.AlbumPic} height="55px" width="55px" alt="Album"></img>
                    <h2 className="title">{song.SongName} - {song.ArtistName}</h2>
                    <Button id={index} onClick={deleteSongInterest} alt="Upvote" data-songname={song.SongName}>-</Button>
                </div>
           ))}</div>):(
          <h5>Nothing to show...</h5>
          )
           }
 </div>
 );
}

export default UserTracks;