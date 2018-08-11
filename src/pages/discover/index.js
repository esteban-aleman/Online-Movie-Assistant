import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import MainSuggestion from '../../containers/main-suggestion';
import Chat from '../../containers/chat'
import SecondaryOptions from '../../containers/secondary-options';

export default function Discover(props) {
    return (
        <main>
            <Container>
                <Row>
                    <Col>
                        <Row className='mb-4'>
                            <Col sm='8' className="main-suggestion mr-0">
                                <MainSuggestion/>
                            </Col>
                            <Col sm='4' className="chat d-block">
                                <Chat/>
                            </Col>
                        </Row>
                        <Row className='secondary-options'>
                            <Col>
                                <SecondaryOptions/>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </main>
    );
}