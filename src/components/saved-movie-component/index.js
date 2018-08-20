import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import '../../assets/style/_basics.scss';
import './saved-movie.scss';

const SavedMovie = (props) => {
        const{movie, onMovieRemove} = props;
        return (
            <div className="saved-movies__item d-flex d-md-block justify-content-between mb-4 mb-md-0">
                <img className="saved-movies__item-img"
                     src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${movie.content.backdrop_path}`}/>
                <div className="saved-movies__item-manage py-2 d-flex align-items-center">
                    <div className="saved-movies__item-text text--white">
                        <span className="saved-movies__title text--light d-block">{movie.content.title}</span>
                    </div>
                    <Button className="ml-auto bg-transparent border-0 text--white" onClick={() => onMovieRemove(movie)}>
                        <FontAwesomeIcon icon={faTimes} />
                    </Button>
                </div>
            </div>
        );
}

export default SavedMovie;