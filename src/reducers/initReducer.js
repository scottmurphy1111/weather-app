import { SET_IS_WHEEL, SET_MOVING_PANEL, SET_LOAD_MAIN_CONTENT, SET_REMOVE_DELAYS } from '../actions/initActions';

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

        case SET_IS_WHEEL:
            return {...state, 
                isWheel:action.isWheel
            }
            
        case SET_MOVING_PANEL:
            return {...state,
                movingPanel:action.movingPanel
            }
 
        default:
            return state;
    }
}