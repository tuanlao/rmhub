/* eslint-disable no-empty */
import { call, put, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import validate from 'utils/validate';
import { ResponseSchema } from 'schemas';
import ActionTypes from './constants';
import * as actions from './actions';
import messages from './messages';

export function* getTestData(action) {
  const url = action.payload;
  try {
    const result = yield call(request, url);
    if (validate(result, ResponseSchema)) {
      yield put(actions.getTestDataSuccess(result));
      return;
    }
  } catch (error) {}
  yield put(actions.getTestDataFailed());
  yield put(
    actions.setActionStatus({
      type: 'error',
      message: messages.error.defaultMessage,
    }),
  );
}

export default function* homePageSaga() {
  yield takeLatest(ActionTypes.GET_TEST_DATA, getTestData);
}
