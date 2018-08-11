import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

import '../../assets/style/_basics.scss';
import './main-suggestion.scss';

import Ima from '../../assets/img/rhskAzSN6wTVdLqqtvCNHFV56B6.jpg';

class MainSuggestion extends Component {
    render() {
        return (
            <div className="position-relative">
                <img className="main-suggestion__movie-img w-100" src={Ima}/>
                <div className="main-suggestion__movie-overlay d-flex w-100 text--white px-3 align-items-center justify-content-around">
                    <div className="main-suggestion__movie-description">
                        <span className="text--bold d-block">Antman & The Wasp</span>
                        <span className="text--sm">When the creator of a popular video game system dies, a virtual contest is created to compete for his fortune.</span>
                    </div>
                    <Button className="main-suggestion__movie-add-btn bg-transparent border-0 text--white">
                        <FontAwesomeIcon icon={faPlusCircle} size='2x' />
                    </Button>
                </div>
            </div>
        );
    }
}

export default MainSuggestion;
