import { SET_IS_WHEEL, SET_MOVING_PANEL } from '../actions/wheelActions';

export default function wheelReducer(state = [], action) {
    switch(action.type) {
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