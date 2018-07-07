import { SET_LOAD_MAIN_CONTENT, SET_REMOVE_DELAYS } from '../actions/initActions';

export default function initReducer(state = [], action) {
    switch(action.type) {
        case SET_LOAD_MAIN_CONTENT:
            return {...state, 
                loadMainContent:action.loadMainContent
            }
            
        case SET_REMOVE_DELAYS:
            return {...state,
                removeDelays:action.removeDelays
            }
 
        default:
            return state;
    }
}