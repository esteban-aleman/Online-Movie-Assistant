const INITIAL_STATE = {
    chatMessages: [{text: 'Hello! I\'m Oma and I\'m here to help you choose a movie to watch! Here I\'m showing your trending movies but if you want something else just let me know.', author:'ai'}]
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