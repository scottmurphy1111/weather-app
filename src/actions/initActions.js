export const SET_LOAD_MAIN_CONTENT = 'init:SET_LOAD_MAIN_CONTENT';
export const SET_REMOVE_DELAYS = 'init:SET_REMOVE_DELAYS';
export const SET_IS_WHEEL = 'init:SET_IS_WHEEL';
export const SET_MOVING_PANEL = 'init:SET_MOVING_PANEL';

export function setLoadMainContent(loadMainContent) {
    return {
        type: SET_LOAD_MAIN_CONTENT,
        loadMainContent
    }
}

export function setRemoveDelays(removeDelays) {
    return {
        type: SET_REMOVE_DELAYS,
        removeDelays
    }
}

export function setIsWheel(isWheel) {
    return {
        type: SET_IS_WHEEL,
        isWheel
    }
}

export function setMovingPanel(movingPanel) {
    return {
        type: SET_MOVING_PANEL,
        movingPanel
    }
}