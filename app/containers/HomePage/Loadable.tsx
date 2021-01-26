/**
 * Asynchronously loads the component for HomePage
 */

import * as React from 'react';
import loadable from 'utils/loadable';
import { CircularProgress } from '@material-ui/core';

export default loadable(() => import('./index'), {
  fallback: <CircularProgress />,
});
