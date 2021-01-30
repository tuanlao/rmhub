import React, { memo } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CELL_HEIGHT, CELL_WIDTH } from 'utils/contants';

const useStyles = makeStyles(() => ({
  wrapper: {
    borderBottom: 'solid 1px #6d6d6d',
    borderRight: 'solid 1px #6d6d6d',
    width: CELL_WIDTH,
    height: CELL_HEIGHT,
    background: 'rgb(70 125 204)',
  },
}));

function EmptyCell() {
  const classes = useStyles();

  return <div className={classes.wrapper} />;
}

export default memo(EmptyCell);
