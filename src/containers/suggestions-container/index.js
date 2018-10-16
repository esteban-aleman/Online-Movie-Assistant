import React, { Component, Fragment } from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {retrieveSuggestions, addSave} from "../../actions";

import MainSuggestion from '../../components/main-suggestion-component'
import SecondarySuggestion from "../../components/secondary-suggestion-component";

class Suggestions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hierachy: this.props.hierachy
        }
    }

    componentDidMount () {
        this.props.retrieveSuggestions(this.props.filters);
    }

    render() {
        return (
            <div className="d-block d-md-flex  justify-content-between">
                {
                    this.props.loading
                        ?
                        <div></div>
                        :
                        this.state.hierachy==='main'
                            ? <MainSuggestion movie={this.props.suggestions[0]}
                                              saved={this.props.savedSearch.indexOf(this.props.suggestions[0].id)>-1}
                                              onMovieAdd={selectedMovie => this.props.addSave(selectedMovie)}/>

                            : this.props.suggestions.map((movie,i) =>
                                i!==0 && i<6 && <SecondarySuggestion key={movie.id} movie={movie}
                                                                     saved={this.props.savedSearch.indexOf(movie.id)>-1}
                                                                     onMovieAdd={selectedMovie => this.props.addSave(selectedMovie)}/>
                            )
                }
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        suggestions: state.suggestionsReducer.suggestions,
        loading: state.suggestionsReducer.loading,
        filters: state.filtersReducer.filters,
        saved: state.savedReducer.saved,
        savedSearch: state.savedReducer.savedSearch
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        retrieveSuggestions: retrieveSuggestions,
        addSave: addSave}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Suggestions);