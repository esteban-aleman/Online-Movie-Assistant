import React from 'react';
import { Container, Row } from 'reactstrap';
import SavedMovies from '../../containers/saved-movies-container';

const Saved = (props) => {
    return (
        <Container>
            <Row>
                <SavedMovies/>
            </Row>
        </Container>
    );
}

export default Saved;