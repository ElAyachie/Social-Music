import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import './App.scss';
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/header/header";
import Welcome from "./components/welcome/welcome";
import Home from "./components/home/home";
import Search from "./components/search/search";
import Feed from "./components/feed/feed";
import LoginController from "./components/login/LoginController";
import Profile from './components/profile/profile';
import PrivateRoute from './components/routes/PrivateRoute';
import UserProfile from './components/profiles/UserProfile';

function App() {
  const [authed, setAuthed] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState();

  useEffect(() => {
    setLoggedInUser(localStorage.getItem("user"));
    if(loggedInUser) {
        setAuthed(true);
    }
    else {
      setAuthed(false);
    }
  }, [loggedInUser, setAuthed]);

  return (
    <Router>
      <div className="App">
        <header className="">``
          <Header />
        </header>
        <Route path="/">
          <Redirect to="/welcome" />
        </Route>
        <Route path="/login">
            <LoginController />
        </Route>
        <Switch>
          <Route path="/welcome" exact component={ Welcome } />
          <Route path="/home" exact component={ Home } />
          <Route path="/feed" exact component={ Feed } />
          <Route path="/userprofile" exact component={ UserProfile } />
          <PrivateRoute authed={authed} path="/search" component={ Search } />
          {/* <PrivateRoute authed={authed} path="/profile" component={ Profile } /> */}
          <Route path="/profile" exact component={ Profile } />
        </Switch>
      </div>
    </Router>
  );

}

export default App;
