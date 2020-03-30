import {takeLatest, call, select, fork, delay, put, cancel} from 'redux-saga/effects';
import { getCurrentTemperatureRequest, getDate } from './selector';
import { postSubmitTemperatureReading, getTemperatureReadings } from './request';

import {
  POLLING_SUBMIT_TEMPERATURE_READING,
  END_POLLING_SUBMIT_TEMPERATURE_READING,
  ATTEMPT_RETRIEVE_TEMPERATURE_READINGS,
  successRetrieveTemperatureReadings,
  successPollingSubmitTempatureReading
} from  './action';

const POLLING_DELAY = 60000;

export const submitTemperatureReading = function* (
  loop = true
) {
  while (loop) {
    const currentTemperature = yield select(getCurrentTemperatureRequest);
    yield fork(postSubmitTemperatureReading, currentTemperature);
    yield put(successPollingSubmitTempatureReading(getDate()));
    yield delay(POLLING_DELAY);
  }
}

export const pollingSubmitTemperatureReading = function* () {
  const pollingTask = yield fork(submitTemperatureReading);
  yield call(watchCancelPolling, pollingTask);
}

export const retrieveTemperatureReadings = function* ({ payload }) {
  const { temperatures } = yield call(getTemperatureReadings, payload);
  yield put(successRetrieveTemperatureReadings(temperatures));
}

export function *cancelPolling(pollingTask) {
  yield cancel(pollingTask);
}

export function *watchCancelPolling(pollingTask) {
  yield takeLatest(END_POLLING_SUBMIT_TEMPERATURE_READING, () => cancelPolling(pollingTask));
}

export default function* () {
  try {
    yield takeLatest(POLLING_SUBMIT_TEMPERATURE_READING, pollingSubmitTemperatureReading);
    yield takeLatest(ATTEMPT_RETRIEVE_TEMPERATURE_READINGS, retrieveTemperatureReadings);
  } catch(e) {

  }
}
