import { action } from 'typesafe-actions';
import { TestResponse } from 'models';
import { ActionStatus } from 'types';
import ActionTypes from './constants';

export const getTestData = (payload: string) =>
  action(ActionTypes.GET_TEST_DATA, payload);

export const getTestDataSuccess = (payload: TestResponse) =>
  action(ActionTypes.GET_TEST_DATA_SUCCESS, payload);

export const getTestDataFailed = () => action(ActionTypes.GET_TEST_DATA_FAILED);

export const setActionStatus = (payload?: ActionStatus) =>
  action(ActionTypes.SET_ACTION_STATUS, payload);
