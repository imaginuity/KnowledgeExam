import React, { Suspense, useContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Container = React.lazy(() => import("src/container"));

const Start = (props) => {
    return (
        <Router>
            <Suspense fallback={<div />}>
                <Switch>
                    <Route exact path="/" component={Container} />
                    <Route exact path="/:section/:slug" component={Container} />
                    <Route exact path="/:slug" component={Container} />
                </Switch>
            </Suspense>
        </Router>
    );
};

export default Start;