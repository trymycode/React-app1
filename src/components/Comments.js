import React, { Component } from "react";
import { Link } from "react-router-dom";

class Comments extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: []
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/comments?_limit=10")
      .then(res => res.json())
      .then(comments => this.setState({ comments: comments }))
      .catch(err => console.log(err, "ERROR!"));
  }
  render() {
    console.log(this.state.comments);
    console.log(this.props.name, this.props.place);
    return (
      <div className="container">
        {this.props.name && this.props.place ? (
          <div className="container">
            {this.state.comments.map(c => (
              <li>
                <em> {c.name}</em> - {c.body}
              </li>
            ))}
          </div>
        ) : (
          <p>
            Welcome to Comments page.To see the comments please fill up the form
          </p>
        )}
        <Link to="/">
          <button
            className="btn btn-info"
            style={{ position: "fixed", bottom: "0%", marginBottom: "10px" }}
          >
            HomePage
          </button>
        </Link>
      </div>
    );
  }
}

export default Comments;
