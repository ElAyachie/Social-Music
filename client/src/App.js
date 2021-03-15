import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/header/header";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header sticky-top">
          <Header />
        </header>
      </div>
    </Router>
  );
}

export default App;
