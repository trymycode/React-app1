import React, { Component } from "react";
import { Link } from "react-router-dom";
// import About from "./About.js";
// import Comments from "./Comments.js";

class Header extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-info">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a className="nav-link">Home</a>
            </li>
            <li class="nav-item">
              <Link to="/about">
                <a className="nav-link">About</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/comments">
                <a className="nav-link">Comments</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Header;
