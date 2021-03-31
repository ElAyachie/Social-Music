import React, { Component } from 'react';
/*
Screen:LoginScreen
Loginscreen is the main screen which the user is shown on first visit to page and after
hitting logout
*/
import LoginScreen from './LoginScreen';

export default class UploadScreen extends Component {
    constructor(props){
        super(props);

        this.state={

        }
    }

    handleLogout(event){
        // console.log("logout event fired",this.props);
        var loginPage =[];
        loginPage.push(<LoginScreen appContext={this.props.appContext}/>);
        this.props.appContext.setState({loginPage:loginPage,uploadScreen:[]});
    }

    render() {
        return (
            <div>
                <div onClick={(event) => this.handleDivClick(event)}>
                </div>
            </div>
        );
    }
}