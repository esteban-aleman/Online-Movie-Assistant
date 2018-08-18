import React from 'react';
import { Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

import '../../assets/style/_basics.scss';
import './main-suggestion.scss';

const MainSuggestion = (props) => {
    const{ movie } = props;
    return (
        <div className="position-relative">
            <img className="main-suggestion__movie-img w-100" src={`https://image.tmdb.org/t/p/w1000_and_h563_bestv2${movie.backdrop_path}`}/>
            <div className="main-suggestion__movie-overlay d-flex w-100 text--white px-3 align-items-center justify-content-around">
                <div className="main-suggestion__movie-description">
                    <span className="text--bold d-block">{movie.original_title}</span>
                    <span className="text--sm">{movie.overview.substring(0, 200)+'...'}</span>
                </div>
                <Button className="main-suggestion__movie-add-btn bg-transparent border-0 text--white">
                    <FontAwesomeIcon icon={faPlusCircle} size='2x' />
                </Button>
            </div>
        </div>
        );
}

export default MainSuggestion;
