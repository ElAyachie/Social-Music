import React from 'react';
import EachFriend from "./EachFriend"
import "./profiles.scss";

// Add friends module attached to the home page.
// Displays a list of users to the user they can add.
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
                View All Users
            </button> 
            <div id="friends-list-ad" className="friends-list list">
                <EachFriend />
            </div>
        </div>
    )
}

export default AddFriends;