import React, { Component } from "react";

class Posts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    };
  }

  componentWillMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(data => this.setState({ posts: data }))
      .catch(err => console.log(err, "ERROR!"));
  }

  render() {
    const postItem = this.state.posts.map(post => (
      <div key={post.id}>
        <h3 style={{ color: "purple" }}>
          <em>{post.title}</em>
        </h3>
        <p style={{ color: "grey" }}>{post.body}</p>
      </div>
    ));
    return (
      <div style={{ marginLeft: "1rem", width: "96%" }}>
        <h1>All Posts</h1>
        {postItem}
      </div>
    );
  }
}
export default Posts;
