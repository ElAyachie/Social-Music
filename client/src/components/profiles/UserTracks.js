import React, { useEffect, useState } from "react";
import api from '../../config/api';
import axios from 'axios';
import "./profiles.scss";
import Upvote_Icon from "../../assets/upvote.svg";
import Explicit_Icon from "../../assets/explicit.svg";

const UserTracks = () => {
    const [songInterests, setSongInterests] = useState([]);
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
    const [userID, setUserID] = useState(user[0]);

    useEffect(() => {
        getSongInterests();
    }, [setSongInterests]);

    const getSongInterests = async e => {
        await axios.get(api.base_url + '/users/load_songs/get', {
                params: {
                    UserID: userID
                }
            })
            .then(function(response) {
                if (response.data.code === 200) {
                    const ais = [];
                    for(var i = 0; i < response.data.songInterests.length; i++) {
                        ais.push(response.data.songInterests[i]);
                    }
                    setSongInterests(
                        ais
                    );
                    console.log(ais);
                    console.log(response.data.songInterests[0]);
                    console.log("Song data recieved");
                }
                else {
                    console.log("Could not recieve data.");
                }
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
                <div className="track">
                    <img className="picture" src={song.AlbumPic} height="55px" width="55px" alt="Album"></img>
                    <h2 className="title">{song.SongName} - {song.ArtistName}</h2>
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