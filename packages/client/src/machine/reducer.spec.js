import deepFreeze from 'deep-freeze'
import { expect } from 'chai';
import { reducer } from './reducer'

export const DEFAULT_STATE = { machine_id: "123" };

describe('[machine/reducer]', () => {
  it('should return the original state when an unmatched action applied', () => {
      const action = deepFreeze({ type: 'dummyAction' });
      const state = reducer(DEFAULT_STATE, action);
      expect(state).to.eql(DEFAULT_STATE);
  })
})