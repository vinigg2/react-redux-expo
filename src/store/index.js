import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reactotron from '../helpers/reactotron';
import rootReducer from './ducks';
import rootSaga from './sagas';

if (__DEV__) {
  global.console.tron = reactotron();
}

const middlewares = [];
const sagaMonitor = __DEV__ ? global.console.tron.createSagaMonitor() : null;
const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

middlewares.push(sagaMiddleware);

const composer = __DEV__
  ? compose(
    applyMiddleware(...middlewares),
    global.console.tron.createEnhancer(),
  )
  : compose(applyMiddleware(...middlewares));

const store = createStore(rootReducer, composer);

sagaMiddleware.run(rootSaga);

export default store;
