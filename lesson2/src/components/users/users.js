import React, {Component} from 'react';
import User from "./user";
import {UsersService} from "./service/usersService";

class Users extends Component {
    userApi = new UsersService();
    state = {users: []};

    async componentDidMount() {
        this.setState({users: await this.userApi.getUsers()});
    }

    render() {
        return (
            <div>
                {
                    this.state.users.map(user => <User user={user} key={user.id}/>)
                }
            </div>
        );
    }
}

export default Users;