import React, { Component, Fragment } from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {retrieveSuggestions} from "../../actions";

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
            <div className="d-flex justify-content-between">
                {
                    this.props.loading
                        ?
                        <div></div>
                        :
                        this.state.hierachy==='main'
                            ? <MainSuggestion movie={this.props.suggestions[0]}/>

                            : this.props.suggestions.map((movie,i) =>
                                i!==0 && i<6 && <SecondarySuggestion key={movie.id} movie={movie}/>
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
        filters: state.filtersReducer.filters
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        retrieveSuggestions: retrieveSuggestions}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Suggestions);