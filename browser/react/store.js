import {createStore, combineReducers} from 'redux';

import {applyMiddleware} from 'redux';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import lyricsReducer from './reducers/lyrics-reducer';
import playerReducer from './reducers/player-reducer';


const logger = createLogger();
const middleware = applyMiddleware(logger, thunkMiddleware);
const reducer = combineReducers({
  lyrics: lyricsReducer,
  player: playerReducer
});


export default createStore(reducer, middleware);

