import React, { Component } from 'react';
import './Progressbar.css';
import move from '../../js/move';

export default class Progressbar extends Component {

    render() {
        
        function click_handler(event)
        {
            const ending_offset = parseInt(document.getElementById('board').offsetWidth * -1, 10);
            const position = (event.clientX / document.documentElement.clientWidth * ending_offset ) + document.documentElement.clientWidth;
            // const boardWidth = parseInt(document.getElementById('board').offsetWidth, 10);
            // const position = (event.clientX / document.documentElement.clientWidth * ending_offset );
            move.to(position);
        }
        return (
            <div className="Progressbar" id="progressbar_container" onClick={click_handler}>
                <div className="Progressbar__value" id="progressbar"></div>
            </div>
        );
    }
}
