import { all, takeLatest } from 'redux-saga/effects';
import Api from './services/api';

/* ------------- Types ------------- */


/* ------------- Sagas ------------- */


/* ------------- API ------------- */
const api = Api.create();

/* ------------- Connect Types To Sagas ------------- */
const root = function* () {
  yield all([

};

export default root;