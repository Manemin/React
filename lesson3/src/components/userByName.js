import React, {Component} from 'react';

class UserByName extends Component {
    render() {

        if (this.props.usr.length > 0) {
            return (
                this.props.usr.map(user => {
                    return (<div className="p-2 flex-fill" key={user.id}>
                        <div className="card text-white bg-secondary">
                            <div className="card-body">
                                <h4 className="card-title">{user.name}</h4>
                                <h6 className="card-subtitle mb-2 text-white">{user.username}</h6>
                                <p className="card-text">
                                    {user.email}
                                </p>
                            </div>
                        </div>
                    </div>)
                })
            );

        } else {
            return null
        }
    }
}

export default UserByName;