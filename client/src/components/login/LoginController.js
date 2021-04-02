import React, { useEffect, useState } from 'react';
import './login.scss';

import LoginScreen from './LoginScreen';

const LoginController = () => {
    const [loginPage, setLoginPage] = useState([]);

    loginPage.push(<LoginScreen appContext={this} />)

    useEffect(() => {
        setLoginPage(loginPage)
    }, [loginPage]);

    return (
        <div className="loginController">
            {loginPage}
        </div>
    );
}

export default LoginController;
