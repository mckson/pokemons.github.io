import { call, put, takeEvery } from 'redux-saga/effects';
import apiCallsMapping from '../api/apiCallsMapping';
import { postfixes } from '../constants';

function* createRequest(action) {
  try {
    const callMethod = apiCallsMapping(action);

    const response = yield call(callMethod, action.payload);

    yield put(createSuccessAction(action, response.data));
  } catch (error) {
    console.log(error);
    yield put(createFailAction(action, error.message));
  }
}

const createSuccessAction = (action, payload) => ({
  type: action.type.slice(0, action.type.length - postfixes.REQUEST.length) + postfixes.SUCCESS,
  payload,
  meta: action.meta,
});

const createFailAction = (action, payload) => ({
  type: action.type.slice(0, action.type.length - postfixes.REQUEST.length) + postfixes.FAIL,
  payload,
  meta: action.meta,
});

const isApiCallAction = (action) => {
  return action.type.endsWith(postfixes.REQUEST);
};

function* apiCallsSaga() {
  yield takeEvery(isApiCallAction, createRequest);
}

export default apiCallsSaga;
