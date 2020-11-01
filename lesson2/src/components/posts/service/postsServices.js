export class PostsServices {
    _url = 'https://jsonplaceholder.typicode.com/posts';

    async getPosts() {
        return (await fetch(this._url)).json();
    }
}