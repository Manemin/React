import React, {Component} from 'react';

class Post extends Component {
    render() {
        const {userId, id, title, body} = this.props.post;
        return (
            <div className="card">
                <div className="card-body">
                    <h4 className="card-title">User id: {userId}</h4>
                    <h6 className="card-subtitle mb-2 text-muted">Post id: {id}</h6>
                    <h6 className="card-subtitle mb-2 text-muted">Title: {title}</h6>
                    <p className="card-text">
                        {body}
                    </p>
                </div>
            </div>

        );
    }
}

export default Post;