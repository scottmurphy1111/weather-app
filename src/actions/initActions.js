import $ from 'jquery';

export const LOAD_MAIN_CONTENT = 'loaded:loadMainContent';
export const REMOVE_DELAYS = 'loaded:removeDelays';
export const SHOW_ERROR = 'loaded:showError'

export function loadMainContent(isLoaded) {
    return {
        type: LOAD_MAIN_CONTENT,
        payload: {
            loaded: isLoaded
        }
    }
}

export function removeDelays(isLoaded) {
    return {
        type: REMOVE_DELAYS,
        payload: {
            loaded: isLoaded
        }
    }
}

export function showError() {
    return {
        type: SHOW_ERROR,
        payload: {
            loaded: 'ERROR!!!'
        }
    }
}

export function apiRequest() {
    return dispatch => {
        $.ajax({
            url: '../data/data.json',
            success() {
                console.log('success');
                
            },
            error() {
                console.log('error');

                dispatch(showError());
            }
        });
    }
}