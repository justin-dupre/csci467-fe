import {combineReducers} from 'redux';
import quoteReducer from './quoteReducer';



const rootReducer = combineReducers({
    quoteReducer:quoteReducer
});

export default rootReducer;