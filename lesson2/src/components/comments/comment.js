import React, {Component} from 'react';

class Comment extends Component {
    render() {
        const {id, name, body, email} = this.props.comment;
        return (
            <div className="card">
                <div className="card-body">
                    <h4 className="card-title">User id: {id}</h4>
                    <h6 className="card-subtitle mb-2 text-muted">{name}</h6>
                    <h6 className="card-subtitle mb-2 text-muted">{email}</h6>
                    <p className="card-text">
                        {body}
                    </p>
                </div>
            </div>

        );
    }
}

export default Comment;