import React from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import RegisterPage from '../scenes/auth/register';
import LoginPage from '../scenes/auth/login';
import PostsList from '../scenes/posts/pages/PostsList'
import PostDetail from '../scenes/posts/pages/PostDetail';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={() => <Redirect to="/posts" />} exact />
                <Route path="/posts" component={PostsList} exact />
                <Route path="/posts/:id" component={PostDetail} exact />
                <Route path="/register" component={RegisterPage} exact />
                <Route path="/login" component={LoginPage} exact />
            </Switch>
        </BrowserRouter>
    )
}
