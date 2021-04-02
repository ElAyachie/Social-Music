import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./login.scss";

import UploadScreen from './UploadScreen';

import api from '../../config/api';

/* 
async function loginUser(credentials) {
    return fetch("http://localhost:5000/login", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
      .then(data => data.json());
}
        const token = await loginUser({
            username,
            password
        });
        setToken(token);
*/

function Login() {
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [user, setUser] = useState();

    useEffect(() => {
        const loggedInUser = localStorage.getItem("user");
        if(loggedInUser) {
            const foundUser = JSON.parse(loggedInUser);
            setUser(foundUser);
        }
    }, []);

    const handleLogin = async e => {
        e.preventDefault();
        var self = this;
        const user = {
            username,
            password
        };
        await axios.post(api.base_url + '/login', user)
            .then(function(response) {
                if(response.data.code === 200) {
                    setUser(response.data.username);
                    localStorage.setItem("user", JSON.stringify(response.data.username));
                    console.log(response.data);
                    console.log("Login Successful");
                    var uploadScreen=[];
                    uploadScreen.push(<UploadScreen appContext={self.props.appContext} />);
                    self.props.appContext.setState({
                        loginPage: [],
                        uploadScreen: uploadScreen
                    })
                    window.location.reload();
                }
                else if(response.data.code === 204) {
                    console.log("Username or Password do not match our records.");
                    alert("Username or Password do not match our records.");
                    window.location.reload();
                }
                else {
                    console.log("Username does not exist.");
                    alert("Username does not exist.");
                }
            })
            .catch(function(error) {
                console.log(error);
            });
    };

    const handleLogout = () => {
        setUser("");
        setUserName("");
        setPassword("");
        localStorage.clear();
        window.location.reload();
    }

    if(user) {
        return(
            <div>
                <h5>
                    {user} is logged in.
                    <br /><br />
                    <button className="btn btn-success logoutBtn" onClick={handleLogout}>Logout</button>
                </h5>
            </div>
        );
    }

    return(
        <div className="login-form">
            <div className="container form-box">
                <h5>Log in to Social Music</h5>
                <form onSubmit={handleLogin}>
                    <div className="form-group">
                        <input
                        className="form-control"
                        type="text"
                        autoComplete="on"
                        id="username"
                        required
                        name="Username"
                        placeholder="Email"
                        value={username}
                        onChange={(e) => {
                            setUserName(e.target.value);
                        }}
                        />
                    </div>
                    
                    <div className="form-group">
                        <input
                        className="form-control"
                        type="text"
                        id="password"
                        required
                        name="Password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}
                        />
                    </div>

                    <button type="submit" className="btn btn-success loginBtn" /*onClick={login}*/>
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Login;

/*
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

    const login = () => {
        var self = this;
        var payload = {
            "email": username,
            "password": password
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
*/
