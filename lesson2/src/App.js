import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Users from "./components/users/users";
import Posts from "./components/posts/posts";
import Comments from "./components/comments/comments";

function App() {
    return (
        <div className="d-flex">
            <div className="flex-fill">
                <h2>Users</h2>
                <Users/>
            </div>
            <div className="flex-fill">
                <h2>Posts</h2>
                <Posts/>
            </div>
            <div className="flex-fill">
                <h2>Comments</h2>
                <Comments/>
            </div>
        </div>

    );
}

export default App;
