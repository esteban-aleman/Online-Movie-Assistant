import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import Suggestions from '../../containers/suggestions-container';
import Chat from '../../containers/chat-container'

const Discover = (props) => {
    return (
        <Container>
            <Row>
                <Col>
                    <Row className='mb-4'>
                        <Col md='8' className="main-suggestion mr-0 d-none d-md-block">
                            <Suggestions hierachy='main'/>
                        </Col>
                        <Col md='4' className="chat d-block mb-4 mb-md-0">
                            <Chat/>
                        </Col>
                        <Col md='8' className="main-suggestion mr-0 d-md-none">
                            <Suggestions hierachy='main'/>
                        </Col>
                    </Row>
                    <Row className='secondary-options'>
                        <Col>
                            <Suggestions hierachy='secondary'/>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}

export default Discover;