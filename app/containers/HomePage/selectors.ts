/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';
import { ApplicationRootState } from 'types';
import { initialState } from './reducer';
import { CONTEXT } from './constants';

const selectHomePageDomain = (state: ApplicationRootState) => {
  return state[CONTEXT] || initialState;
};

/**
 * Other specific selectors
 */

/**
 * Default selector used by ClassCreator
 */

const makeSelectHomePage = () =>
  createSelector(selectHomePageDomain, (substate) => {
    return substate;
  });

export default makeSelectHomePage;
export { selectHomePageDomain };
