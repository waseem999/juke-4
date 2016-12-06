
import setLyrics from "../action-creators/lyrics";
import {SET_LYRICS, SEARCH_ARTIST} from '../constants';
import Store from '../store';


function reducer (prevState = {}, action) {

    switch (action.type){
        case SET_LYRICS:
            return Object.assign({}, prevState, {text: action.text} );

        default:
            return prevState;
    }
}

export default reducer;