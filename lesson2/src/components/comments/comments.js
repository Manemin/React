import React, { Component } from 'react';
import { CommentsServices } from "./service/commentsServices";
import Comment from "./comment";

class Comments extends Component {
    commentsService = new CommentsServices();
    state = { comments: [] };

    async componentDidMount() {
        this.setState({ comments: await this.commentsService.getComments() });
    }

    render() {
        return (
            this.state.comments.map(comment => <Comment comment={comment} key={comment.id} />)
        );
    }
}

export default Comments;