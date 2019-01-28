import 'browsernizr/test/hiddenscroll';
import Modernizr from 'browsernizr';

import config from '../../config';
import move from '../../js/move';
import jQuery from 'jquery';
import React, { Component } from 'react';
import Swipeable from 'react-swipeable';
import SplashScreen from '../SplashScreen/SplashScreen';
import Header from '../Header/Header';
import Cover from '../Cover/Cover';
import Board from '../Board/Board';
import ShareLayer from '../ShareLayer/ShareLayer';
import Tutorial from '../Tutorial/Tutorial';
import Progressbar from '../Progressbar/Progressbar';
import DisableLandscape from '../DisableLandscape/DisableLandscape';
import './App.css';

export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: null
        };
    }

    componentDidMount() {
        jQuery.getJSON(config[process.env.NODE_ENV].datasUrl).done(function(datas) {
            this.setState({datas: datas});
        }.bind(this));
    }

    render() {

        function clickBoard() {
            if (Modernizr.hiddenscroll) {
                swipeLeft();
            }
        }

        function swipeFirst() {
            document.body.classList.remove('show-cover');
            move.to(0);
        }

        function swipeLeft() {
            move.next();
        }

        function swipeRight() {
            move.prev();
        }

        if (this.state.datas) {

            return (
                <div className="App">
                    <SplashScreen />
                    <Header />
                    <Swipeable className="App__swipeable" onSwipedLeft={swipeFirst} onClick={swipeFirst}>
                        <Cover />
                    </Swipeable>
                    <Swipeable className="App__swipeable" onSwipedLeft={swipeLeft} onSwipedRight={swipeRight} onClick={clickBoard}>
                        <Board datas={this.state.datas}/>
                    </Swipeable>
                    <Progressbar />
                    <ShareLayer />
                    <Tutorial />
                    <DisableLandscape />
                </div>
            );
        } else {

            return null;
        }
    }
}
