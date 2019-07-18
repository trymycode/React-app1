import React, { Component } from "react";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      place: ""
    };
    this.showAlert = this.showAlert.bind(this);
  }
  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  showAlert() {
    if (this.state.username && this.state.place) {
      alert("Successfully logged in!");
    } else {
      alert("Please provide required input.");
    }
  }
  onSubmit = e => {
    e.preventDefault();
    console.log("States", this.state.username, this.state.place);
    this.props.receiveParams(this.state.username, this.state.place);
  };
  render() {
    return (
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
          <input
            type="submit"
            value="Login"
            className="btn btn-success"
            onClick={this.showAlert}
          />
        </form>
      </div>
    );
  }
}
export default Home;
