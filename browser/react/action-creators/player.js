import { START_PLAYING, STOP_PLAYING } from '../constants';


const player = (type) => {

    switch (type) {
        case "play": 
            return { type: START_PLAYING };
        
        case "pause":
            return {type: STOP_PLAYING }

        default : return { type: STOP_PLAYING }
    }   
 }

export default player;