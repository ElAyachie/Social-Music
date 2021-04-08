import React, { useEffect, useState } from "react";
import api from '../../config/api';
import axios from 'axios';
import "./profiles.scss";
import Upvote_Icon from "../../assets/upvote.svg"

const Artists = () => {
    const [artistInterests, setArtistInterests] = useState([]);
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
    const [userID, setUserID] = useState(user[0]);

    useEffect(() => {
        getArtistInterests();
    }, [setArtistInterests]);

    const getArtistInterests = async e => {
        await axios.get(api.base_url + '/users/load_artists/get', {
                params: {
                    UserID: userID
                }
            })
            .then(function(response) {
                if (response.data.code === 200) {
                    const ais = [];
                    for(var i = 0; i < response.data.artistInterests.length; i++) {
                        ais.push(response.data.artistInterests[i]);
                    }
                    setArtistInterests(
                        ais
                    );
                    console.log(ais);
                    console.log(response.data.artistInterests[0]);
                    console.log("Artist data recieved");
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
        <div className="artist">
            {
            (artistInterests.length !== 0) ? (
            <div>
            { 
            artistInterests.map((artist, index) => (
            <div>
                <div className="jc-cente">
                    <img className="picture" src={artist.ArtistPic} height="65px" width="65px" alt="Artist"></img>
                </div>
                <h2 className="name">{artist.ArtistName}</h2>
                <img className="upvote-icon" src={Upvote_Icon} alt="Upvote" width="23px" height="23px"></img>
            </div>
           ))}</div>):(
          <h5>Nothing to show...</h5>
        )
           }
    </div>
    );
}

export default Artists;