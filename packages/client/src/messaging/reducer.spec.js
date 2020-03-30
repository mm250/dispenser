import deepFreeze from 'deep-freeze'
import { expect } from 'chai';
import { reducer } from './reducer'
import {
  reportSuccessMessage,
  reportErrorMessage,
  clearMessage
} from './action'

const DEFAULT_STATE = deepFreeze({});

describe('[messaging/reducer]', () => {

  it('should return the original state when an unmatched action applied', () => {
      const action = deepFreeze({ type: 'dummyAction' });
      const state = reducer(DEFAULT_STATE, action);
      expect(state).to.eql(DEFAULT_STATE);
  })

  it('should set back to original state for a clear action', () => {
    const action = deepFreeze(clearMessage());
    const state = reducer(DEFAULT_STATE, action);
    expect(state).to.eql(DEFAULT_STATE);
  })

  it('should set messaging success message for a success action', () => {
    const message = "xxxxxxxxxxx";
    const action = deepFreeze(reportSuccessMessage(message));
    const state = reducer(DEFAULT_STATE, action);

    expect(state).to.eql({
      message: {
        text: message,
        type: "success"
      }
    })
  })

  it('should set messaging error message for a error action', () => {
    const message = "xxxxxxxxxxx";
    const action = deepFreeze(reportErrorMessage(message));
    const state = reducer(DEFAULT_STATE, action);

    expect(state).to.eql({
      message: {
        text: message,
        type: "error"
      }
    })
  })
})