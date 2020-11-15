import React, {Component} from 'react';

class Comment extends Component {
    render() {
        const {comm} = this.props;
        return (
            <div className="card">
                <div className="card-body">
                    <h4 className="card-title">{comm.email}</h4>
                    <p className="card-text">
                        {comm.name}
                    </p>
                    <p className="card-text">
                        {comm.body}
                    </p>
                </div>
            </div>
        );
    }
}

export default Comment;