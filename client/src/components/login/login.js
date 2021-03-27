import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import "./login.scss";

export default class Login extends Component {
    render() {
        return(
            <div className="login add-user-form">
                <div className="container form-box">
                    <h5>Log in Social Music</h5>
                    <div className="form-group">
                        <input
                        className="form-control"
                        type="text"
                        placeholder="Email"
                        />
                    </div>
                    
                    <div className="form-group">
                        <input
                        className="form-control"
                        type="text"
                        placeholder="Password"
                        />
                    </div>

                    <button className="btn btn-success">
                        Login
                    </button>
                </div>
            </div>
        );
    }
}