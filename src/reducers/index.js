import {
    combineReducers
} from 'redux';
import Room_reducer from './reducer_room';

const rootReducer = combineReducers({

    room: Room_reducer

});

export default rootReducer;