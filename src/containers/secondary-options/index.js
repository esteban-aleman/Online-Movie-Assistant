import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

import '../../assets/style/_basics.scss';
import './secondary-options.scss'

class SecondaryOptions extends Component {
    render() {
        return (
            <div className="d-flex justify-content-between">
                <div className="secondary-options__item">
                    <img className="secondary-options__item-img"
                         src="https://image.tmdb.org/t/p/w300_and_h450_bestv2/2slvblTroiT1lY9bYLK7Amigo1k.jpg"/>
                    <div className="secondary-options__item-manage py-2 d-flex align-items-center">
                        <div className="secondary-options__item-text text--white">
                            <span className="secondary-options__title text--light d-block">The purge</span>
                        </div>
                        <Button className="ml-auto bg-transparent border-0 text--white">
                            <FontAwesomeIcon icon={faPlusCircle} />
                        </Button>
                    </div>
                </div>
            </div>
        );
    }
}

export default SecondaryOptions;