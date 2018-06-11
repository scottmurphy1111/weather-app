export const SET_IS_WHEEL = 'init:SET_IS_WHEEL';
export const SET_MOVING_PANEL = 'init:SET_MOVING_PANEL';

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