import initReducer from './initReducer';
import * as initTypes from '../actions/initActions';

describe('initReducer', () => {
  it('should return empty state', () => {
    expect(initReducer(undefined, {})).toEqual([]);
  });
  it('should handle SET_LOAD_MAIN_CONTENT', () => {
    expect(
      initReducer([
        {
          loadMainContent: false
        }
      ], {
        initTypes: initTypes.SET_LOAD_MAIN_CONTENT,
        loadMainContent: true
      })
    ).toEqual([
      {
        loadMainContent: false
      }
    ],
    {
      loadMainContent: true
    }
    );
  });
  it('should handle SET_REMOVE_DELAYS', () => {
    expect(
      initReducer([
        {
          removeDelays: false
        }
      ], {
        initTypes: initTypes.SET_REMOVE_DELAYS,
        removeDelays: true
      })
    ).toEqual([
      {
        removeDelays: false
      }
    ],
    {
      removeDelays: true
    }
    );
  });
});