import React, { useEffect, useState } from "react";
import api from '../../config/api';
import axios from 'axios';
import "./profiles.scss";
import Upvote_Icon from "../../assets/upvote.svg";
import Explicit_Icon from "../../assets/explicit.svg";

const UserTracks = () => {
    const [songInterests, setSongInterests] = useState([]);

    useEffect(() => {
        getSongInterests();
    }, []);

    const getSongInterests = () => {
        const loggedInUser = JSON.parse(localStorage.getItem("user"));
        const userID = loggedInUser[0];
        axios.get(api.base_url + '/users/load_songs/get', {
            UserID: userID
        })
            .then(response => {
                if (response.data.code === 200) {
                    setSongInterests(response.data);
                    console.log(response.data);
                    console.log("Song data recieved");
                }
                else {
                    console.log("Song load successful.");
                }
            })
            .catch(function(error) {
                console.log(error);
            });
    };

    return (
        <div className="track">
        {
        (songInterests.length !== 0) ? (
            <div>
            { 
            songInterests.map((song, index) => (
            <div>
                <img className="picture" src={song.AlbumPicture} height="55px" width="55px" alt="Album"></img>
                <h2 className="title">{song.songName}</h2>
                <img className="upvote-icon" src={Upvote_Icon} alt="Upvote"></img>
                <img className="explicit-icon" src={Explicit_Icon} height="20px" width="40px" alt="Explicit"></img>
                </div>
           ))}</div>):(
          <h5>Nothing to show...</h5>
          )
           }
 </div>
 );
}

export default UserTracks;