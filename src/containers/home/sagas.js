import { put, select, takeLatest } from 'redux-saga/effects';
// import { saveAs } from 'file-saver';
import { fromJS } from 'immutable';
// import API from '../../api';
import { ACTIONS } from './constants';

const formSelector = state => state.getIn(['homeReducer', 'form']);
const listSelector = state => state.getIn(['homeReducer', 'list']);

function* addDataSaga() {
  try {
    const form = yield select(formSelector);
    const list = yield select(listSelector);

    const payload = list.push(fromJS({
      date: form.get('date'),
      receipts: parseFloat(form.get('receipts')),
      price: parseFloat(form.get('price')),
      index: parseFloat(form.get('index'))
    }));
    yield put({ type: ACTIONS.HOME_CONTAINER_ADD_DATA_SUCCESS, payload });
  } catch(error) {
    yield put({ type: ACTIONS.HOME_CONTAINER_ADD_DATA_FAIL });
  }
}


export default function* saga() {
  yield takeLatest(ACTIONS.HOME_CONTAINER_ADD_DATA_REQUEST, addDataSaga);
}
