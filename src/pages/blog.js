import React from "react";

import Posts from "../components/Blog/Posts";

const Blog = () => {
    return (
        <>
            <div className="container">
                <h1 className="py-4">Posts</h1>
                <div className="blog">
                    <Posts />
                </div>
            </div>
        </>
    );
};

export default Blog;
