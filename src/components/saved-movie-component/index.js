import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import '../../assets/style/_basics.scss';
import './saved-movie.scss';

class SavedMovie extends Component{
    constructor(props) {
        super(props);
        this.modalToggle = this.modalToggle.bind(this);
        this.state = {
            openModal: false
        }
    }

    modalToggle() {
        this.setState({
            ...this.state,
            openModal : !this.state.openModal
        });
    }
    render() {
        return (
            <div className="saved-movies__item d-flex d-md-block justify-content-between mb-4 mb-md-0">
                <img onClick={this.modalToggle} className="saved-movies__item-img btn p-0"
                     src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${this.props.movie.content.backdrop_path}`}/>
                <div className="saved-movies__item-manage py-2 d-flex align-items-center">
                    <div className="saved-movies__item-text text--white">
                        <span className="saved-movies__title text--light d-block">{this.props.movie.content.title}</span>
                    </div>
                    <Button className="ml-auto bg-transparent border-0 text--white"
                            onClick={() => this.props.onMovieRemove(this.props.movie)}>
                        <FontAwesomeIcon icon={faTimes}/>
                    </Button>
                </div>
                <Modal isOpen={this.state.openModal}>
                    <ModalHeader
                        className='bg--primary-color text--white border-0'>{this.props.movie.content.title}</ModalHeader>
                    <ModalBody className='flex-column d-flex flex-sm-row bg--primary-color text--white'>
                        <div className='d-flex justify-content-center h-100'>
                            <img className="detail-modal__movie-img"
                                 src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${this.props.movie.content.backdrop_path}`}/>
                        </div>
                        <div className='d-flex flex-column pl-2'>
                            <p>{this.props.movie.content.overview}</p>
                            <div className='d-flex mt-auto'>
                                <div>
                                    <p className='text--brand-color'>Release date</p>
                                    <span>{this.props.movie.content.release_date}</span>
                                </div>
                                <div className='ml-auto'>
                                    <p className='text--brand-color'>Rating</p>
                                    <span>{this.props.movie.content.vote_average}</span>
                                </div>
                            </div>
                        </div>
                    </ModalBody>
                    <ModalFooter className='bg--primary-color border-0'>
                        <Button className='bg--primary-color text--white' onClick={this.modalToggle}>Close</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default SavedMovie;