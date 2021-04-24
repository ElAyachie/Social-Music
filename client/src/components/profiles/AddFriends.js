import React from 'react';
import EachFriend from "./EachFriend"
import "./profiles.scss";

function AddFriends() {

    function ShowFriends() {
        var friendsList = document.getElementById("friends-list-ad");

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
            <div id="friends-list-ad" className="friends-list list">
                <EachFriend />
            </div>
        </div>
    )
}

export default AddFriends;