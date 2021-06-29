import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import Card from "src/components/UI/Card";


const Post = ({ match }) => {
  const [post, setPost] = useState([]);
  const blogImage = "http://placeimg.com/640/360/any";
  let { id } = useParams();

  useEffect(() => {
    fetchPost();
  }, []);
  const fetchPost = () => {
    axios
      .get(
        `https://jsonplaceholder.typicode.com/posts/?id=${id}`
      )
      .then((res) => {
        console.log(res.data);
        setPost(res.data);
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <div className="container px-5 py-5">
        {post.map((post) => (
          <div className="col" key={post.id}>
            <Card className="card-body">
              <img src={blogImage} className="card-img-top" alt={post.title} />
              <h5 className="card-title pt-3 text-capitalize">{post.title} </h5>
              <p className="card-text text-secondary">{post.body}</p>
              <Link className="btn btn-dark" to="/posts">
                Back to Posts
              </Link>
            </Card>
          </div>
        ))}
      </div>
    </>
  );
};
export default Post;