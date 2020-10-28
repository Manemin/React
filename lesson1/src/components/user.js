import React, { Component } from 'react'

class User extends Component {
    constructor(props) {
        super(props);
        this.state = { status: props.usr.status };
    }
    changeStatus = () => {
        this.setState(prevState => ({ status: !prevState.status }))
    };
    render() {
        const { usr } = this.props;
        return (
            <li onClick={this.changeStatus}>
                <span>{usr.name}</span> -
                status: {this.state.status.toString()}
            </li>


        );
    }
}

export default User;