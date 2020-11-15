export class GetData {
    _url = 'https://jsonplaceholder.typicode.com/';

    getUsers() {
        return fetch(`${this._url}users`).then(data => data.json());
    }

    getPosts() {
        return fetch(`${this._url}posts`).then(data=>data.json());
    }

    getComments() {
        return fetch(`${this._url}comments`).then(data=>data.json());
    }
}