import React, { Component } from 'react';

export default class Post extends Component {
    render() {
        const { userId, title, body } = this.props.pst;
        return (
            <div className="card user-post">
                <div className="card-body">
                    <h4 className="card-title">User id: {userId}</h4>
                    <h6 className="card-subtitle mb-2 text-muted">Title: {title}</h6>
                    <p className="card-text">
                        {body}
                    </p>
                </div>
            </div>
        );
    }
}
