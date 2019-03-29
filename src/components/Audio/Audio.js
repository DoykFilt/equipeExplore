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
        this.state = {
            index: 0,
            top: '50%',
            left: 0,
            right: 0,
            paused: true,
            playing : false
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
    }



    async toggle_play(audio_name) {

        try {
            if(this.is_playing())
            {
                await this.pause();
            }
            else
            {
                await this.play();
            }
            // if (player.ended) {
            //     player.currentTime = 0;
            //     await player.play();
            // }
            // else {
            //     if (player.paused) {
            //         await player.play();
            //     }
            //     else {
            //         await player.pause();
            //     }
            // }

        }
        catch (exception) {
            console.error(exception);
        }
    }

    get_audio() {
        return document.getElementById(this.props.name);
    }

    get_image()
    {
        return document.getElementById(this.props.name + "_image");
    }

    async play() {
        pause_all_audio();
        let audio = this.get_audio();
        if(audio.ended)
        {
            audio.currentTime = 0;
        }
        await audio.play();
    }

    is_playing() {
        let audio = this.get_audio();
        return !audio.ended && !audio.paused;
    }

    async pause() {
        let audio = this.get_audio();
        if(this.is_playing()) {
            await audio.pause();
        }
    }

    render() {
        var style = { top: this.state.top, marginLeft: this.state.left }
        if (this.state.right) {
            style = { top: this.state.top, marginRight: this.state.right, left: 'auto', right: 0 }
        }
        let paused_image_style = {visibility: this.state.paused};
        let image_style = {visibility: this.state.playing};
        return (
            <div id={this.props.name + "_container"} className={"Audio Audio--z" + this.state.index + " js-element-z" + this.state.index} style={style}>
                <audio id={this.props.name}>
                    <source src={process.env.PUBLIC_URL + "/audio/" + this.props.audio_name /*+ ".mp3"*/} type={"audio/mpeg"} />
                    audio file not supported
                </audio>
                <img id={this.props.name + "_image"} style={image_style} src={process.env.PUBLIC_URL + "/img/px.png"} data-src={require("./img/" + this.props.image_name /*+ ".png"*/)} alt="" className="js-lazy" onClick={this.toggle_play.bind(this, this.props.name)} />
                <img id={this.props.name + "_image"} style={paused_image_style} src={process.env.PUBLIC_URL + "/img/px.png"} data-src={require("./img/" + this.props.image_paused_name /*+ ".png"*/)} alt="" className="js-lazy" onClick={this.toggle_play.bind(this, this.props.name)} />

            </div>
        );
    }
}
