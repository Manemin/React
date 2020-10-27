import React, {Component} from 'react';

class User extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {usr} = this.props;
        return (
            <div>
                {usr.id}: {usr.name} - <b>{usr.status.toString()}</b>
            </div>
        );
    }
}

export default User;