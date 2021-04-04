import React, { Component } from 'react';
import "./home.scss";

import profilePic from '../../assets/blankUser.jpg';

import Feed from './feed';

export default class Home extends Component {
    render() {
        return(
            <div id="home" className="container">
                <div className="profile-bar sticky-top">
                    <img src={profilePic} className="pro-pic" alt="profile pic"></img>
                    <h5>John Smith</h5>
                    <h5>@johnsmith</h5>
                    <button>Play My Music</button>
                </div>
                <div className="feed-space">
                    <div className="feed-space-content">
                        <Feed />
                    </div>
                </div>
                <div className="feed-space">
                    <Feed />
                </div>
                <div className="feed-space">
                    <Feed />
                </div>
            </div>
        );
    }
}