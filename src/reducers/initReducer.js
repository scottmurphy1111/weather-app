import { LOAD_MAIN_CONTENT, REMOVE_DELAYS, SHOW_ERROR } from '../actions/initActions'

export default function initReducer(state = '', {type, payload}) {
    switch(type) {
        case LOAD_MAIN_CONTENT:
            return payload.loaded;

        case REMOVE_DELAYS:
            return payload.loaded;

        case SHOW_ERROR:
            return payload.loaded;

        default:
            return state;
    }
}