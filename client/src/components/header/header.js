import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./header.scss";

//import Search from "../search/search";

import musicNotes from "../../assets/music-notes.png";

export default class Header extends Component 
{
    constructor(props) {
        super(props);

        this.setSearchQuery = this.setSearchQuery.bind(this);
        this.search = this.search.bind(this);

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

    search = () => {
        this.props.callBackFromParent(this.state.searchQuery);
    }

    render()
    {
        return (
            <div id="header">
                <nav className="navbar navbar-expand-lg navbar-light h-collapse navbar-custom">
                    <div className="container">
                        <Link to="/home" className="navbar-brand">
                            <img src={musicNotes} id="music-notes" alt="Music Notes" />
                            Social Music
                        </Link>
                        <ul className="nav ml-auto ul-custom">
                            <li nav-item active li-custom>
                                <Link to="/home" className="nav-link">Home</Link>
                            </li>
                            <li nav-item active li-custom>
                                <Link to="/search" className="nav-link">Search</Link>
                            </li>
                            <li nav-item active li-custom>
                                <Link to="/login" className="nav-link">Profile</Link>
                            </li>
                            <li nav-item active li-custom>
                                <Link to="/feed" className="nav-link">Feed</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

/*
    <div id="search">
        <form>
            <input type="text" placeholder="Search Music, Interests and more..." className="search-bar" onChange={this.setSearchQuery} />
        </form>
    </div>
*/