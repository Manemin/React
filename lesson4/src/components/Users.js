import React, {Component} from 'react';
import {GetData} from "../services/GetData";
import User from "./single/User";

class Users extends Component {

    state = {
        users: [],
    }

    dataApi = new GetData();

    componentDidMount() {
        this.dataApi.getUsers().then(response => this.setState({users: response}))
    }

    selectedUser = (id) => {
        this.props.history.push(`/users/${id}`);
    }


    render() {
        const {users} = this.state;
        return (
            users.map(user => (<User select={this.selectedUser} user={user} key={user.id}/>))
        );
    }
}

export default Users;