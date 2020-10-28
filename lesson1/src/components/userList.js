import React, { Component } from 'react';
import { users } from "../data/users";
import User from "./user";

class UserList extends Component {
    render() {

        return (
            <div>
                <h3>User list:</h3>
                <ul>
                    {
                        users.map(user => <User usr={user} key={user.id} />)
                    }
                </ul>

            </div>

        );
    }
}

export default UserList;