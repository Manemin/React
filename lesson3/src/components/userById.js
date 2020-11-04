import React, {Component} from 'react';

export default class UserById extends Component {
    render() {

        const {name, username, email} = this.props.usr;

        if (this.props.usr) {
            return (
                <div className="p-2 flex-fill">
                    <div className="card text-white bg-secondary">
                        <div className="card-body">
                            <h4 className="card-title">{name}</h4>
                            <h6 className="card-subtitle mb-2 text-white">{username}</h6>
                            <p className="card-text">
                                {email}
                            </p>
                        </div>
                    </div>
                </div>
            );

        } else {
            return null
        }
    }
}