import { all } from 'redux-saga/effects';
import homeSagas from './containers/home/sagas';

export default function* () {
  yield all([
    homeSagas(),
  ]);
}