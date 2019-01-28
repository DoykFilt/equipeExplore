import React, { Component } from 'react';
import './StaticElement.css';

export default class Element extends Component {

    render() {

        let img = null;

        if (this.props.name) {
            img = <img src={process.env.PUBLIC_URL + "/img/px.png"} data-src={require("./img/" + this.props.name)} alt="" className="js-lazy" />;
        } else {
            img = '';
        }

        return (
            <div className={"StaticElement StaticElement--" + this.props.size} style={{backgroundImage:'url(' + require("./img/" + this.props.bg) + ')'}}>
                {img}
            </div>
        );
    }
}
