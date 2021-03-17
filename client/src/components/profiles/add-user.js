import React, { Component } from 'react';
import UserDataService from '../../services/user.services';
import './profiles.scss';

export default class AddUser extends Component {
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

    render() {
        return(
            <div className="add-user-form">
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
                                onChange={this.state.username}
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
                                onChange={this.state.name}
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
                                onChange={this.state.password}
                                name="password"
                                placeholder="Password"
                            />
                        </div>

                        <button onClick={this.saveUser} className="btn btn-success">
                            Submit
                        </button>
                    </div>
                )}
            </div>
        );
    }
}