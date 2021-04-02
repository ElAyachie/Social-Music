import React, { Component } from 'react';
import './profile.scss';
import UserProfile from "../profiles/UserProfile"

import profilePic from '../../assets/blankUser.jpg';

export default class Profile extends Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }

    render() {
        return(
            <div>
                <UserProfile />
            <div className="profile">
                <img src={profilePic} className="profileImg" alt="Profile pic" />
                <h3>Profile</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
            </div>
            
        );
    }
}