import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./header.scss";

import musicNotes from "../../assets/music-notes.png";

export default class Header extends Component 
{
    constructor(props) {
        super(props);

        this.setSearchQuery = this.setSearchQuery.bind(this);

        this.state = {
            searchQuery: ''
        }
    }

    setSearchQuery(e)
    {
        this.setState({
            searchQuery: e.target.value
        });
    }

    render()
    {
        return (
            <div id="header">
                <nav className="navbar navbar-expand-lg bg-light navbar-light h-collapse navbar-custom">
                    <div className="container nav-div">
                        <div>
                            <Link to="/home" className="navbar-brand">
                                <img src={musicNotes} id="music-notes" alt="Music Notes" />
                                Social Music
                            </Link>
                        </div>
                        <div id="search">
                            <input type="text" placeholder="Search Music, Interests and more..." className="search-bar" onChange={this.setSearchQuery} />
                        </div>
                        <div>
                            <ul className="nav ml-auto ul-custom">
                                <li nav-item active li-custom>
                                    <Link to="/home" className="nav-link">Home</Link>
                                </li>
                                <li nav-item active li-custom>
                                    <Link to="/home" className="nav-link">Search</Link>
                                </li>
                                <li nav-item active li-custom>
                                    <Link to="/home" className="nav-link">Profile</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}