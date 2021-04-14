import React, { useState } from 'react';
import EachFriend from "./EachFriend"
import "./profiles.scss";

function Friends() {

    const [friendsListDisplay, setFriendsListDisplay] = useState(false);

    function ShowFriends() {
        let friendsList = document.getElementsByClassName("friends-list")[0];

        if(friendsListDisplay == false) {
            friendsList.style.display = "flex";
            setFriendsListDisplay(true);
            return;
        }

        if(friendsListDisplay == true) {
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
                <EachFriend />
                <EachFriend />
                <EachFriend />
                <EachFriend />
                <EachFriend />
                <EachFriend />
                <EachFriend />
                <EachFriend />
                <EachFriend />
                <EachFriend />
            </div>
        </div>
    )
}

export default Friends;