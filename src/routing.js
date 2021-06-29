import React, {Suspense} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from './pages/home';
import About from './pages/about';
import Blog from './pages/blog';

import Contact from './pages/contact';
import Nav from '../src/components/UI/Nav';
import Post from './components/Blog/Post';

const Start = (props) => {
    return (
        <>
            <div>
                <Router>
                    <Suspense fallback={<div/>}>
                        <div>
                            <Nav/>
                            <Switch>
                                <Route exact path="/posts/:id">
                                    <Post />
                                </Route>
                                <Route path="/posts">
                                    <Blog/>
                                </Route>
                                <Route path="/about">
                                    <About/>
                                </Route>
                                <Route path="/contact">
                                    <Contact/>
                                </Route>
                                <Route exact path="/">
                                    <Home/>
                                </Route>
                            </Switch>
                        </div>
                    </Suspense>
                </Router>
            </div>

        </>
    );
};

export default Start;
