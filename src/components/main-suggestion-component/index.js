import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import '../../assets/style/_basics.scss';
import './main-suggestion.scss';

class MainSuggestion extends Component{
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

    render() {
        return (
            <div className="position-relative">
                <img onClick={this.modalToggle} className="main-suggestion__movie-img w-100 btn p-0" src={`https://image.tmdb.org/t/p/w1000_and_h563_bestv2${this.props.movie.backdrop_path}`}/>
                <div className="main-suggestion__movie-overlay d-flex w-100 text--white px-3 align-items-center justify-content-around">
                    <div className="main-suggestion__movie-description">
                        <span className="text--bold d-block">{this.props.movie.title}</span>
                        <span className="text--sm d-none d-md-block">{this.props.movie.overview.substring(0, 150)+'...'}</span>
                    </div>
                    {
                        this.props.saved ?
                            <Button className="main-suggestion__movie-add-btn bg-transparent border-0 text--green">
                                <FontAwesomeIcon icon={faCheckCircle} size='2x' />
                            </Button>
                            :
                            <Button className="main-suggestion__movie-add-btn bg-transparent border-0 text--white" onClick={() => this.props.onMovieAdd(this.props.movie)}>
                                <FontAwesomeIcon icon={faPlusCircle} size='2x' />
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

export default MainSuggestion;
