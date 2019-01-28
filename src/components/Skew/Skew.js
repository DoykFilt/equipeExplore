import React, { Component } from 'react';
import './Skew.css';

export default class Element extends Component {

    constructor(props) {
        super(props);
        this.state = {
            position: 'right'
        };
    }

    componentDidMount() {
        if (this.props.position) {
            this.setState({position: this.props.position});
        }
    }

    render() {

        let title = null;

        if (this.props.name) {
            title = <img src={require("./img/" + this.props.name)} alt="" />;
        } else {
            title = '';
        }

        return (
            <div className={"Skew Skew--" + this.state.position} id={this.props.bg} style={{backgroundImage:'url(' + require("./img/" + this.props.bg) + ')'}}>
                {title}
            </div>
        );
    }
}
