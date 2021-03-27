import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/header/header";
import Home from './components/home/home';
import Search from "./components/search/search";
import Login from './components/login/login';
import AddUser from './components/profiles/add-user';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      searchQuery: ''
    }
  }

  searchCallback = (searchQueryFromHeader) => {
    this.setState({
      searchQuery: searchQueryFromHeader
    })
  }

  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header sticky-top">
            <Header callbackFromParent={this.searchCallback}/>
          </header>
          <Route path="/">
            <Redirect to="/home" />
          </Route>
          <Route path="/home" exact component={ Home } />
          <Route path="/search" exact component={ Search } />
          <Route path="/login" exact component={ Login } />
          <Route path="/add-user" exact component={ AddUser } />
        </div>
      </Router>
    );
  }
}

export default App;
