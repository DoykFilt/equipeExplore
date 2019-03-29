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
                    <span className="Masthead__label black">Réalisation</span>
                    <span className="Masthead__details">
                    Hugo Girard <a href="//twitter.com/@HugoGirard_" className="twitter-follow-button" data-show-count="false" data-lang="fr" data-dnt="true">Suivre</a>
                    Valériane Gouban <a href="//twitter.com/@ValerianeGouban" className="twitter-follow-button" data-show-count="false" data-lang="fr" data-dnt="true">Suivre</a>
                    Adrien Petiteau <a href="//twitter.com/@AdrienPetiteau" className="twitter-follow-button" data-show-count="false" data-lang="fr" data-dnt="true">Suivre</a>
                    Romain Pichon <a href="//twitter.com/@RomainPichon86" className="twitter-follow-button" data-show-count="false" data-lang="fr" data-dnt="true">Suivre</a>
                    Ewen Renou <a href="//twitter.com/@RenouEwen" className="twitter-follow-button" data-show-count="false" data-lang="fr" data-dnt="true">Suivre</a></span>
                </div>
                <div className="Masthead__item">
                    <span className="Masthead__label white">Photos</span>
                    <span className="Masthead__details">Ecole publique de journalisme de Tours, Agence France-Presse, Fédération Française de Handisport, Parents de Théo Curin</span>
                </div>
                <div className="Masthead__item">
                    <span className="Masthead__label white">Illustrations</span>
                    <span className="Masthead__details">Salomé Fillon</span>
                </div>
                <div className="Masthead__item">
                    <span className="Masthead__label white">Vidéos</span>
                    <span className="Masthead__details">Ecole publique de journalisme de Tours</span>
                </div>
                <div className="Masthead__item">
                    <span className="Masthead__label">Développeurs</span>
                    <span className="Masthead__details black">
                    Thibaud Beaufils
                    Jean Hilleriteau
                    </span>
                </div>
                <div className="Masthead__item">
                    <span className="Masthead__label white">Remerciements</span>
                    <span className="Masthead__details">Anne Bayard, Amandine Leclercq, Lycée Valery Larbaud de Cusset (Allier), Stade aquatique de Vichy Communauté, CREPS Vichy Auvergne, Centre de Loisirs Nautiques de Thionville.</span>
                </div>
            </div>
        );
    }
}
