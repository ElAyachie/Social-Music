import React, { useEffect, useState } from "react";
import api from '../../config/api';
import axios from 'axios';
import "./profiles.scss";
import Upvote_Icon from "../../assets/upvote.svg"
import { Button } from "react-bootstrap";

const Albums = () => {
    const [albumInterests, setAlbumInterests] = useState(JSON.parse(localStorage.getItem("album_interests")));
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
    const [userID, setUserID] = useState(user.UserID);

    const deleteAlbumInterest = async e => {
        let elementID = e.target.id;
        let albumID = e.target.dataset.albumid;
        const album = {
            UserID: userID,
            AlbumID: albumID 
        };
        await axios.delete(api.base_url + "/users/album_interests/delete", {data: album})
            .then(response => {
                console.log(response);
                albumInterests.splice(elementID, elementID + 1);
                localStorage.setItem("album_interests", JSON.stringify(albumInterests));
                setAlbumInterests(JSON.parse(localStorage.getItem("album_interests")));
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
            <div className="artist" key={index}>
                <div className="jc-cente">
                    <img className="picture" src={album.AlbumPic} height="65px" width="65px" alt="Artist"></img>
                </div>
                <h2 className="name">{album.AlbumName}</h2>
                <Button id={index} onClick={deleteAlbumInterest} alt="Upvote" data-albumid={album.AlbumID}>-</Button>
            </div>
            ))}</div>):(
                <h5>Nothing to show...</h5>
              )
            }
          </div>
          );
      }

export default Albums;