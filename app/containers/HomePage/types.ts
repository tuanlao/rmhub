import { ActionType } from 'typesafe-actions';
import * as actions from './actions';
import { ActionStatus } from 'types';
import { TestResponse } from 'models';

/* --- STATE --- */

interface HomeState {
  readonly data?: TestResponse;
  readonly loading: boolean;
  readonly actionStatus?: ActionStatus;
}

/* --- ACTIONS --- */
type AppActions = ActionType<typeof actions>;

/* --- EXPORTS --- */

type ContainerState = HomeState;
type ContainerActions = AppActions;

export { ContainerState, ContainerActions };
