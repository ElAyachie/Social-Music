import React from "react";
import {Dropdown, DropdownButton} from 'react-bootstrap';
import axios from 'axios';
import api from '../../config/api';

function AddMusicInterest(musicResult, artistResult, albumResult) {
    const addArtist = () => {
        axios.post(api.base_url + "/users/artistinterests/insert", {
            ID: 14,
            ArtistID: artistResult.id,
            ArtistName: artistResult.name,
            ArtistPic: artistResult.picture
        })
        .then(() => {
            alert("Successful insert");
        });
    };

    const addSong = () => {
        axios.post(api.base_url + "/users/songinterests/insert", {
            ID: 14,
            SongName: musicResult.name,
            SongLink: musicResult.link,
            ArtistID: artistResult.id,
            ArtistName: artistResult.name,
            AlbumID: albumResult.id,
            AlbumPic: albumResult.picture
        })
        .then(() => {
            alert("Successful insert");
        });
    };

    const addAlbum = () => {
        axios.post(api.base_url + "/users/albuminterest/insert", {
            ID: 14,
            AlbumID: albumResult.id,
            AlbumName: albumResult.name,
            AlbumPic: albumResult.picture,
            ArtistID: artistResult.id,
            ArtsitName: artistResult.name
        })
        .then(() => {
            alert("Successful insert");
        });
    };
    
    return (
        <DropdownButton className="drop-up" id="dropdown-button-drop-up" drop="up" title="+">
            <Dropdown.Item onClick={addSong}>Add Song</Dropdown.Item>
            <Dropdown.Item onClick={addArtist}>Add Artist</Dropdown.Item>
            <Dropdown.Item onClick={addAlbum}>Add Album</Dropdown.Item>
        </DropdownButton>
    );
}

export default AddMusicInterest;