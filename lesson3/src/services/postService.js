export class PostService {
    _url = 'https://jsonplaceholder.typicode.com/posts';

    async getPostsByUserId(id) {
        return (await fetch(`${this._url}/?userId=${id}`)).json();
    }
}