export const SET_IS_WHEEL = 'wheel:SET_IS_WHEEL';
export const SET_MOVING_PANEL = 'wheel:SET_MOVING_PANEL';

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