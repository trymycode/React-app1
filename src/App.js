import React, { Component } from "react";
import "./App.css";
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
  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  onSubmit = e => {
    e.preventDefault();
    console.log("onsubmit");
  };
  render() {
    return (
      <div className="">
        <Router>
          <Header />
          <Route
            path="/about"
            component={() => (
              <About name={this.state.username} place={this.state.place} />
            )}
          />
          <Route
            path="/comments"
            component={() => (
              <Comments name={this.state.username} place={this.state.place} />
            )}
          />
        </Router>
        <div className="container">
          <h2 className="">Welcome to Pepper Square</h2>
          <form onSubmit={this.onSubmit} className="mt-4">
            <div className="form-group row">
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control rounded border border-secondary"
                  name="username"
                  placeholder="username"
                  value={this.state.username}
                  onChange={this.onChange}
                />
              </div>
            </div>
            <div className="form-group row">
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control rounded border border-secondary"
                  name="place"
                  placeholder="Hometown"
                  value={this.state.place}
                  onChange={this.onChange}
                />
              </div>
            </div>
            <input type="submit" value="Login" className="btn btn-success" />
          </form>
        </div>
      </div>
    );
  }
}

export default App;
