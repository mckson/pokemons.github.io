import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from '../reducers';
import rootSaga from '../sagas';

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const sagaEnhancer = applyMiddleware(sagaMiddleware);

  const composedEnhacers = composeWithDevTools(sagaEnhancer);

  const store = createStore(rootReducer, composedEnhacers);

  sagaMiddleware.run(rootSaga);

  return store;
};

export default configureStore;
