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
        setPost(res.data);
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <div className="container py-4">
        <div className="row py-4">
          {post.map((post) => (
            <div className="col" key={post.id}>
              <Card className="card-body">
                <img src={blogImage} className="card-img-top" alt={post.title} />
                <h5 className="card-title pt-3 text-capitalize fw-light">{post.title} </h5>
                <p className="card-text text-secondary fw-light">{post.body}</p>
                <Link className="btn btn-dark btn-sm" to="/posts">
                  Back to Posts
                </Link>
              </Card>
            </div>
          ))}
          <div className="col-3">
            <div className="p-4 mb-3 bg-light rounded">
              <h4 className="fst-italic">About</h4>
              <p className="mb-0">Customize this section to tell your visitors a little bit about your publication,
                writers, content, or something else entirely. Totally up to you.</p>
            </div>
            <div className="p-4">
              <h4 className="fst-italic">Archives</h4>
              <ol className="list-unstyled mb-0">
                <li><a href="#">March 2021</a></li>
                <li><a href="#">February 2021</a></li>
                <li><a href="#">January 2021</a></li>
                <li><a href="#">December 2020</a></li>
                <li><a href="#">November 2020</a></li>
                <li><a href="#">October 2020</a></li>
                <li><a href="#">September 2020</a></li>
                <li><a href="#">August 2020</a></li>
                <li><a href="#">July 2020</a></li>
                <li><a href="#">June 2020</a></li>
                <li><a href="#">May 2020</a></li>
                <li><a href="#">April 2020</a></li>
              </ol>
            </div>
            <div className="p-4">
              <h4 className="fst-italic">Elsewhere</h4>
              <ol className="list-unstyled">
                <li><a href="#">GitHub</a></li>
                <li><a href="#">Twitter</a></li>
                <li><a href="#">Facebook</a></li>
              </ol>
            </div>
          </div>

        </div>
        </div>
    </>
  );
};
export default Post;