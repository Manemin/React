export class CommentService {
    _url = 'https://jsonplaceholder.typicode.com/comments';

    async getCommById(id) {
        return (await fetch(`${this._url}/?postId=${id}`)).json();
    }
}