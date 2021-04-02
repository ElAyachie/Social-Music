import React from 'react';
import "./profiles.scss";
import Profile_Pic from "../../assets/profile_1_pic.jfif"

function UserInfo() {

    return (
        <div className="user-info">
            <img className="picture" src={Profile_Pic} width="95px" height="95px"></img>
            <h1 className="name">John Smith</h1>
            <h3 className="bio">This is my bio. I love to listen to every genre of music. Add me as a friend!</h3>
        </div>
    )
}

export default UserInfo;