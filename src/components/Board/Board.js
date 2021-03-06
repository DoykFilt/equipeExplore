import config from '../../config';
import React, { Component } from 'react';
import Edito from '../Edito/Edito';
import Element from '../Element/Element';
import Skew from '../Skew/Skew';
import Video from '../Video/Video';
import Masthead from '../Masthead/Masthead';
import Audio from "../Audio/Audio";
import './Board.css';


function getSizes() {
    var width = Math.min(document.documentElement.clientWidth, config.ratio.width),
		height = Math.min(document.documentElement.clientHeight, config.ratio.height),
		mobile = false,
        slideWidth = width,
        boardHeight = height,
        boardTop = 0;

	if (width < config.ratio.width) {
		mobile = true;
	}
    if (width / height < config.ratio.width / config.ratio.height) {
        boardHeight = config.ratio.height * width / config.ratio.width;
        boardTop = (document.documentElement.clientHeight - boardHeight) / 2;
	}

    return {
        slideWidth: slideWidth,
        boardHeight: boardHeight,
		boardTop: boardTop,
		mobile : mobile
    }
}

export default class Board extends Component {

    constructor(props) {
        super(props);

        this.state = {
            slideWidth:getSizes().slideWidth,
            boardHeight:getSizes().boardHeight,
			boardTop:getSizes().boardTop,
			mobile:getSizes().mobile
        };
    }

    componentDidMount() {
        var _this = this;
        window.addEventListener('resize', function () {
            _this.setState({
                slideWidth:getSizes().slideWidth,
                boardHeight:getSizes().boardHeight,
				boardTop:getSizes().boardTop,
				mobile:getSizes().mobile
            });
        });
    }

    render() {
		var mobile = this.state.mobile;
        return (
            <div id="board" className="Board" style={{marginTop:this.state.boardTop, left:0,  minWidth:this.state.slideWidth, height: this.state.boardHeight}}>

                {/* CHAP 0 - Introduction */}

                <div className="Board__slide">
                    <Element name="CHAP0_CIT1.png" index="p1" positionLeft="5%"  ></Element>
                    <Edito content={this.props.datas.text[0].zone_1} positionTop="40%"></Edito>
                    <Element name="illustrations/ILLUS6_CHAP1_nageur.png" index="m2" positionLeft="10%"></Element>
                </div>
                <div className="Board__slide">
                    <Edito content={this.props.datas.text[0].zone_2} positionTop="25%"></Edito>
                </div>
                <div className="Board__slide">
                    <Edito content={this.props.datas.text[0].zone_3} positionTop="15%"></Edito>
                    <Element name="CHAP0_IMG1.png" index="p2" positionLeft="0%"></Element>
                </div>

                {/* CHAP 1 - Les championnats de France de Thionville */}

                <div className="Board__slide board-small-slide" style={!mobile ? {minWidth: '55vh'} : {}}>
                    <Skew position="left" name="CHAP1__TITRE.png" bg="CHAP1__OUVERTURE.png"></Skew>
                </div>
                <div className="Board__slide board-small-slide" style={!mobile ? {minWidth: '55vh'} : {}}>
                    <Element name="FOND1.png" index="m1" positionLeft="40%"></Element>
                </div>
                <div className="Board__slide">
                    <Edito content={this.props.datas.text[1].zone_1} positionTop="65%"></Edito>
                </div>
                <div className="Board__slide">
                    <Edito content={this.props.datas.text[1].zone_2} positionTop="30%"></Edito>
                </div>
                <div className="Board__slide">
                    <Edito content={this.props.datas.text[1].zone_3} positionTop="6%"></Edito>
                    <Video id="x76kfs9?fbclid=IwAR1661C_ioOrfBDnhTYs0LkJ0HwyOAvThenIZEtPfZVX6dEMHWHLUuXbkno" positionTop="70%" maxHeight="540" ratio="1.2"></Video>
                </div>
                <div className="Board__slide">
                    <Edito content={this.props.datas.text[1].zone_4} positionLeft="20%" positionTop="25%"></Edito>
                    <Element name="illustrations/ILLUS1_CHAP1_eclaboussures.png" index="m2" positionLeft="25%"></Element>
                </div>
                 <div className="Board__slide">
                    <Edito content={this.props.datas.text[1].zone_5} positionTop="60%"></Edito>
                    <Element name="CHAP1_IMG1.png" index="p1" positionLeft="0%"  ></Element>
                </div>
                 <div className="Board__slide">
                    <Edito content={this.props.datas.text[1].zone_6} positionTop="10%"></Edito>
                    <Element name="CHAP1_IMG2.png" index="p1" positionLeft="0%"  ></Element>
                </div>

                {/* CHAP 2 - Un palmarès déjà bien fourni */}

                <div className="Board__slide board-small-slide" style={!mobile ? {minWidth: '55vh'} : {}}>
                    <Skew position="left" name="CHAP2__TITRE.png" bg="CHAP2__OUVERTURE.png"></Skew>
                </div>
                <div className="Board__slide board-small-slide" style={!mobile ? {minWidth: '55vh'} : {}}>
                    <Element name="FOND2.png" index="m1" positionLeft="-40%"></Element>
                </div>
                <div className="Board__slide">
                    <Edito content={this.props.datas.text[2].zone_1} positionTop="10%"></Edito>
                    <Element name="illustrations/ILLUS7_CHAP2_podium.png" index="m2" positionLeft="10%"></Element>
                </div>
                <div className="Board__slide">
                    <Element name="illustrations/ILLUS4_CHAP2_medaile.png" index="m2" positionLeft="20%"></Element>
                    <Edito content={this.props.datas.text[2].zone_2} positionTop="35%"></Edito>
                </div>
                 <div className="Board__slide">
                    <Edito content={this.props.datas.text[2].zone_3} positionTop="50%"></Edito>
                    <Element name="CHAP2_IMG1.png" index="p1" positionLeft="0%"  ></Element>
                    <Element name="FOND2.png" index="m1" positionLeft="-50%"></Element>
                </div>
                <div className="Board__slide">
                    <Element name="CHAP2_CIT1.png" index="p1" positionLeft="0%"  ></Element>
                    <Edito content={this.props.datas.text[2].zone_4} positionTop="20%"></Edito>
                </div>
                <div className="Board__slide">
                    <Edito content={this.props.datas.text[2].zone_5} positionTop="30%"></Edito>
                </div>
                 <div className="Board__slide">
                    <Edito content={this.props.datas.text[2].zone_6} positionTop="60%"></Edito>
                    <Element name="CHAP2_IMG2.png" index="p1" positionLeft="0%"  ></Element>
                    <Element name="FOND2.png" index="m1" positionLeft="-50%"></Element>
                </div>

                {/* CHAP 3 - Une vie qui bascule */}

                <div className="Board__slide board-small-slide" style={!mobile ? {minWidth: '55vh'} : {}}>
                    <Skew position="left" name="CHAP3__TITRE.png" bg="CHAP3__OUVERTURE.png"></Skew>
                </div>
                <div className="Board__slide board-small-slide" style={!mobile ? {minWidth: '55vh'} : {}}>
                </div>
                <div className="Board__slide">
                    <Edito content={this.props.datas.text[3].zone_1} positionTop="10%"></Edito>
                    <Element name="CHAP3_IMG1.png" index="p1" positionLeft="0%"  ></Element>
                </div>
                <div className="Board__slide">
                    <Edito content={this.props.datas.text[3].zone_2} positionTop="35%" positionLeft="50%"></Edito>
                </div>

                <div className="Board__slide">
                    <Element name="CHAP3_CIT1.png" index="m1" positionLeft="0%"  ></Element>
                    <Edito content={this.props.datas.text[3].zone_3} positionTop="55%"></Edito>
                </div>

                <div className="Board__slide">
                    <Edito content={this.props.datas.text[3].zone_4} positionTop="45%"></Edito>
                </div>
                <div className="Board__slide">
                    <Video id="x73dvae?fbclid=IwAR2n-fpdq8ccOID-NuPshp2Ds-Ly657qu0pgry83tRnQ-ao7XLB6xcJtiKQ" positionTop="50%" maxHeight="500" ratio="1.2"></Video>
                </div>


                {/* CHAP 4 - Une reconstruction grâce au sport */}
                <div className="Board__slide board-small-slide" style={!mobile ? {minWidth: '55vh'} : {}}>
                    <Skew position="left" name="CHAP4__TITRE.png" bg="CHAP4__OUVERTURE.png"></Skew>
                </div>
                <div className="Board__slide board-small-slide" style={!mobile ? {minWidth: '55vh'} : {}}>
                    <Element name="FOND2.png" index="m1" positionLeft="-30%"></Element>
                </div>
                <div className="Board__slide">
                    <Element name="CHAP4_IMG1.png" index="p1"></Element>
                </div>
                <div className="Board__slide">
                    <Edito content={this.props.datas.text[4].zone_1} positionTop="25%"></Edito>
                </div>
                <div className="Board__slide">
                    <Edito content={this.props.datas.text[4].zone_2} positionTop="65%"></Edito>
                    <Video id="x76iolo?fbclid=IwAR0qmNOritt_hrx2S88xfInoZMvQ7dqMieDBwvDpJC03nuQ3uufW-ZUur74" maxHeight="500" ratio="1.2" positionTop="30%" positionLeft="150%"></Video>
                    <Element name="FOND2.png" index="m1" positionLeft="-30%"></Element>
                </div>
                <div className="Board__slide">
                    <Element name="CHAP4_IMG2.png" index="m1" positionLeft="17%"></Element>
                </div>
                <div className="Board__slide">
                    <Edito content={this.props.datas.text[4].zone_3} positionTop="10%"></Edito>
                </div>
                <div className="Board__slide">
                    <Element name="FOND2.png" index="m1" positionLeft="-50%"></Element>
                    <Audio name="Thinklink_CHAP 4_Emeline" audio_name="Thinklink-CHAP-4_Emeline.mp3" image_name="emeline.png" image_paused_name="Emeline_Pause.png" positionTop="10%" positionLeft="10%" maxHeight="30%"></Audio>
                    <Audio name="Thinklink_CHAP 4_Nathan" audio_name="Thinklink-CHAP-4_Nathan.mp3" image_name="nathan.png" image_paused_name="Nathan_Equipe_explore_Pause.png" positionTop="25%" positionLeft="50%" maxHeight="30%"></Audio>
                    <Audio name="Thinklink_CHAP 4_Pere" audio_name="Thinklink-CHAP-4_Père-de-Théo.mp3" image_name="Dominique_Curin.png" image_paused_name="Dominique_Curin_Pause.png" positionTop="45%" positionLeft="10%" maxHeight="30%"></Audio>
                    <Audio name="Thinklink_CHAP_4_Maltrait" audio_name="Thinklink-CHAP-4_Maltrait.mp3" image_name="maltrait.png" image_paused_name="Maltrait_Pause.png" positionTop="65%" positionLeft="50%" maxHeight="50%"></Audio>
                    <Element name="FOND2.png" index="m1" positionLeft="-30%"></Element>
                </div>

                {/* CHAP 5 - Théo Curin, sportif à temps plein*/}

                <div className="Board__slide board-small-slide" style={!mobile ? {minWidth: '55vh'} : {}} >
                    <Skew position="left" name="CHAP5__TITRE.png" bg="CHAP5__OUVERTURE.png"></Skew>
                </div>
                <div className="Board__slide board-small-slide" style={!mobile ? {minWidth: '55vh'} : {}}>
                    <Element name="FOND1.png" index="m1" positionLeft="40%"></Element>
                </div>
                <div className="Board__slide">
                    <Element name="illustrations/ILLUS3_CHAP5_lunettes.png" index="m2" positionLeft="50%"></Element>
                    <Edito content={this.props.datas.text[5].zone_1} positionTop="25%"></Edito>
                </div>
                <div className="Board__slide">
                    <Element name="illustrations/ILLUS9_CHAP5_vestiaires.png" index="p1" positionLeft="0%"></Element>
                    <Edito content={this.props.datas.text[5].zone_2} positionTop="50%"></Edito>
                </div>
                 <div className="Board__slide background_chapter_5">
                    <Edito content={this.props.datas.text[5].zone_3} positionTop="65%"></Edito>
                    <Element name="CHAP5_IMG1.png" index="p1" positionLeft="0%" positionTop="20%" ></Element>
                </div>
                 <div className="Board__slide">
                    <Edito content={this.props.datas.text[5].zone_4} positionTop="15%"></Edito>
                    <Element name="CHAP5_IMG2.png" index="p1" positionLeft="-10%" positionTop="60%"  ></Element>
                </div>
                <div className="Board__slide">
                    <Video id="x76io2g?fbclid=IwAR0cRSpWA7MI1Rei7taaU9Uf1wvjxFT7G8YuO_sgOukuQxXTbrkKoFyrlJ8" maxHeight="500" ratio="1.2" positionTop="50%" positionLeft="150%"></Video>
                </div>
                 <div className="Board__slide">
                    <Edito content={this.props.datas.text[5].zone_5} positionTop="20%"></Edito>
                    <Element name="CHAP5_IMG3.png" index="p1" positionLeft="0%"  ></Element>
                </div>
                 <div className="Board__slide">
                    <Edito content={this.props.datas.text[5].zone_6} positionTop="30%"></Edito>
                </div>

                {/* CHAP 6 - La vie de l'étoile montant du handisport français */}

                <div className="Board__slide board-small-slide" style={!mobile ? {minWidth: '55vh'} : {}}>
                    <Skew position="left" name="CHAP6__TITRE.png" bg="CHAP6__OUVERTURE.png"></Skew>
                </div>
                <div className="Board__slide board-small-slide" style={!mobile ? {minWidth: '55vh'} : {}}>
                </div>
                <div className="Board__slide">
                    <Edito content={this.props.datas.text[6].zone_1} positionTop="15%"></Edito>
                    <Element name="illustrations/ILLUS8_CHAP6_vagues.png" index="m2" positionLeft="-40%"></Element>
                </div>
                <div className="Board__slide">
                    <Element name="illustrations/ILLUS2_CHAP6_lignes_d_eau.png" index="m2" positionLeft="50%"></Element>
                    <Edito content={this.props.datas.text[6].zone_2} positionTop="35%"></Edito>
                </div>
                <div className="Board__slide">
                    <Element name="CHAP6_IMG1.png" index="p1" positionLeft="0%"  ></Element>
                    <Edito content={this.props.datas.text[6].zone_3} positionTop="50%"></Edito>
                </div>
                <div className="Board__slide">
                    <Edito content={this.props.datas.text[6].zone_4} positionTop="15%"></Edito>
                    <Element name="illustrations/ILLUS1_CHAP6_eclaboussures.png" index="m2" positionLeft="25%"></Element>
                </div>
                <div className="Board__slide">
                    <Edito content={this.props.datas.text[6].zone_5} positionTop="15%"></Edito>
                    <Audio name="Thinklink_CHAP_6_Maltrait" audio_name="Thinklink-CHAP-6_Maltrait.mp3" image_name="maltrait.png" image_paused_name="Maltrait_Pause.png" positionTop="30%" positionLeft="10%" maxHeight="30%"></Audio>
                    <Audio name="Thinklink_CHAP 6_Nathan" audio_name="Thinklink-CHAP-6_Nathan.mp3" image_name="nathan.png" image_paused_name="Nathan_Equipe_explore_Pause.png" positionTop="50%" positionLeft="50%" maxHeight="30%"></Audio>
                </div>
                <div className="Board__slide">
                    <Edito content={this.props.datas.text[6].zone_6} positionTop="60%"></Edito>
                    <Element name="illustrations/ILLUS3_CHAP6_lunettes.png" index="m1" positionLeft="25%"></Element>
                </div>
                <div className="Board__slide">
                    <Edito content={this.props.datas.text[6].zone_7} positionTop="35%"></Edito>
                    {/* <Element name="CHAP6_IMG2.png" index="p1" positionLeft="0%"  ></Element> */}
                </div>

                {/* CHAP 7 - Conclusion */}

                <div className="Board__slide board-small-slide" style={!mobile ? {minWidth: '55vh'} : {}}>
                    <Skew position="left" name="CHAP7__TITRE.png" bg="CHAP7__OUVERTURE.png"></Skew>
                </div>
                <div className="Board__slide board-small-slide" style={!mobile ? {minWidth: '55vh'} : {}}>
                </div>                
                <div className="Board__slide">
                    <Element name="CHAP7__CIT1.png" index="p1" positionLeft="0%"  ></Element>
                    <Edito content={this.props.datas.text[7].zone_1} positionTop="35%"></Edito>
                    <Element name="illustrations/ILLUS5_CHAP7_olympiques.png" index="m2" positionLeft="20%"></Element>
                </div>
                <div className="Board__slide">
                    {/* <Element name="CHAP7__CIT2.png" index="p1" positionLeft="-15%"  ></Element> */}
                    <Edito content={this.props.datas.text[7].zone_2} positionTop="40%"></Edito>
                    {/* <Element name="illustrations/ILLUS4_CHAP7_medaile.png" index="m2" positionLeft="35%"></Element> */}
                    <Element name="FOND2.png" index="m1" positionLeft="80%"></Element>
                </div>
                <div className="Board__slide">
                    <Masthead />
                </div> 
            </div>
        )
    }
}

