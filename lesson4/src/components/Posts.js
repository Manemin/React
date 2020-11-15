import React, {Component} from 'react';

import {GetData} from "../services/GetData";
import Post from "./single/Post";

class Posts extends Component {

    dataApi = new GetData();

    state = {
        posts: []
    }

    componentDidMount() {
        this.dataApi.getPosts().then(posts => this.setState({posts}));
    }

    render() {
        return (
            this.state.posts.map(post => (<Post post={post} key={post.id}/>))
        );
    }
}

export default Posts;