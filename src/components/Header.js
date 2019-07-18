import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-info">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/">
              <a className="nav-link">Home</a>
            </Link>
          </li>
          <li className="nav-item">
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
    );
  }
}

export default Header;
