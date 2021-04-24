import React from 'react';
import EachFriendProfile from "./EachFriendProfile"
import "./profiles.scss";

function Friends() {

    function ShowFriends() {
        var friendsList = document.getElementById("friends-list");

        if(friendsList.style.display === "none") {
            friendsList.style.display = "flex";
        }
        else {
            friendsList.style.display = "none"
        }
    }

    return (
        <div className="friends-section">
            <button type="button" className="view-button btn btn-primary" onClick={ShowFriends}>
                View All Friends
            </button> 
            <div id="friends-list" className="friends-list list">
                <EachFriendProfile />
            </div>
        </div>
    )
}

export default Friends;