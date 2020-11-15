import React from 'react';
import {NavLink, Switch} from "react-router-dom";
import {Route} from "react-router";

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Users from "./components/Users";
import Posts from "./components/Posts";
import Comments from "./components/Comments";
import InfoUser from "./components/info/InfoUser";

function App() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <NavLink exact className="nav-link" to="/">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/users">Users</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/posts">Posts</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/comments">Comments</NavLink>
                    </li>
                </ul>
            </nav>
            <Switch>
                <Route path={'/users/:id'} component={InfoUser}/>
                <Route path='/users' component={Users}/>
                <Route path='/posts' component={Posts}/>
                <Route path='/comments' component={Comments}/>
                <Route exact path='/' render={() => (<h1>Main page</h1>)}/>
            </Switch>

        </div>
    );
}

export default App;
