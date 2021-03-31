import React from 'react';
import "./profiles.scss";
import Profile_Pic from "../../assets/profile_1_pic.jfif"




function EachFriend() {

    return (
        <div className="friend">
            <img className="picture" src={Profile_Pic} width="45px" height="45px"></img>
            <h4 className="name">Sam Smith</h4>
        </div>
    )
}

export default EachFriend;