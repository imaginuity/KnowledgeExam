import React, { Suspense, useContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Container = React.lazy(() => import("src/container"));
const Posts = React.lazy(() => import("src/posts"));
const Post = React.lazy(() => import("src/post"));

const Start = (props) => {
    return (
        <Router>
            <Suspense fallback={<div />}>
                <Switch>
                    <Route exact path="/posts" component={Posts} />
                    <Route exact path="/posts/:id" component={Post} />
                    <Route exact path="/:slug" component={Container} />
                    <Route exact path="/:section/:slug" component={Container} />
                    <Route exact path="/" component={Container} />
                </Switch>
            </Suspense>
        </Router>
    );
};

export default Start;