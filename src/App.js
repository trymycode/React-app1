import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import Comments from "./components/Comments";
import { BrowserRouter as Router, Route } from "react-router-dom";
class App extends Component {
  render() {
    return (
      <div className="">
        <Router>
          <Header />
          <Route exact path="/" />
          <Route exact path="/about" component={About} />
          <Route exact path="/comments" component={Comments} />
        </Router>
      </div>
    );
  }
}

export default App;
