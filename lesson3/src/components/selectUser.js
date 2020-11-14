import React, { Component } from 'react';
import UserById from "./userById";
import { UsersService } from "../services/usersService";
import UserByName from "./userByName";

class SelectUser extends Component {

    userApi = new UsersService();

    state = {
        user: '',
        users: ''
    }

    getUser = async (e) => {
        const id = +e.target.value;
        if (id && (id <= 10 && id > 0)) {
            this.setState({ user: await this.userApi.getUserById(id) })
        } else {
            this.setState({ user: '' })
        }
    }

    getUserByName = async (e) => {
        const name = e.target.value;
        const list = await this.userApi.getUsers();
        const filtered = list.filter(usr => usr.name.toLowerCase().includes(name));

        if (name) {
            this.setState({ users: filtered })
        } else {
            this.setState({ users: '' })
        }
    }

    render() {

        return (
            <div className="d-flex justify-content-around container">
                <form>
                    <input placeholder="enter id" className="form-control" type="number" onChange={this.getUser} />
                    <UserById usr={this.state.user} />
                </form>
                <form>
                    <input className="form-control" placeholder="enter name" type="text" onChange={this.getUserByName} />
                    <UserByName usr={this.state.users} />
                </form>
            </div>
        );
    }

}

export default SelectUser;