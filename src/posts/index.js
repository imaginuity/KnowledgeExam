import axios from "axios";
import React, { useEffect, useState } from "react";
import Loading from "src/partials/loading";
import { Link } from "react-router-dom";

// SCSS, CSS.
import "src/posts/index.scss";

const Start = (page) => {
    return (<LoadPosts />);
};

const LoadPosts = (props) => {
    const [loading, setLoading] = useState(true);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts').then(response => {
            setLoading(false);
            setPosts(response.data);
        }).catch(error => {
            setLoading(false);
        });
    }, []);

    if (loading) {
        return (<Loading type="loading-start" />);
    } else {
        return (
            <div className="posts">
                {
                    posts.map(post => {
                        return (
                            <div key={post.id} className="post">
                                <img src="https://via.placeholder.com/300x150?text=Post%20Image" alt="Post Image" />
                                <h3>{post.title}</h3>
                                <div className="body">{post.body}</div>
                                <Link to={`/posts/${post.id}`}>Read more...</Link>
                            </div>
                        );
                    })
                }
            </div>
        );
    }

};

export default Start;