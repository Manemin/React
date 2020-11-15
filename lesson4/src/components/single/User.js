import React, {Component} from 'react';

class User extends Component {
    render() {
        const {user} = this.props;
        return (
            <div className="card select" onClick={()=> this.props.select(user.id)}>
                <div className="card-body">
                    <h4 className="card-title">{user.name}</h4>
                    <p className="card-text">
                        {user.username}
                    </p>
                    <p className="card-text">
                        {user.email}
                    </p>
                </div>
            </div>
        );
    }
}

export default User;