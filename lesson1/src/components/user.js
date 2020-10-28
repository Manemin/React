import React, { Component } from 'react'

class User extends Component {
    // constructor(props) {
    //     super(props);
    // }
    render() {
        const { usr } = this.props;
        return (
            <li>
                id: <span>{usr.id}</span>,
                name: <span>{usr.name}</span>,
                status: <span>{usr.status.toString()}</span>
            </li>
        );
    }
}

export default User;