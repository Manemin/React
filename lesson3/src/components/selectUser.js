import React, {Component} from 'react';
import UserById from "./userById";
import {UsersService} from "../services/usersService";
import UserByName from "./userByName";

class SelectUser extends Component {

    userApi = new UsersService();

    state = {
        user: '',
        users: ''
    }
    getUser = async (e) => {
        if (e.target.value && (+e.target.value <= 10 && +e.target.value > 0) ) {
            this.setState({user: await this.userApi.getUserById(e.target.value)})
        } else {
            this.setState({user: ''})
        }
    }
    getUserByName = async (e) => {
        let list = await this.userApi.getUsers();
        let filtered = list.filter(usr => usr.name.toLowerCase().includes(e.target.value));
        if (e.target.value) {
            this.setState({users: filtered})
        } else {
            this.setState({users: ''})
        }
    }

    render() {
        return (
            <div className="d-flex justify-content-around container">
                <form>
                    <input placeholder="enter id" className="form-control" type="number" onChange={this.getUser}/>
                    <UserById usr={this.state.user}/>
                </form>
                <form>
                    <input className="form-control" placeholder="enter name" type="text" onChange={this.getUserByName}/>
                    <UserByName usr={this.state.users}/>
                </form>
            </div>
        );
    }

}

export default SelectUser;