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
                        <Col sm='8' className="main-suggestion mr-0">
                            <Suggestions hierachy='main'/>
                        </Col>
                        <Col sm='4' className="chat d-block">
                            <Chat/>
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