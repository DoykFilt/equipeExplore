import React, { Component } from 'react';
import utils from '../../js/utils.js';
import './Text.css';

export default class Text extends Component {

    render() {

        return (
            <div className="Text" dangerouslySetInnerHTML={{__html: utils.cleanText(this.props.content)}}></div>
        );
    }
}
