import React, {Component} from 'react';


class InfoUser extends Component {

    state = {
        user: null
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(data => data.json())
            .then(user => this.setState({user}));
    }

    goToHome = () => {
        this.props.history.push('/users');
    }

    render() {
        const {user} = this.state;
        return (
            user && (
                <div>
                    <div className="card">
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
                    <button className="btn btn-primary" onClick={this.goToHome}>Up</button>
                </div>
            )
        );
    }
}

export default InfoUser;