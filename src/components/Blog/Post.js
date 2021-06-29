import React from "react";
import { Link } from "react-router-dom";
import Card from "src/components/UI/Card";

const Post = (props) => {
  const blogImage = "http://placeimg.com/640/360/any";

  return (
    <>
      <div className="container py-4">
        <h1>Single Post</h1>
        <Card className="card-body">
          <img src={blogImage} className="card-img-top" alt="Post Alt" />
          <h5 className="card-title pt-3 text-capitalize">Post Title </h5>
          <p className="card-text text-secondary">Post Body</p>
          <Link className="btn btn-dark" to="/posts">
            Back to Posts
          </Link>
        </Card>
      </div>
    </>
  );
};

export default Post;
