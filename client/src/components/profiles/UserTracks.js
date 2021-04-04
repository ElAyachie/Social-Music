import React from 'react';
import "./profiles.scss";
import Upvote_Icon from "../../assets/upvote.svg"
import Explicit_Icon from "../../assets/explicit.svg"

function UserTracks() {

    return (
        <div className="track">
            <img className="picture" src="https://api.deezer.com/album/69319552/image" height="55px" width="55px" alt="Album"></img>
            <h2 className="title">Drake - In My Feelings</h2>
            <img className="upvote-icon" src={Upvote_Icon} alt="Upvote"></img>
            <img className="explicit-icon" src={Explicit_Icon} height="20px" width="40px" alt="Explicit"></img>
        </div>
        
    )
}

export default UserTracks;