const INITIAL_STATE = {
    context: {}
}

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case 'CHAT_NEW_CONTEXT':
            return {
                context: action.payload
            };
    }
    return state;
}