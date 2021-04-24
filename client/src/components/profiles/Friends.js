import React, { useState } from 'react';
import EachFriendProfile from "./EachFriendProfile"
import "./profiles.scss";

function Friends() {
    const [friendsListDisplay, setFriendsListDisplay] = useState(false);

    function ShowFriends() {
        var friendsList = document.getElementById("friends-list");

        if(friendsListDisplay === false) {
            friendsList.style.display = "flex";
            setFriendsListDisplay(true);
            return;
        }

        if(friendsListDisplay === true) {
            friendsList.style.display = "none"
            setFriendsListDisplay(false);
            return;
        }
    }

    return (
        <div className="friends-section">
            <button type="button" className="view-button btn btn-primary" onClick={ShowFriends}>
                View All Friends
            </button> 
            <div className="friends-list list">
                <EachFriendProfile />
            </div>
        </div>
    )
}

export default Friends;