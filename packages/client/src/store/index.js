import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { reducer as temperature} from '../temperature/reducer';
import { reducer as products} from '../products/reducer';
import { reducer as messaging} from '../messaging/reducer';
import { reducer as machine} from '../machine/reducer';
import rootSaga from './rootSaga';

const rootReducer = combineReducers({
  temperature, machine, products, messaging
});

const sagaMiddleware = createSagaMiddleware();

export default createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);