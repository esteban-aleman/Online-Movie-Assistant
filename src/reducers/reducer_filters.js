const INITIAL_STATE = {
    filters: {
        'genres': [],
        'year': ''
    }
}

export default function(state = INITIAL_STATE, action) {//sci-fi
    switch(action.type) {
        case 'FILTERS_ADD':
            switch (action.payload) {
                case 'action':
                case 'sci-fi':
                case 'comedy':
                case 'horror':
                    return {
                        filters: {...state.filters, genres: [...state.filters.genres, action.payload] }
                    };
                    break;
                default:
                    return state
            }

        case 'FILTERS_REMOVE':
            switch (action.payload) {
                case 'sci-fi':
                case 'commedy':
                    var newFilters = state.genres.filters.slice();
                    var index = newFilters.indexOf(action.payload);
                    if (index > -1) {
                        newFilters.splice(index, 1);
                    }
                    return {
                        filters: {...state.filters, genres: newFilters }
                    };
                    break;
                default:
                    return state
            }
        default:
            return state;
    }
}