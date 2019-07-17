import React, { Component } from "react";
import { Link } from "react-router-dom";

class Comments extends Component {
  render() {
    return (
      <div>
        <p>From Comments Component</p>
        <Link to="/">
        <button className="btn btn-info">HomePage</button>
        </Link>
      </div>
    );
  }
}

export default Comments;
