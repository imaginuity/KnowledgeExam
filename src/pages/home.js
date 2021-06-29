import React, { useEffect, useState } from "react";

import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const URL = 'https://jsonplaceholder.typicode.com/users/1/posts';
  const [post, setPost] = useState([]);
  const postImage = 'https://source.unsplash.com/random/400x200';


  useEffect(() => {
    fetchPosts();
  }, []);
  const fetchPosts = () => {
    axios
      .get(URL)
      .then((res) => {
        setPost(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <section className="py-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light">Daily News</h1>
            <p className="lead text-muted">
              Something short and leading about the collection below—its
              contents, the creator, etc. Make it short and sweet, but not too
              short so folks don’t simply skip over it entirely.
            </p>
            <p>
              <button className="btn btn-dark my-2 mx-2">
                Learn About it
              </button>
              <button className="btn btn-dark my-2 mx-2">
                Contact Us
              </button>
            </p>
          </div>
        </div>
      </section>
      <div className="post py-5 bg-light">
        <div className="container">
          <h2 className="py-3">Featured Posts</h2>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {post.map((post) => (
            <div className="col" key={post.id}>
              <div className="card shadow-sm">
                <img src={postImage} alt="Lady with laptop" />
                <div className="card-body">
                  <h4 className="card-title pt-3 text-capitalize">{post.title}</h4>
                  <p className="card-text">
                    {post.body}
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <Link className="btn btn-dark btn-sm btn-outline" to={`/featured/${post.id}`}>
                        Read More
                      </Link>
                    </div>
                    <small className="text-muted">June 21, 2021</small>
                  </div>
                </div>
              </div>
            </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
