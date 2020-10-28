import React, {Component} from 'react'
import './user.css'
class User extends Component {
    // constructor(props) {
    //     super(props);
    // }
    render() {
        const {usr} = this.props;
        return (
            <ul>
            <li>
                id: <span>{usr.id}</span>, name: <span>{usr.name}</span>, status: <span>{usr.status.toString()}</span>
            </li>
            </ul>
        );
    }
}

export default User;