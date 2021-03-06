import React, {Component} from 'react';

class User extends Component {

    render() {
        const {name, username, email} = this.props.user;
        return (
            <div className="card">
                <div className="card-body">
                    <h4 className="card-title">{name}</h4>
                    <h6 className="card-subtitle mb-2 text-muted">{username}</h6>
                    <p className="card-text">
                        {email}
                    </p>
                </div>
            </div>

        );
    }
}

export default User;