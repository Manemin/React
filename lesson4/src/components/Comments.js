import React, {Component} from 'react';

import {GetData} from "../services/GetData";
import Comment from "./single/Comment";

class Comments extends Component {

    dataApi = new GetData();

    state = {
        comm: []
    }

    componentDidMount() {
        this.dataApi.getComments().then(comm => this.setState({comm}));
    }

    render() {
        return (
            this.state.comm.map(item => (<Comment comm={item} key={item.id}/>))
        );
    }
}

export default Comments;