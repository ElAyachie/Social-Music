import React, { useState } from 'react';
import api from '../../config/api';
import axios from 'axios';
import "./profiles.scss";
import blankProfileImg from '../../assets/blankUser.jpg';

// Each friend entry in the AddFriends component
function EachFriend() {
    const [users] = useState(JSON.parse(localStorage.getItem("users")));
    const [currentUser] = useState(JSON.parse(localStorage.getItem("user")));
    const [userID] = useState(currentUser.UserID);

    // Verifies that the user is not already added as a friend.
    // Stores the new friend entry into the local storage and database.
    const addFriend = async e => {
        let friendList = JSON.parse(localStorage.getItem("friends"));
        let otherUserID = e.target.dataset.userid;
        let username = e.target.dataset.username;
        // check if the user they are adding is themselves
        if (otherUserID === userID) {
            return;
        }
        // Check if the user already has the friend in their list
        var found = false;
        for (let i = 0; i < friendList.length; i++){
            if (friendList[i].FriendID === otherUserID) {
                found = true;
                break;
            }
        }
        if (!found) {
            const friend = {
                UserID: userID,
                FriendID: otherUserID,
            };
            axios.post(api.base_url + "/users/friends/insert", friend)
                .then(function(response) {
                    console.log("Successful insert");
                    // Add to the local storage
                    const dataObject = {
                        FriendID: otherUserID,
                        Username: username
                    };
                    friendList.push(dataObject);
                    console.log("Friend data recieved");
                    localStorage.setItem("friends", JSON.stringify(friendList));
                })
                .catch(function(error) {
                    console.log(error);
                });
        }
        else {
            return alert("friend already added.");
        }
    };

    return (
        <div>
        {
        (users.length !== 0) ? (
            <div>
            { 
            users.map((user, index) => (
                <div className="friend" key={index}>
                <img className="picture" src={blankProfileImg} width="45px" height="45px" alt="Profile pic"></img>
                <h4 className="name">{user.Username}</h4>
                <button className="upvote-icon" id={index} onClick={addFriend} alt="Upvote" data-userid={user.UserID} data-username={user.Username}>+</button>
            </div>
            ))}</div>):(
                <h5>Nothing to show...</h5>
              )
            }
          </div>
    )
}

export default EachFriend;