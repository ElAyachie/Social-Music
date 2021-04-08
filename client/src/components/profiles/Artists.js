import React, { useEffect, useState } from "react";
import axios from 'axios';
import "./profiles.scss";

import Upvote_Icon from "../../assets/upvote.svg"

import api from '../../config/api';

const Artists = () => {
    const [artistInterests, setArtistInterests] = useState([]);
    const [user, setUser] = useState([]);
    const [userID, setUserID] = useState(0);

    useEffect(() => {
        const loggedInUser = localStorage.getItem("user");
        if(loggedInUser) {
            const foundUser = JSON.parse(loggedInUser);
            setUser(foundUser);
            setUserID(user[0]);
        };
    }, []);

    useEffect(() => {
        getArtistInterests();
    }, [setArtistInterests]);

    const getArtistInterests = async e => {
        await axios.get(api.base_url + '/users/load_artists/get', {
                params: {
                    UserID: 6
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
                <div>
                    {
                        artistInterests.map((artist) => 
                            <div> 
                                <div className="jc-cente">
                                    <img className="picture" src={artist.ArtistPic} height="65px" width="65px" alt="Artist" />
                                </div>
                                <h2 className="name">{artist.ArtistName}</h2>
                                <img className="upvote-icon" src={Upvote_Icon} alt="Upvote" width="23px" height="23px" />
                            </div>
                        )
                    }
                </div>
            }
        </div>
    );
}

export default Artists;

/*
artistInterests.map((artist, index) => (
<div>
    <div className="jc-cente">
        <img className="picture" src={artist.ArtistPicture} height="65px" width="65px" alt="Artist"></img>
    </div>
    <h2 className="name">{artist.ArtistName}</h2>
    <img className="upvote-icon" src={Upvote_Icon} alt="Upvote" width="23px" height="23px"></img>
</div>
))

artistInterests.map((artist) => 
    <div> 
        <div className="jc-cente">
            <img className="picture" src={artist.ArtistPicture} height="65px" width="65px" alt="Artist" />
        </div>
        <h2 className="name">{artist.ArtistName}</h2>
        <img className="upvote-icon" src={Upvote_Icon} alt="Upvote" width="23px" height="23px" />
    </div>
)
*/