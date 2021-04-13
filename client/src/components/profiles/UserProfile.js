import React from "react";
import "./profiles.scss";

import UserInfo from "./UserInfo"
import UserMusic from "./UserMusic"
import Friends from "./Friends"
import Post from "../post/post"

function UserProfile() {
    return (
        <div className="user-profile">
            <div className="left-side">
                <UserInfo />
                <UserMusic />
                <Friends />
            </div>
            <div className="right-side">
                <div className="right-side-content">
                    <Post />
                    <Post />
                    <Post />
                </div>
            </div>
        </div>
    );
}
export default UserProfile;