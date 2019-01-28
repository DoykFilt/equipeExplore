import React, { Component } from 'react';
import './Masthead.css';


export default class Element extends Component {

    componentDidMount() {
        require('../../js/external/twitter.js')();
    }

    render() {

        return (
            <div className="Masthead">
                <div className="Masthead__item">
                    <span className="Masthead__label white">Conçu, écrit et réalisé par</span>
                    <span className="Masthead__details">Charlotte Durand, Aurore Gayte, Gabrielle Ramain, Clotilde Ravel, Léa Sanchez, Lucas Wicky, Marie Zafimehy (avec Solène de Larquier)<a href="//twitter.com/sciencespoEDJ" className="twitter-follow-button" data-show-count="false" data-lang="fr" data-dnt="true">Suivre</a></span>
                </div>
                <div className="Masthead__item">
                    <span className="Masthead__label white">Traductions</span>
                    <span className="Masthead__details">Caroline Bossard, Sigi Hofmann, Annie Métral, Mathilde Saliou, Yann Schreiber, Victoria Wegner</span>
                </div>
                <div className="Masthead__item">
                    <span className="Masthead__label white">Développeur</span>
                    <span className="Masthead__details">Raphaël Dardeau<a href="//twitter.com/iron_dev" className="twitter-follow-button" data-show-count="false" data-lang="fr" data-dnt="true">Suivre</a></span>
                </div>
                <div className="Masthead__item">
                    <span className="Masthead__label"></span>
                    <span className="Masthead__details"></span>
                </div>
                <div className="Masthead__item Masthead__item--full">
                    <span className="Masthead__details"><span className="Masthead__label white">Photos :</span> Charlotte Durand ; collections personnelles d’Erik Schinegger et de Maria José Martínez-Patiño ; Athletics Federation of India (CC BY-SA 4.0) ; karlschranz.com (CC BY-SA 3.0) ; JD Noske, Anefo / Nationaal Archief (CC BY-SA 3.0 NL) et archives L’Equipe.</span>
                </div>
                <div className="Masthead__item Masthead__item--full">
                    <span className="Masthead__details"><span className="Masthead__label white">Vidéos :</span> Charlotte Durand, Aurore Gayte</span>
                </div>
                <div className="Masthead__item Masthead__item--full">
                    <span className="Masthead__details"><span className="Masthead__label white">Remerciements :</span> Philippe Peyre de l’AJL (Association des Journalistes LGBT), Grégory Blachier, Simon Ruben, Patrice Trapier, Ecole de Journalisme de Sciences Po, Erik et Christa Schinegger</span>
                </div>
            </div>
        );
    }
}
