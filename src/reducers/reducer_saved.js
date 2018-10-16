const INITIAL_STATE = {
    saved: [
    ],
    savedSearch: [

    ]
}

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case 'SAVED_ADD':
            return {
                saved: [...state.saved, {
                    watched:false,
                    content: action.payload
                }],
                savedSearch: [...state.savedSearch, action.payload.id]
            };
        case 'SAVED_REMOVE':
            var newSaves = state.saved.slice();
            var index = newSaves.indexOf(action.payload);
            if (index > -1) {
                newSaves.splice(index, 1);

            }
            var newSavedSearch = state.savedSearch.slice();
            var i = newSavedSearch.indexOf(action.payload.content.id);
            if (i > -1) {
                newSavedSearch.splice(index, 1);

            }
            return {
                saved: newSaves,
                savedSearch: newSavedSearch
            };
        case 'SAVED_WATCHED':
            return {
                ...state,
                error: action.error,
                loading: false
            };
        case 'SAVED_UNWATCHED':
            return {
                ...state,
                error: action.error,
                loading: false
            };
        default:
            return state;
    }
}