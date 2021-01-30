import React, { memo, useState, useEffect } from 'react';
import Content from 'components/Content';
import EmptyCells from 'components/EmptyCells';
import { TestData } from 'models';
import useStyles from '../styles';

interface Props {
  contents: Array<Array<TestData>>;
}

const ContentTable = (props: Props) => {
  const classes = useStyles();
  const { contents } = props;
  const [maxCol, setMaxCol] = useState(0);
  const [maxRows, setMaxRows] = useState<number[]>([]);

  useEffect(() => {
    const newMaxRows: number[] = [];
    let newMaxCol = 0;
    contents.forEach((columnDatas) => {
      let sumCol = 0;
      let maxRow = 0;
      columnDatas.forEach((cellData) => {
        sumCol += cellData.span?.col || 1;
        maxRow = Math.max(maxRow, cellData.span?.row || 1);
      });
      newMaxCol = Math.max(newMaxCol, sumCol);
      newMaxRows.push(maxRow);
      setMaxRows(newMaxRows);
    });
    setMaxCol(newMaxCol);
  }, [contents]);

  const getColumnContent = (columnDatas: Array<TestData>, i: number) => {
    const colElements: any[] = [];
    let sumCol = 0;
    columnDatas.forEach((cellData, j) => {
      const col = cellData.span?.col || 1;
      const row = cellData.span?.row || 1;
      const emptyRows = maxRows[i] - row;
      const rowElements: any[] = [];
      sumCol += col;

      rowElements.push(
        <Content content={cellData.content} key={j} row={row} col={col} />,
      );
      if (emptyRows > 0) {
        rowElements.push(<EmptyCells key={`empty-${j}`} row={emptyRows} />);
      }
      colElements.push(
        <div className={classes.tableRow} key={j}>
          {rowElements}
        </div>,
      );
    });
    const emptyCol = maxCol - sumCol;
    if (emptyCol > 0) {
      colElements.push(
        <EmptyCells key={`empty-${i}`} row={maxRows[i]} col={emptyCol} />,
      );
    }
    return (
      <div className={classes.tableColumn} key={i}>
        {colElements}
      </div>
    );
  };

  return (
    <div className={classes.tableWrapper}>
      <div className={classes.table}>
        {contents.map((columnDatas, i) => getColumnContent(columnDatas, i))}
      </div>
    </div>
  );
};

export default memo(ContentTable);
