const INITIAL_STATE = {
    chatMessages: []
}

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case 'CHAT_MESSAGE_ADDED':
            return {
                chatMessages: [...state.chatMessages, action.payload]
            };
    }
    return state;
}