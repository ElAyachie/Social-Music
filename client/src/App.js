import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/header/header";
import Home from "./components/home/home";
import Search from "./components/search/search";
import Feed from "./components/feed/feed";
import LoginController from "./components/login/LoginController";

function App() {
    return (
      <Router>
        <div className="App">
          <header className="App-header sticky-top">
            <Header />
          </header>
          <Route path="/">
            <Redirect to="/home" />
          </Route>
        <Switch>
          <Route path="/home" exact component={ Home } />
          <Route path="/search" exact component={ Search } />
          <Route path="/feed" exact component={ Feed } />
          <Route path="/login">
            <LoginController />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
