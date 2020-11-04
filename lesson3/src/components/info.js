import './info.css'
import React, { Component } from 'react';
import { UsersService } from '../services/usersService'
import { PostService } from '../services/postService'
import { CommentService } from '../services/commentService';
import UserById from './userById';
import Post from './post';


export default class Info extends Component {

    state = {
        users: [],
        posts: [],
        comments: [],
        user: {},
        id: Number,
    }

    userApi = new UsersService();
    postApi = new PostService();
    commApi = new CommentService();

    async componentDidMount() {
        this.setState({ users: await this.userApi.getUsers() });
    }
    getPost = async () => {
        this.setState({ posts: await this.postApi.getPostsByUserId(this.state.id) });
    }
    getId = (e) => {
        this.setState({ id: +e.target.value })
    }
    getUser = (e) => {
        e.preventDefault();
        this.setState({ user: this.state.users.filter(user => this.state.id === user.id) });
    }
    getComment = async (id) => {
        this.setState({ comments: await this.commApi.getCommById(id) })
    }


    render() {

        // let { name, username, email } = this.state.user[0] || "";

        return (
            <div>
                <form onSubmit={this.getUser}>
                    <label>enter User id</label>
                    <input type="number" min="1" max="10" onChange={this.getId} />
                    <input type="submit" value="get user" />
                </form>
                <div className="d-flex">
                    <div onClick={this.getPost}>
                        <UserById usr={this.state.user} />
                    </div>
                    <div className="p-2 flex-fill">
                        {
                            this.state.posts.map(post => <Post pst={post} key={post.id} />)
                        }
                    </div>
                    <div className="p-2 flex-fill">
                        {
                            this.state.comments.map(comm => {
                                return (
                                    <div className="card" key={comm.id}>
                                        <div className="card-body">
                                            <h4 className="card-title">Comm id: {comm.id}</h4>
                                            <h6 className="card-subtitle mb-2 text-muted">Title: {comm.name}</h6>
                                            <p className="card-text">
                                                {comm.body}
                                            </p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }

}
