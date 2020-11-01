import React, {Component} from 'react';
import {PostsServices} from "./service/postsServices";
import Post from "./post";

class Posts extends Component {
    postServices = new PostsServices();
    state = {posts: []};
    async componentDidMount() {
        this.setState({posts: await this.postServices.getPosts()});
    }

    render() {
        return (
            <div>
                {
                    this.state.posts.map(post=> <Post post={post} key={post.id}/>)
                }
            </div>

        );
    }
}

export default Posts;