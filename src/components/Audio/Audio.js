import React, { Component } from 'react';
import './Audio.css';

export default class Audio extends Component {

    constructor(props) {
        super(props);
        this.state = {
            index: 0,
			left: 0,
			right: 0,
        };
    }

    componentDidMount() {
        if (this.props.index) {
            this.setState({index: this.props.index});
        }
        if (this.props.positionLeft) {
            this.setState({left: this.props.positionLeft});
		} else if (this.props.positionRight) {
			this.setState({right: this.props.positionRight});
		}
    }

    async play(event, audio_name)
    {
        try{
            let player = document.getElementById(event);
            if(player.ended)
            {
                player.currentTime = 0;
                await player.play();
            }
            else
            {
                if(player.paused)
                {
                    await player.play();
                }
                else{
                    await player.pause();
                }
            }

        }
        catch(exception)
        {
            console.error(exception);
            
        }
    }

    render() {
		var style = {marginLeft: this.state.left}
		if (this.state.right) {
			style = {marginRight: this.state.right, left: 'auto', right: 0}
        }
        return (
            <div id={this.props.name+"_container"} className={"Audio Audio--z" + this.state.index + " js-element-z" + this.state.index} style={style}>
                <audio id={this.props.name}>
                    <source src={process.env.PUBLIC_URL + "/audio/" + this.props.name + ".mp3"} type={"audio/mpeg"} />
                    audio file not supported
                </audio>
                <img src={process.env.PUBLIC_URL + "/img/px.png"} data-src={require("./img/" + this.props.name + ".png")} alt="" className="js-lazy" onClick={this.play.bind(null, this.props.name)}/>
            </div>
        );
    }
}
