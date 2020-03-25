export const SET_LOAD_MAIN_CONTENT = 'init:SET_LOAD_MAIN_CONTENT';
export const SET_REMOVE_DELAYS = 'init:SET_REMOVE_DELAYS';

export function setLoadMainContent(loadMainContent) {
  return {
    type: SET_LOAD_MAIN_CONTENT,
    loadMainContent
  };
}

export function setRemoveDelays(removeDelays) {
  return {
    type: SET_REMOVE_DELAYS,
    removeDelays
  };
}
