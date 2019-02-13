import React, { Component } from 'react';
import './Progressbar.css';
import move from '../../js/move';

export default class Progressbar extends Component {

    render() {
        
        function click_handler(event)
        {
            const ending_offset = parseInt(document.getElementById('board').offsetWidth * -1 + document.documentElement.clientWidth, 10);
            var boardWidth = parseInt(document.getElementById('board').offsetWidth, 10);
            const position = (event.clientX / document.documentElement.clientWidth * ending_offset ) + document.documentElement.clientWidth;
            console.log(`mouse posistion ${event.clientX}, board_width ${boardWidth}, ending_offset ${ending_offset}, position ${position}, client_width ${document.documentElement.clientWidth}`);
            

            // var progression = (Math.abs(offset) + document.documentElement.clientWidth) * 100 / boardWidth;
            move.to(position);
        }
        return (
            <div className="Progressbar" id="progressbar_container" onClick={click_handler}>
                <div className="Progressbar__value" id="progressbar"></div>
            </div>
        );
    }
}
