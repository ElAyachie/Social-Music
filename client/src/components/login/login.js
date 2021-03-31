import React, { Component } from 'react';
import axios from 'axios';
import "./login.scss";

import UploadScreen from './UploadScreen';

import api from '../../config/api';

export default class Login extends Component {
    constructor(props) {
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onLoginClick = this.onLoginClick.bind(this);

        this.state = {
            username: '',
            password: ''
        }
    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        });
    }

    onChangePassword(e) {
        this.setState({
            password: e.target.value
        });
    }

    onLoginClick(e) {
        var self = this;
        var payload = {
            "email": this.state.username,
            "password": this.state.password
        }

        axios.post(api.base_url + '/login', payload)
            .then(function(response) {
                console.log(response);
                if(response.data.code === 200) {
                    console.log("Login Successful");
                    var uploadScreen=[];
                    uploadScreen.push(<UploadScreen appContext={self.props.appContext} />);
                    self.props.appContext.setState({
                        loginPage: [],
                        uploadScreen: uploadScreen
                    })
                }
                else if(response.data.code === 204) {
                    console.log("Username or Password do not match our records.");
                    alert("Username or Password do not match our records.");
                }
                else {
                    console.log("Username does not exist.");
                    alert("Username does not exist.");
                }
            })
            .catch(function(error) {
                console.log(error);
            });
    }

    render() {
        return(
            <div className="login-form">
                <div className="container form-box">
                    <h5>Log in to Social Music</h5>
                    <div className="form-group">
                        <input
                        className="form-control"
                        type="text"
                        placeholder="Email"
                        value={this.state.username}
                        onChange={this.onChangeUsername}
                        />
                    </div>
                    
                    <div className="form-group">
                        <input
                        className="form-control"
                        type="text"
                        placeholder="Password"
                        value={this.state.password}
                        onChange={this.onChangePassword}
                        />
                    </div>

                    <button className="btn btn-success" onClick={this.onLoginClick}>
                        Login
                    </button>
                </div>
            </div>
        );
    }
}