import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

import '../../assets/style/_basics.scss';
import './secondary-suggestion.scss';
import {faCheckCircle} from "@fortawesome/free-solid-svg-icons/index";

class SecondarySuggestion extends Component{
    constructor(props) {
        super(props);
        this.modalToggle = this.modalToggle.bind(this);
        this.state = {
            hierachy: this.props.hierachy,
            openModal: false
        }
    }

    modalToggle() {
        this.setState({
            ...this.state,
            openModal : !this.state.openModal
        });
    }

    render()
    {
        return (
            <div className="secondary-options__item d-flex d-md-block justify-content-between mb-4 mb-md-0">
                <img onClick={this.modalToggle} className="secondary-options__item-img btn p-0"
                     src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${this.props.movie.backdrop_path}`}/>
                <div className="secondary-options__item-manage py-2 d-flex align-items-center">
                    <div className="secondary-options__item-text text--white">
                        <span className="secondary-options__title text--light d-block">{this.props.movie.title}</span>
                    </div>
                    {
                        this.props.saved ?
                            <Button className="main-suggestion__movie-add-btn bg-transparent border-0 text--green">
                                <FontAwesomeIcon icon={faCheckCircle}/>
                            </Button>
                            :
                            <Button className="main-suggestion__movie-add-btn bg-transparent border-0 text--white"
                                    onClick={() => this.props.onMovieAdd(this.props.movie)}>
                                <FontAwesomeIcon icon={faPlusCircle}/>
                            </Button>

                    }
                </div>
                <Modal isOpen={this.state.openModal}>
                    <ModalHeader
                        className='bg--primary-color text--white border-0'>{this.props.movie.title}</ModalHeader>
                    <ModalBody className='flex-column d-flex flex-sm-row bg--primary-color text--white'>
                        <div className='d-flex justify-content-center h-100'>
                            <img className="detail-modal__movie-img"
                                 src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${this.props.movie.backdrop_path}`}/>
                        </div>
                        <div className='d-flex flex-column pl-2'>
                            <p>{this.props.movie.overview}</p>
                            <div className='d-flex mt-auto'>
                                <div>
                                    <p className='text--brand-color'>Release date</p>
                                    <span>{this.props.movie.release_date}</span>
                                </div>
                                <div className='ml-auto'>
                                    <p className='text--brand-color'>Rating</p>
                                    <span>{this.props.movie.vote_average}</span>
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

export default SecondarySuggestion;