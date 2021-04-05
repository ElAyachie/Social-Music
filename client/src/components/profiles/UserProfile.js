import React from 'react';
import "./profiles.scss";
import UserInfo from "./UserInfo"
import Friends from "./Friends"
import TopMusic from "./TopMusic"
import Post from "../post/post"

function UserProfile() {

    return (
        <div className="user-profile">
            <div className="left-side">
                <div className="corner">
                    <UserInfo />
                    <Friends />
                </div>
                <TopMusic />
            </div>
            <div className="right-side">
                <Post />
                <Post />
            </div>
        </div>
    )
}

export default UserProfile;