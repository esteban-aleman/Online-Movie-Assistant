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
                case 'adventure':
                case 'animation':
                case 'comedy':
                case 'crime':
                case 'documentary':
                case 'drama':
                case 'family':
                case 'fantasy':
                case 'history':
                case 'horror':
                case 'music':
                case 'mystery':
                case 'romance':
                case 'sci-fi':
                case 'thriller':
                case 'war':
                case 'western':
                    return {
                        filters: {...state.filters, genres: [action.payload] }//[...state.filters.genres, action.payload]
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