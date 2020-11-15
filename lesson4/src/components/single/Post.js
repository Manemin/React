import React, {Component} from 'react';

class Post extends Component {
    render() {
        const {post} = this.props;
        return (
            <div className="card">
                <div className="card-body">
                    <h4 className="card-title">{post.title}</h4>
                    <p className="card-text">
                        {post.userId}
                    </p>
                    <p className="card-text">
                        {post.body}
                    </p>
                </div>
            </div>
        );
    }
}

export default Post;