import React, { useState } from 'react';
import axios from 'axios';
import './profiles.scss';

import api from '../../config/api';

function AddUser() {
    const [username, setUserName] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    const addUser = () => {
        axios.post(api.base_url + "/users/insert", {
            username: username,
            name: name,
            password: password
        })
        .then(() => {
            alert("Successful insert");
        });
    };

    return(
        <div className="add-user-form">
            <div className="container form-box">
                <h5>Create new account</h5>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control"
                        id="username"
                        required
                        value={username}
                        onChange={(e) => {
                            setUserName(e.target.value);
                        }}
                        name="username"
                        placeholder="Username"
                    />
                </div>

                <div className="form-group">
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        required
                        value={name}
                        onChange={(e) => {
                            setName(e.target.value);
                        }}
                        name="name"
                        placeholder="Name"
                    />
                </div>

                <div className="form-group">
                    <input
                        type="text"
                        className="form-control"
                        id="password"
                        required
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}
                        name="password"
                        placeholder="Password"
                    />
                </div>

                <button onClick={addUser} className="btn btn-success">
                    Submit
                </button>
            </div>
        </div>
    );
}

export default AddUser;

/*
    constructor(props) {
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.saveUser = this.saveUser.bind(this);
        this.newUser = this.newUser.bind(this);

        this.state = {
            id: null,
            username: '',
            name: '',
            password: '',

            submitted: false
        };
    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        });
    }

    onChangeName(e) {
        this.setState({
            name: e.target.value
        });
    }

    onChangePassword(e) {
        this.setState({
            password: e.target.value
        });
    }

    saveUser() {
        var data = {
            username: this.state.username,
            name: this.state.name,
            password: this.state.password
        };
        
        UserDataService.create(data)
            .then(response => {
                this.setState({
                    id: response.data.id,
                    username: response.data.username,
                    name: response.data.name,
                    password: response.data.password,

                    submitted: true
                });
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    }

    newUser() {
        this.setState({
            id: null,
            username: '',
            name: '',
            password: '',

            submitted: false
        });
    }

                {this.state.submitted ? (
                <div>
                    <h5>Account created!</h5>
                </div>
            ) : (
                <div className="container form-box">
                    <h5>Create new account</h5>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            id="username"
                            required
                            value={this.state.username}
                            onChange={(e) => {
                                setUserName(e.target.value);
                            }}
                            name="username"
                            placeholder="Username"
                        />
                    </div>

                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            required
                            value={this.state.name}
                            onChange={(e) => {
                                setName(e.target.value);
                            }}
                            name="name"
                            placeholder="Name"
                        />
                    </div>

                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            id="password"
                            required
                            value={this.state.password}
                            onChange={(e) => {
                                setPassword(e.target.value);
                            }}
                            name="password"
                            placeholder="Password"
                        />
                    </div>

                    <button onClick={addUser} className="btn btn-success">
                        Submit
                    </button>
                </div>
            )}
*/