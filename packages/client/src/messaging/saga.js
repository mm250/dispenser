import { put, delay } from 'redux-saga/effects';
import { clearMessage } from '../messaging/action';

const WAIT = 3000;

export const reportMessage = function* (action) {
   yield put(action);
   yield delay(WAIT);
   yield put(clearMessage());
}