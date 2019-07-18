import React, { Component } from "react";
import "./App.css";
import Home from "./components/Home";
import Header from "./components/Header";
import About from "./components/About";
import Comments from "./components/Comments";
import { BrowserRouter as Router, Route } from "react-router-dom";
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      place: ""
    };
  }
  receiveParams = (name, place) => {
    console.log("value of name and place", name, place);
    this.setState({ username: name, place: place });
    console.log(this.state.username, this.state.place);
  };
  render() {
    return (
      <div className="">
        <Router>
          <Header />
          <Route
            exact
            path="/about"
            component={() => (
              <About name={this.state.username} place={this.state.place} />
            )}
          />
          <Route
            exact
            path="/"
            component={() => <Home receiveParams={this.receiveParams} />}
          />
          <Route
            exact
            path="/comments"
            component={() => (
              <Comments name={this.state.username} place={this.state.place} />
            )}
          />
        </Router>
      </div>
    );
  }
}

export default App;
