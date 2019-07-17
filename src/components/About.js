import React, { Component } from "react";
import { Link } from "react-router-dom";
class About extends Component {
  render() {
    return (
      <div>
        <p>From About Component</p>
        <Link to="/">
        <button className="btn btn-info">HomePage</button>
        </Link>
        
      </div>
    );
  }
}

export default About;
