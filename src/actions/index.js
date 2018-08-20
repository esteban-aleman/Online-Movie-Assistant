
const MOVIES_API_URL = '/moviesApi';

export function addChatMessage (newMessage) {
    return {
      type: 'CHAT_MESSAGE_ADDED',
      payload: newMessage
    };
}

export function changeChatContext (newContext) {
    return {
        type: 'CHAT_NEW_CONTEXT',
        payload: newContext
    };
}

export function addFilter (filter) {
    return {
        type: 'FILTERS_ADD',
        payload: filter
    };
}

export function removeFilter (filter) {
    return {
        type: 'FILTERS_REMOVE',
        payload: filter
    };
}

export function addSave (movie) {
    return{
      type: 'SAVED_ADD',
      payload: movie
    };
}

export function removeSave (movie) {
    return {
        type: 'SAVED_REMOVE',
        payload: movie
    }
}

export function retrieveSuggestions (filters) {

    return async dispatch => {

        dispatch({
            type: 'SUGGESTIONS_RETRIEVE'
        })

        try {
            const response = await fetch(MOVIES_API_URL + '/retrieve', {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': ' application/json'
                    },
                    body : JSON.stringify(filters)});
            const result = await response.json();
            dispatch({
                type: 'SUGGESTIONS_RETRIEVE_SUCCESS',
                payload: result
            })
        } catch (err) {
            dispatch({
                type: 'SUGGESTIONS_RETRIEVE_FAIL',
                error: err
            })
        }
    }

}