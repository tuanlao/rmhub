/* eslint-disable no-param-reassign */
import { produce, Draft } from 'immer';
import ActionTypes from './constants';
import { ContainerState, ContainerActions } from './types';

// The initial state of the App
export const initialState: ContainerState = {
  data: undefined,
  loading: false,
  actionStatus: undefined,
};

const homeReducer = produce(
  (draft: Draft<ContainerState>, action: ContainerActions) => {
    switch (action.type) {
      case ActionTypes.GET_TEST_DATA:
        draft.loading = true;
        return draft;
      case ActionTypes.GET_TEST_DATA_FAILED:
        draft.loading = false;
        return draft;
      case ActionTypes.GET_TEST_DATA_SUCCESS: {
        draft.data = action.payload;
        draft.loading = false;
        return draft;
      }
      case ActionTypes.SET_ACTION_STATUS:
        draft.actionStatus = action.payload;
        return draft;
      default:
        return draft;
    }
  },
  initialState,
);

export default homeReducer;
