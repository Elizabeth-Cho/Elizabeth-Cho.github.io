import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Landing from "./Landing";
import Navigation from "./Navigation";
import Footer from "./Footer";

import "./assets/css/index.css";

class App extends Component {
  render() {
    return (
        <Router>
            <div className="content">
                <Route component = { Navigation } />
                <div className="actual-content">
                    <Route component = { Landing } />
                </div>
            </div>
        </Router>
    );
  }
}

export default App;
