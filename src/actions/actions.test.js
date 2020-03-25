import * as initActions from './initActions';
import * as initTypes from './initActions';
import * as wheelActions from './wheelActions';
import * as wheelTypes from './wheelActions';

describe('initActions', () => {
  it('should create a load main content action', () => {
    const loadMainContent = true;
    const expectedAction = {
      type: initTypes.SET_LOAD_MAIN_CONTENT,
      loadMainContent
    };

    expect(initActions.setLoadMainContent(loadMainContent)).toEqual(expectedAction);
  });

  it('should create a remove delays action', () => {
    const removeDelays = true;
    const expectedAction = {
      type: initTypes.SET_REMOVE_DELAYS,
      removeDelays
    };

    expect(initActions.setRemoveDelays(removeDelays)).toEqual(expectedAction);
  });
});

describe('wheelActions', () => {
  it('should create a is wheel action', () => {
    const isWheel = true;
    const expectedAction = {
      type: wheelTypes.SET_IS_WHEEL,
      isWheel
    };

    expect(wheelActions.setIsWheel(isWheel)).toEqual(expectedAction);
  });

  it('should create a moving panel action', () => {
    const movingPanel = true;
    const expectedAction = {
      type: wheelTypes.SET_MOVING_PANEL,
      movingPanel
    };

    expect(wheelActions.setMovingPanel(movingPanel)).toEqual(expectedAction);
  });
});