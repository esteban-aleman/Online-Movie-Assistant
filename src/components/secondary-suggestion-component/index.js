import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

import '../../assets/style/_basics.scss';
import './secondary-suggestions.scss';

const SecondarySuggestion = (props) => {
        const{movie} = props;
        return (
            <div className="secondary-options__item">
                <img className="secondary-options__item-img"
                     src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${movie.backdrop_path}`}/>
                <div className="secondary-options__item-manage py-2 d-flex align-items-center">
                    <div className="secondary-options__item-text text--white">
                        <span className="secondary-options__title text--light d-block">{movie.original_title}</span>
                    </div>
                    <Button className="ml-auto bg-transparent border-0 text--white">
                        <FontAwesomeIcon icon={faPlusCircle} />
                    </Button>
                </div>
            </div>
        );
}

export default SecondarySuggestion;