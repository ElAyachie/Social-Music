import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./home.scss";

export default class Home extends Component {
    render() {
        return(
            <div id="home" className="container">
                <h1>Social Music</h1>

                <p>
                    Welcome to Social Music! 
                    <br />
                    Please use the button below to sign-up.
                </p>

                <Link to="/login">
                    <button className="sign-up-btn">
                        Sign up!
                    </button>
                </Link>
                <br />
                <Link to="/login">
                    <button className="sign-up-btn">
                        Login!
                    </button>
                </Link>
            </div>
        );
    }
}