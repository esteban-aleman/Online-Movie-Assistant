import { combineReducers } from 'redux';
import ChatMessageReducer from './reducer_chat-message';
import ChatContextReducer from './reducer_chat-context';
import SuggestionsReducer from './reducer_suggestions';
import FiltersReducer from './reducer_filters';

const rootReducer = combineReducers({
    chatMessageReducer: ChatMessageReducer,
    chatContextReducer: ChatContextReducer,
    suggestionsReducer: SuggestionsReducer,
    filtersReducer: FiltersReducer
});

export default rootReducer;