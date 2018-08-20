import React, { Component, Fragment } from 'react';
import { Col } from 'reactstrap';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {removeSave} from "../../actions";

import SavedMovie from '../../components/saved-movie-component'

class SavedMovies extends Component {

    render() {
        return (
            <Fragment>
                {
                    this.props.saved.map((movie,i) =>
                        <Col xs='12' sm='3' lg='2' key={movie.content.id}>
                            <SavedMovie movie={movie}
                                        onMovieRemove={selectedMovie => this.props.removeSave(selectedMovie)}/>
                        </Col>)
                }
            </Fragment>
        );
    }
}


function mapStateToProps(state) {
    return {
        saved: state.savedReducer.saved
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        removeSave: removeSave}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SavedMovies);