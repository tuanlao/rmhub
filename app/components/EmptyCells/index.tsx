import React, { memo } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import EmptyCell from 'components/EmptyCell';

const useStyles = makeStyles(() => ({
  row: {
    display: 'flex',
    flexDirection: 'row',
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
  },
}));

interface Props {
  row?: number;
  col?: number;
}

function EmptyCells(props: Props) {
  const classes = useStyles();
  const { row = 1, col = 1 } = props;

  const getCells = () => {
    const result: any[] = [];
    const rowElements: any[] = [];

    for (let i = 0; i < row; i += 1) {
      rowElements.push(<EmptyCell key={i} />);
    }
    for (let i = 0; i < col; i += 1) {
      result.push(
        <div className={classes.row} key={i}>
          {rowElements}
        </div>,
      );
    }
    return result;
  };

  return <div className={classes.column}>{getCells()}</div>;
}

export default memo(EmptyCells);
