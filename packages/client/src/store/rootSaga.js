import { all } from 'redux-saga/effects'

import temperatureSaga from '../temperature/saga';
import productSaga from '../products/saga';

export default function* rootSaga() {
    yield all([temperatureSaga(), productSaga()])
}