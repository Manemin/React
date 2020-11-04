import React, { Component } from 'react';

export default class User extends Component {
    render() {

        const { name, username, email } = this.props.usr[0] || '';

        return (
            <div className="p-2 flex-fill">
                <div className="card card-user">
                    <div className="card-body">
                        <h4 className="card-title">{name}</h4>
                        <h6 className="card-subtitle mb-2 text-muted">{username}</h6>
                        <p className="card-text">
                            {email}
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}


<div className="card user-post" key={post.id} onClick={() => this.getComment(post.id)}>
    <div className="card-body">
        <h4 className="card-title">User id: {post.userId}</h4>
        <h6 className="card-subtitle mb-2 text-muted">Title: {post.title}</h6>
        <p className="card-text">
            {post.body}
        </p>
    </div>
</div>