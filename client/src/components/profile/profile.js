import React, { Component } from 'react';
import './profile.scss';
import UserProfile from "../profiles/UserProfile"

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
            </div>         
        );
    }
}