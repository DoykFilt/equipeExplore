import React, { Component } from 'react';
import Text from '../Text/Text';
import './Edito.css';


export default class Edito extends Component {

    constructor(props) {
        super(props);
        this.state = {
            top: 'initial',
            bottom: 'initial'
        };
    }

    componentDidMount() {
        if (this.props.positionTop) {
            this.setState({top: this.props.positionTop});
        }
        if (this.props.positionBottom) {
            this.setState({bottom: this.props.positionBottom});
        }
    }

    render() {

        return (
            <div className="Edito">
                <div className="Edito__wrapper" style={{top: this.state.top, bottom: this.state.bottom}}>
                    <Text content={this.props.content}></Text>
                </div>
            </div>
        );
    }
}
