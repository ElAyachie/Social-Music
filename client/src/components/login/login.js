import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import "./login.scss";

export default class Login extends Component {
    render() {
        return(
            <div className="login">
                <h3>Log in Social Music</h3>
                <form>
                    <input
                     className="login-box"
                     type="text"
                     placeholder="Email"
                    />
                    <br />
                    <input
                     className="login-box"
                     type="text"
                     placeholder="Password"
                    />
                    <br />
                    <button type="submit">
                        Login
                    </button>
                </form>
            </div>
        );
    }
}