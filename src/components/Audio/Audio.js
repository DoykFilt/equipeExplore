import React, { Component } from 'react';
import './Audio.css';

let audio_instances = [];

export async function pause_all_audio()
{
    for(let audio of audio_instances)
    {
        await audio.pause();
    }
}

export default class Audio extends Component {

    constructor(props) {
        super(props);
        this.image_play = require("./img/" + this.props.image_name);
        this.image_pause = require("./img/" + this.props.image_paused_name);
        this.state = {
            index: 0,
            top: '50%',
            left: 0,
            right: 0,
            paused: true,
            playing : false,
            current_image : this.image_play
        };
        audio_instances.push(this);
    }

    componentDidMount() {
        if (this.props.index) {
            this.setState({ index: this.props.index });
        }
        if (this.props.positionTop) {
            this.setState({top: this.props.positionTop});
        }
        if (this.props.positionLeft) {
            this.setState({ left: this.props.positionLeft });
        } else if (this.props.positionRight) {
            this.setState({ right: this.props.positionRight });
        }
        this.setState({paused: true});
        this.setState({playing: false});
        this.audio_player = document.getElementById(this.props.name + "_audio");
    }



    async toggle_play() {

        try {
            if(this.is_playing())
            {
                await this.pause();
            }
            else
            {
                let audio = this.audio_player;
                if(audio.ended)
                {
                    audio.currentTime = 0;
                }
                await pause_all_audio();
                audio.play();
            }
        }
        catch (exception) {
            console.error(exception);
        }
    }

    get_audio() {
        return document.getElementById(this.props.name + "_audio");
    }
    
    is_playing() {
        let audio = this.audio_player;
        return !audio.ended && !audio.paused;
    }
    
    async pause() {
        let audio = this.audio_player;
        if(this.is_playing()) {
            await audio.pause();
        }
    }

    set_play_image()
    {
        this.setState({current_image : this.image_play});
    }

    set_pause_image()
    {
        this.setState({current_image : this.image_pause});
    }

    render() {
        var style = { top: this.state.top, marginLeft: this.state.left }
        if (this.state.right) {
            style = { top: this.state.top, marginRight: this.state.right, left: 'auto', right: 0 }
        }
        // let paused_image_style = {visibility: this.state.paused};
        // let image_style = {visibility: this.state.playing};
        return (
            <div id={this.props.name + "_container"} className={"Audio Audio--z" + this.state.index + " js-element-z" + this.state.index} style={style}>
                <audio id={this.props.name + "_audio"} onPause={this.set_play_image.bind(this)} onEnded={this.set_play_image.bind(this)} onPlay={this.set_pause_image.bind(this)}>
                    <source src={process.env.PUBLIC_URL + "/audio/" + this.props.audio_name /*+ ".mp3"*/} type={"audio/mpeg"} />
                    audio file not supported
                </audio>
                <img id={this.props.name + "_image"} src={this.state.current_image} alt="" className="js-lazy" onClick={this.toggle_play.bind(this)} />
                {/* <img id={this.props.name + "_image"} style={paused_image_style} src={process.env.PUBLIC_URL + "/img/px.png"} data-src={require("./img/" + this.props.image_paused_name)} alt="" className="js-lazy" onClick={this.toggle_play.bind(this, this.props.name)} /> */}

            </div>
        );
    }
}
