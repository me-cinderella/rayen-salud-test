import { createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk'
import fetch from './fetchReducer';

const combinedReducers = combineReducers({
    fetch
});

const rootReducer = createStore( combinedReducers, applyMiddleware( thunk ));

export default rootReducer;