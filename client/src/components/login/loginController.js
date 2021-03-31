import React, { useEffect, useState } from 'react';
import './login.scss';

import LoginScreen from './LoginScreen';
import Login from './Login';
import useToken from './useToken';

const LoginController = () => {
    const [loginPage, setLoginPage] = useState([]);
    //const [uploadScreen, setUploadScreen] = useState([]);
    const { token, setToken } = useToken();

    //loginPage.push(<LoginScreen appContext={this} />)

    if(!token) {
        loginPage.push(<Login setToken={setToken} />);
    }
    else {
        loginPage.push(<LoginScreen appContext={this} />);
    }

    useEffect(() => {
        setLoginPage(loginPage)
    }, []);

    return (
        <div className="loginController">
            {loginPage}
        </div>
    );
}

export default LoginController;

//if(!token) {
    //return <Login setToken={setToken} />
//}