import React, { Component } from 'react';
import './login.scss';

import LoginScreen from './LoginScreen';

export default class LoginController extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loginPage: [],
            uploadScreen: []
        }
    }

    componentWillMount() {
        var loginPage = [];
        loginPage.push(<LoginScreen appContext={this} />);
        this.setState({
            loginPage: loginPage
        });
    }

    render() {
        return(
            <div className="loginController">
                {this.state.loginPage}
                {this.state.uploadScreen}
            </div>
        );
    }
}