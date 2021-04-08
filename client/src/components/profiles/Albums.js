import React, { useEffect, useState } from "react";
import api from '../../config/api';
import axios from 'axios';
import "./profiles.scss";
import Upvote_Icon from "../../assets/upvote.svg"

const Albums = () => {
    const [albumInterests, setalbumInterests] = useState([]);
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
    const [userID, setUserID] = useState(user[0]);

    useEffect(() => {
        getalbumInterests();
    }, [setalbumInterests]);

    const getalbumInterests = async e => {
        await axios.get(api.base_url + '/users/load_albums/get', {
                params: {
                    UserID: userID
                }
            })
            .then(function(response) {
                if (response.data.code === 200) {
                    const ais = [];
                    for(var i = 0; i < response.data.albumInterests.length; i++) {
                        ais.push(response.data.albumInterests[i]);
                    }
                    setalbumInterests(
                        ais
                    );
                    console.log(ais);
                    console.log(response.data.albumInterests[0]);
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
        (albumInterests.length !== 0) ? (
            <div>
            { 
            albumInterests.map((album, index) => (
            <div>
                <div className="jc-cente">
                    <img className="picture" src={album.AlbumPic} height="65px" width="65px" alt="Artist"></img>
                </div>
                <h2 className="name">{album.AlbumName}</h2>
                <img className="upvote-icon" src={Upvote_Icon} alt="Upvote" width="23px" height="23px"></img>
            </div>
            ))}</div>):(
                <h5>Nothing to show...</h5>
              )
            }
          </div>
          );
      }

export default Albums;