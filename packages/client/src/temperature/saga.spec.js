import { testSaga } from 'redux-saga-test-plan';
import { createMockTask } from '@redux-saga/testing-utils';

import {
  submitTemperatureReading,
  pollingSubmitTemperatureReading,
  watchCancelPolling,
  retrieveTemperatureReadings,
  cancelPolling
} from './saga';
import {getTemperatureReadings} from './request';

import {successRetrieveTemperatureReadings} from "./action";

describe('[temperature/saga]', () => {

  describe('cancelPolling', () => {

    it('should call cancel to stop polling', () => {
      const task = createMockTask();
      return testSaga(
        cancelPolling,
        task
      )
        .next()
        .cancel(task)
        .next()
        .isDone();
    })
  })

  describe('pollingSubmitTemperatureReading', () => {
    const CANCEL_ID = { }
    it('should fork to submitTemperatureReading, passing fork_id to watchCancelPolling', () => {
      return testSaga(
        pollingSubmitTemperatureReading
      )
        .next()
        .fork(submitTemperatureReading)
        .next(CANCEL_ID)
        .call(watchCancelPolling, CANCEL_ID)
        .next()
        .isDone();
    })
  })

  describe('pollingSubmitTemperatureReading', () => {
    const params = { payload: {} }
    const response = { temperatures: [] }
    it('should fetch temperature readings, and update the store with the readings', () => {
      return testSaga(
        retrieveTemperatureReadings,
        params
      )
        .next()
        .call(getTemperatureReadings, params.payload)
        .next(response)
        .put(successRetrieveTemperatureReadings([]))
        .next()
        .isDone();
    })
  })
})

