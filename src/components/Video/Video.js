import config from '../../config';
import React, { Component } from 'react';
import './Video.css';
import { pause_all_audio } from "../Audio/Audio";

require('../../js/external/dailymotion.js')();

var playersRef = [];
var playersObj = {};



/* eslint-disable */
window.dmAsyncInit = function() {
    if (!playersRef.length) {
        setTimeout(function () {
            window.dmAsyncInit();
        }, 500);
    } else {
        for (var i = 0; i < playersRef.length; i++) {
            playersObj[playersRef[i].props.id] = DM.player('player_' + playersRef[i].props.id, {
                video: playersRef[i].props.id,
                width: playersRef[i].state.width + 'px',
                height: playersRef[i].state.height + 'px',
                params: {
                    wmode:"transparent",
                    autoplay: 0,
                    chromeless : 0,
                    related : 0,
                    foreground: '#f8f8f8',
                    logo: 0,
                    info : 0
                }
            });
        }
    }
};

window.addEventListener('resize', function() {
    for(var i = 0; i < playersRef.length; i++) {
        var clientHeight = Math.min(document.documentElement.clientHeight, config.ratio.height);
        var newHeight = clientHeight;
        var deviceRatio = document.documentElement.clientWidth
            / document.documentElement.clientHeight;

        if (playersRef[i].props.maxHeight) {
            newHeight = Math.min(playersRef[i].props.maxHeight, clientHeight);
        }
        if (playersRef[i].props.ratio) {
            if (deviceRatio >= playersRef[i].props.ratio) {
                playersRef[i].setState({width: newHeight * playersRef[i].props.ratio});
            } else {
                newHeight = playersRef[i].state.width / playersRef[i].props.ratio;
            }
        }
        playersRef[i].setState({height: newHeight});
        playersObj[playersRef[i].props.id].width = newHeight * playersRef[i].props.ratio;
        playersObj[playersRef[i].props.id].height = newHeight;
    }
    // console.log(playersRef);
});

/* eslint-enable */


export default class Edito extends Component {

    constructor(props) {
        super(props);
        this.state = {
            top: '50%',
            bottom: 'initial',
            width: Math.min(document.documentElement.clientWidth, config.ratio.width),
            height: Math.min(document.documentElement.clientHeight, config.ratio.height)
        };
    }

    componentDidMount() {
        let newHeight = this.state.height;
        let deviceRatio = document.documentElement.clientWidth
            / document.documentElement.clientHeight;

        if (this.props.positionTop) {
            this.setState({top: this.props.positionTop});
        }
        if (this.props.positionBottom) {
            this.setState({bottom: this.props.positionBottom});
        }
        if (this.props.maxHeight) {
            newHeight = Math.min(this.props.maxHeight, this.state.height); 
        }
        if (this.props.ratio) {
            if (deviceRatio >= this.props.ratio) {
                this.setState({width: newHeight * this.props.ratio});
            } else {
                newHeight = this.state.width / this.props.ratio;
            }
        }
        this.setState({height: newHeight});

        playersRef.push(this);
    }

    togglePlay = function (id, e) {
        pause_all_audio();
        // playersObj[id].togglePlay();
        // e.stopPropagation();
    }

    render() {

        return (
            <div className="Video" style={{top: this.state.top, bottom: this.state.bottom}} onClick={this.togglePlay.bind(this, this.props.id)}>
                {/* <div className="Video__embed" id={"player_" + this.props.id}></div> */}
                <iframe src={"//www.dailymotion.com/embed/video/" + this.props.id} width={this.state.width} height={this.state.height} frameBorder="0" allowFullScreen></iframe>
            </div>
        );
    }
}
