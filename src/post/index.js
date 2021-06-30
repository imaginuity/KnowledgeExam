import axios from "axios";
import React, { useEffect, useState } from "react";
import Loading from "src/partials/loading";
import { useParams } from "react-router-dom";

// SCSS, CSS.
import "src/post/index.scss";

const Start = (page) => {
    return (<LoadPost />);
};

const LoadPost = (props) => {
    const [loading, setLoading] = useState(true);
    const [post, setPost] = useState({});

    const { id } = useParams();

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`).then(response => {
            setLoading(false);
            setPost(response.data);
        }).catch(error => {
            setLoading(false);
        });
    }, []);

    if (loading) {
        return (<Loading type="loading-start" />);
    } else {
        return (
            <div className="post-detail">
                <img src="https://via.placeholder.com/900x100?text=Post%20Image" alt="Post Image" />
                <div className="content">
                    <h2>{post.title}</h2>
                    <div className="body">{post.body}</div>
                </div>
            </div>
        );
    }

};

export default Start;