import React, { Component } from 'react';
import "./home.scss";

import profilePic from '../../assets/blankUser.jpg';
import ExpandIcon from '../../assets/expand-icon.png'

import Feed from './feed';
import UserMusic from '../profiles/UserMusic';
import AddFriends from '../profiles/AddFriends';
import NewPost from './NewPost';

export default class Home extends Component {
    constructor(props) {
        super(props);

        this.createNewPost = this.createNewPost.bind(this);
        this.expandFeedSection = this.expandFeedSection.bind(this);
        this.expandMusicSection = this.expandMusicSection.bind(this);
        this.expandFriendSection = this.expandFriendSection.bind(this);

        this.state = {
            user: JSON.parse(localStorage.getItem("user"))
        }
    }

    createNewPost() {
        // Get the post
        var post = document.getElementById("new-post");

        // Get the <span> element that closes the post
        var span = document.getElementsByClassName("close")[0];

        post.style.display = "block";

        // When the user clicks on <span> (x), close the post
        span.onclick = function() {
            post.style.display = "none";
        }

        // When the user clicks anywhere outside of the post, close it
        window.onclick = function(event) {
            if (event.target === post) {
                post.style.display = "none";
            }
        }
    }

    expandFeedSection() {
        //var section = document.getElementById("feed-space");
        var content = document.getElementById("feed-space-content");

        if (content.style.height === "1000px") {
            content.style.height = "500px";
        }
        else {
            content.style.height = "1000px";
        }
    }

    expandMusicSection() {
        var content = document.getElementById("music-space-content");

        if (content.style.height === "1000px") {
            content.style.height = "500px";
        }
        else {
            content.style.height = "1000px";
        }
    }

    expandFriendSection() {
        var content = document.getElementById("friend-space-content");

        if (content.style.height === "1000px") {
            content.style.height = "500px";
        }
        else {
            content.style.height = "1000px";
        }
    }

    render() {
        return(
            <div id="home" className="container">
                <div className="profile-bar sticky-top">
                    <img src={profilePic} className="pro-pic" alt="profile pic"></img>
                    <h5>{this.state.user.Name}</h5>
                    <h5>@{this.state.user.Username}</h5>
                    <button className="play-music-btn">Play My Music</button>
                    <button className="new-post-btn" onClick={this.createNewPost}>New Post</button>
                </div>
                <NewPost/>
                <div id="feed-space" className="feed-space">
                    <div className="feed-expand">
                        <button className="expand-icon-btn" onClick={this.expandFeedSection}>
                            <img src={ExpandIcon} className="expand-icon" alt="Expand Icon" />
                        </button>
                    </div>
                    <div id="feed-space-content" className="feed-space-content">
                        <Feed />
                    </div>
                </div>
                <div className="music-space">
                    <div>
                        <button className="expand-icon-btn" onClick={this.expandMusicSection}>
                            <img src={ExpandIcon} className="expand-icon" alt="Expand Icon" />
                        </button>                    
                    </div>
                    <div id="music-space-content" className="music-space-content">
                        <h3>My Music</h3>
                        <UserMusic />
                    </div>                
                </div>
                <div className="friend-space">
                    <div>
                        <button className="expand-icon-btn" onClick={this.expandFriendSection}>
                            <img src={ExpandIcon} className="expand-icon" alt="Expand Icon" />
                        </button>                    
                    </div>
                    <div id="friend-space-content" className="friend-space-content">
                        <AddFriends />
                    </div>
                </div>
            </div>
        );
    }
}