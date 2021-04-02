import React from 'react';
import "./profiles.scss";
import Upvote_Icon from "../../assets/upvote.svg"




function Artists() {


    return (
        <div className="artist">
            <div className="jc-cente">
                <img className="picture" src="https://api.deezer.com/album/69319552/image" height="65px" width="65px"></img>
            </div>
            <h2 className="name">Drake</h2>
            <img className="upvote-icon" src={Upvote_Icon}></img>
        </div>
        
    )
}

export default Artists;