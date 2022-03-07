import { all } from 'redux-saga/effects';
import 'regenerator-runtime/runtime';

import apiCallsSaga from './apiCallsSaga';

function* rootSaga() {
  yield all([apiCallsSaga()]);
}

export default rootSaga;
