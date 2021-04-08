import React, { useEffect, useState } from "react";
import api from '../../config/api';
import axios from 'axios';
import "./profiles.scss";
import Upvote_Icon from "../../assets/upvote.svg"

const Albums = () => {
    const [albumInterests, setAlbumInterests] = useState([]);

    useEffect(() => {
        getAlbumInterests();
    }, []);

    const getAlbumInterests = () => {
        const loggedInUser = JSON.parse(localStorage.getItem("user"));
        const userID = loggedInUser[0];
        axios.get(api.base_url + '/users/load_albums/get',{
            UserID: userID,
        })
            .then(response => {
                if (response.data.code === 200) {
                    setAlbumInterests(response.data);
                    console.log(response.data);
                    console.log("Album data recieved.");
                }
                else {
                    console.log("Album load successful.");
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
                    <img className="picture" src={album.AlbumPicture} height="65px" width="65px" alt="Artist"></img>
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