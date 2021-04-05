import React from 'react';
import EachFriend from "./EachFriend"
import "./profiles.scss";

function Friends() {

    return (
        <div className="friends-section">
            <div className="list">
                <EachFriend />
                <EachFriend />
                <EachFriend />
                <EachFriend />
                <EachFriend />
            </div>
            <button type="button" class="view-button btn btn-primary">View All Friends</button> 
        </div>
    )
}

export default Friends;