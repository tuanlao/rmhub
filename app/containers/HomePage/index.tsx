import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { Backdrop, CircularProgress } from '@material-ui/core';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import Snackbar from 'components/Snackbar';
import DataInput from './views/DataInput';
import ContentTable from './views/ContentTable';

import useStyles from './styles';
import * as actions from './actions';
import reducer from './reducer';
import saga from './saga';
import makeHomePageDetail from './selectors';
import { CONTEXT } from './constants';

const stateSelector = createStructuredSelector({
  home: makeHomePageDetail(),
});

export default function HomePage() {
  useInjectReducer({ key: CONTEXT, reducer });
  useInjectSaga({ key: CONTEXT, saga });

  const dispatch = useDispatch();
  const classes = useStyles();
  const { home } = useSelector(stateSelector);

  return (
    <div className={classes.homeWrapper}>
      <DataInput
        getData={(url) => dispatch(actions.getTestData(url))}
        setTestData={(data) => dispatch(actions.getTestDataSuccess(data))}
        setActionStatus={(status) => dispatch(actions.setActionStatus(status))}
      />
      {home.data && <ContentTable contents={home.data.content} />}
      <Snackbar
        open={!!home.actionStatus}
        action={home.actionStatus}
        onClose={() => dispatch(actions.setActionStatus())}
      />
      <Backdrop className={classes.backdrop} open={home.loading}>
        <CircularProgress />
      </Backdrop>
    </div>
  );
}
