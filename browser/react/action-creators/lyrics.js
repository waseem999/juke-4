
import {SET_LYRICS} from '../constants';


const setLyrics = (text) => 
    {
        return { 
            type: SET_LYRICS,
            text: text
        }
    }

export default setLyrics;
