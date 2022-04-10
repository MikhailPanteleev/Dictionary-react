import 'regenerator-runtime/runtime';
import { all } from 'redux-saga/effects';
import apiCallsSaga from '../helpers/request/watchRequest';

function* rootSaga() {
  yield all([apiCallsSaga()]);
}

export default rootSaga;
