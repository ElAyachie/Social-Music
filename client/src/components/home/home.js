import React, { Component } from 'react';
import "./home.scss";

import profilePic from '../../assets/blankUser.jpg';
import ExpandIcon from '../../assets/expand-icon.png'

import Feed from './feed';
import TopMusic from '../profiles/TopMusic';
import Friends from '../profiles/Friends';

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