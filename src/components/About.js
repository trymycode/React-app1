import React, { Component } from "react";

const divStyle = {
  margin: "1rem auto",
  border: "5px solid #333",
  fontSize: "1.8rem",
  padding: "5px 10px"
};

class About extends Component {
  render() {
    console.log("this props", this.props.name);
    return (
      <div className="container">
        {this.props.name && this.props.place ? (
          <div style={divStyle}>
            Username - {this.props.name}, Hometown - {this.props.place}
          </div>
        ) : (
          <div class="jumbotron mt-2">
            <h1 class="display-4">
              Welcome to About page.To see the user detals please login.
            </h1>
          </div>
        )}
      </div>
    );
  }
}

export default About;
