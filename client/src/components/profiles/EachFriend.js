import React, { useState } from 'react';
import api from '../../config/api';
import axios from 'axios';
import "./profiles.scss";
import Profile_Pic from "../../assets/profile_1_pic.jfif"
import { Button } from "react-bootstrap";

function EachFriend() {
    const [users] = useState(JSON.parse(localStorage.getItem("users")));
    const [currentUser] = useState(JSON.parse(localStorage.getItem("user")));
    const [userID] = useState(currentUser.UserID);

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
                <img className="picture" src={Profile_Pic} width="45px" height="45px" alt="Profile pic"></img>
                <h4 className="name">{user.Username}</h4>
                <Button id={index} onClick={addFriend} alt="Upvote" data-userid={user.UserID} data-username={user.Username}>+</Button>
            </div>
            ))}</div>):(
                <h5>Nothing to show...</h5>
              )
            }
          </div>
    )
}

export default EachFriend;