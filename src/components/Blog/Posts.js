import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import Card from "../UI/Card";

const Posts = (props) => {
  const [posts, setPosts] = useState([]);
  const blogImage = "http://placeimg.com/640/360/any";
  const MAX_LENGTH = 40;

  useEffect(() => {
    fetchPosts();
  }, []);
  const fetchPosts = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        console.log(res);
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {posts.map((post) => (
          <div className="col" key={post.id}>
            <Card className="card-body">
              <img src={blogImage} className="card-img-top" alt={post.title} />
              <h5 className="card-title pt-3 text-capitalize">{post.title} </h5>
              <p className="card-text text-secondary">{`${post.body.substring(
                0,
                MAX_LENGTH
              )}...`}</p>
              <Link className="btn btn-dark" to={`/posts/${post.id}`}>
                Read More
              </Link>
            </Card>
          </div>
        ))}
      </div>
    </>
  );
};
export default Posts;
