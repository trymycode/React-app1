import React, { Component } from "react";
import { Link } from "react-router-dom";
class About extends Component {
  render() {
    console.log("this props", this.props.name);
    return (
      <div className="container">
        {this.props.name && this.props.place ? (
          <p>
            Username - {this.props.name}
            <br />
            Hometown - {this.props.place}
          </p>
        ) : (
          <p> To see user details, please fill up the following form.</p>
        )}

        <Link to="/">
          <button
            className="btn btn-info"
            style={{ position: "fixed", bottom: "50%" }}
          >
            HomePage
          </button>
        </Link>
      </div>
    );
  }
}

export default About;
