import React, { Component } from 'react';
import "./home.scss";

import profilePic from '../../assets/blankUser.jpg';
import ExpandIcon from '../../assets/expand-icon.png'

import Feed from './feed';
import TopMusic from '../profiles/TopMusic';
import Friends from '../profiles/Friends';
import NewPost from './NewPost';

export default class Home extends Component {
    constructor(props) {
        super(props);

        this.createNewPost = this.createNewPost.bind(this);
    }

    createNewPost() {
        // Get the modal
        var modal = document.getElementById("new-post");

        // Get the <span> element that closes the modal
        var span = document.getElementsByClassName("close")[0];

        modal.style.display = "block";

        // When the user clicks on <span> (x), close the modal
        span.onclick = function() {
            modal.style.display = "none";
        }

        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        }
    }

    render() {
        return(
            <div id="home" className="container">
                <div className="profile-bar sticky-top">
                    <img src={profilePic} className="pro-pic" alt="profile pic"></img>
                    <h5>John Smith</h5>
                    <h5>@johnsmith</h5>
                    <button className="play-music-btn">Play My Music</button>
                    <button className="new-post-btn" onClick={this.createNewPost}>New Post</button>
                </div>
                <NewPost/>
                <div className="feed-space">
                    <div className="feed-expand">
                        <img src={ExpandIcon} className="expand-icon" alt="Expand Icon" />
                    </div>
                    <div className="feed-space-content">
                        <Feed />
                    </div>
                </div>
                <div className="music-space">
                    <div>
                        <img src={ExpandIcon} className="expand-icon" alt="Expand Icon" />
                    </div>
                    <div className="music-space-content">
                        <h3>My Music</h3>
                        <TopMusic />
                    </div>                
                </div>
                <div className="friend-space">
                    <div>
                        <img src={ExpandIcon} className="expand-icon" alt="Expand Icon" />
                    </div>
                    <div className="friend-space-content">
                        <Friends />
                    </div>
                </div>
            </div>
        );
    }
}