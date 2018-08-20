import { combineReducers } from 'redux';
import ChatMessageReducer from './reducer_chat-message';
import ChatContextReducer from './reducer_chat-context';
import SuggestionsReducer from './reducer_suggestions';
import FiltersReducer from './reducer_filters';
import SavedReducer from './reducer_saved';

const rootReducer = combineReducers({
    chatMessageReducer: ChatMessageReducer,
    chatContextReducer: ChatContextReducer,
    suggestionsReducer: SuggestionsReducer,
    filtersReducer: FiltersReducer,
    savedReducer: SavedReducer
});

export default rootReducer;