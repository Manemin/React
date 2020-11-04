import './info.css'
import React, { Component } from 'react';
import { UsersService } from '../services/usersService'
import { PostService } from '../services/postService'
import { CommentService } from '../services/commentService';


export default class User extends Component {

    state = {
        users: [],
        posts: [],
        comments: [],
        user: {},
        id: Number,
        idPost: Number
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

        let { name, username, email } = this.state.user[0] || "";

        return (
            <div>
                <form onSubmit={this.getUser}>
                    <label>enter User id</label>
                    <input type="number" min="1" max="10" onChange={this.getId} />
                    <input type="submit" value="get user" />
                </form>
                <div className="d-flex">
                    <div className="p-2 flex-fill">
                        <div className="card card-user" onClick={this.getPost}>
                            <div className="card-body">
                                <h4 className="card-title">{name}</h4>
                                <h6 className="card-subtitle mb-2 text-muted">{username}</h6>
                                <p className="card-text">
                                    {email}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="p-2 flex-fill">
                        {
                            this.state.posts.map(post => {
                                return (
                                    <div className="card user-post" key={post.id} onClick={() => this.getComment(post.id)}>
                                        <div className="card-body">
                                            <h4 className="card-title">User id: {post.userId}</h4>
                                            <h6 className="card-subtitle mb-2 text-muted">Title: {post.title}</h6>
                                            <p className="card-text">
                                                {post.body}
                                            </p>
                                        </div>
                                    </div>
                                )
                            })
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
