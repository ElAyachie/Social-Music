import React from 'react';
import EachFriend from "./EachFriend"
import "./profiles.scss";

function Friends() {

    function ShowFriends() {
        var friendsList = document.getElementById("friends-list");

        if(friendsList.style.display === "flex") {
            friendsList.style.display = "none";
        }
        else {
            friendsList.style.display = "flex";
        }
    }

    return (
        <div className="friends-section">
            <button type="button" className="view-button btn btn-primary" onClick={ShowFriends}>
                View All Friends
            </button> 
            <div id="friends-list" className="friends-list">
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
                <EachFriend />
                <EachFriend />
            </div>
        </div>
    )
}

export default Friends;