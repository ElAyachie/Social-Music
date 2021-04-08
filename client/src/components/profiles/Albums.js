import React, { useEffect, useState } from "react";
import api from '../../config/api';
import axios from 'axios';
import "./profiles.scss";
import Upvote_Icon from "../../assets/upvote.svg"

const Albums = () => {
    const [albumInterests, setAlbumInterests] = useState([]);
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
    const [userID, setUserID] = useState(user[0]);

    useEffect(() => {
        getAlbumInterests();
    }, [setAlbumInterests]);

    const getAlbumInterests = async e => {
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
                    setAlbumInterests(
                        ais
                    );
                    console.log(ais);
                    console.log(response.data.albumInterests[0]);
                    console.log("Album data recieved");
                }
                else {
                    console.log("Could not recieve data.");
                }
            })
            .catch(function(error) {
                console.log(error);
            });
    };

    const removeAlbumInterests = async e => {
        await axios.remove(api.base_url + '/users/load_albums/remove', {
                params: {
                    UserID: userID,
                    AlbumID: 13
                }
            })
            .then(function(response) {
                if (response.data.code === 200) {
                    console.log("Album entry deleted");
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
        (albumInterests.length !== 0) ? (
            <div>
            { 
            albumInterests.map((album, index) => (
            <div className="artist">
                <div className="jc-cente">
                    <img className="picture" src={album.AlbumPic} height="65px" width="65px" alt="Artist"></img>
                </div>
                <h2 className="name">{album.AlbumName}</h2>
                <img className="upvote-icon" src={Upvote_Icon} onClick={removeAlbumInterests} alt="Upvote" width="23px" height="23px"></img>
            </div>
            ))}</div>):(
                <h5>Nothing to show...</h5>
              )
            }
          </div>
          );
      }

export default Albums;