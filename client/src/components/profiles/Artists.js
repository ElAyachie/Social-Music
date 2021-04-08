import React, { useEffect, useState } from "react";
import api from '../../config/api';
import axios from 'axios';
import "./profiles.scss";
import Upvote_Icon from "../../assets/upvote.svg"

const Artists = () => {
    const [artistInterests, setArtistInterests] = useState([]);

    useEffect(() => {
        getArtistInterests();
    }, []);

    const getArtistInterests = () => {
        const loggedInUser = JSON.parse(localStorage.getItem("user"));
        const userID = loggedInUser[0];
        axios.get(api.base_url + '/users/load_artists/get', {UserID: userID})
            .then(response => {
                if (response.data.code === 200) {
                    setArtistInterests(response.data);
                    console.log(response.data);
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
                    <img className="picture" src={artist.ArtistPicture} height="65px" width="65px" alt="Artist"></img>
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