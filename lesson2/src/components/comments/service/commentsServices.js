export class CommentsServices {
    _url='https://jsonplaceholder.typicode.com/comments';

    async getComments() {
        return  (await fetch(this._url)).json();
    }
}