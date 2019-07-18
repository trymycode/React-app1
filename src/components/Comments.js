import React, { Component } from "react";

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
            <h2 className="text-secondary">
              These are few comments of our users
            </h2>
            <hr />
            {this.state.comments.map(c => (
              <div>
                <li className="text-info">
                  <em> {c.name}</em> - {c.body}
                </li>
                <hr />
              </div>
            ))}
          </div>
        ) : (
          <div class="jumbotron mt-2">
            <h1 class="display-4">
              Welcome to Comments page.To see the comments please login.
            </h1>
          </div>
        )}
      </div>
    );
  }
}

export default Comments;
