import deepFreeze from 'deep-freeze'
import { expect } from 'chai';
import { reducer } from './reducer'

import {
  successPollingSubmitTempatureReading,
  successRetrieveTemperatureReadings
} from './action'

const DEFAULT_STATE = deepFreeze({
  current: { temperature: 30, lastSubmitted: "" },
  history: []
});

describe('[temperature/reducer]', () => {

  it('should return the original state when an unmatched action applied', () => {
      const action = deepFreeze({ type: 'dummyAction' });
      const state = reducer(DEFAULT_STATE, action);
      expect(state).to.eql(DEFAULT_STATE);
  })

  it('should update the current temperature in the store with the last submitted date', () => {

    const now = new Date ();
    const action = deepFreeze(successPollingSubmitTempatureReading(now));
    const state = reducer(DEFAULT_STATE, action);

    const UPDATED_STORE = {
      ...DEFAULT_STATE,
      current: {
        ...DEFAULT_STATE.current,
        lastSubmitted: now
      }
    }
    expect(state).to.eql(UPDATED_STORE);
  })

  it('should update the store with the temperature history readings', () => {

    const temperatureHistory = [{
        temperature: 99.0,
        timestamp: "1585321181"
      },{
        temperature: 97.0,
        timestamp: "1585321181"
      }];

    const state = reducer(DEFAULT_STATE,
      successRetrieveTemperatureReadings(temperatureHistory));

    const UPDATED_STORE = {
      ...DEFAULT_STATE,
      history: temperatureHistory
    }

    expect(state).to.eql(UPDATED_STORE);
  })
})