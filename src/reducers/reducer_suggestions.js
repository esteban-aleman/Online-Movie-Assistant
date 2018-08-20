const INITIAL_STATE = {
    suggestions: [],
    loading: true,
    error: ''
}

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case 'SUGGESTIONS_RETRIEVE':
            return {
                ...state,
                loading: true
            };
        case 'SUGGESTIONS_RETRIEVE_SUCCESS':
            //remove first just for demo due to porn in results
            let newSuggestions = action.payload.results.slice();
            newSuggestions.splice(0,1);
            return {
                ...state,
                suggestions: newSuggestions,
                loading: false
            };
        case 'SUGGESTIONS_RETRIEVE_FAIL':
            return {
                ...state,
                error: action.error,
                loading: false
            };
        default:
            return state;
    }
}