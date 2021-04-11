import React from 'react';
import EachFriend from "./EachFriend"
import "./profiles.scss";

function Friends() {

    return (
        <div className="friends-section">
            <button type="button" className="view-button btn btn-primary">
                View All Friends
            </button> 
            <div className="list">
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