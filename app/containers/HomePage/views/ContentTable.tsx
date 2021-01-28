import React, { memo } from 'react';
import Content from 'components/Content';
import { TestData } from 'models';
import useStyles from '../styles';

interface Props {
  contents: Array<Array<TestData>>;
}

const ContentTable = (props: Props) => {
  const classes = useStyles();
  const { contents } = props;

  return (
    <div className={classes.tableWrapper}>
      <div className={classes.table}>
        {contents.map((datas, i) =>
          datas.map((data, j) => (
            <Content
              content={data.content}
              key={`${i}-${j}`}
              row={data.span?.row || 1}
              col={data.span?.col || 1}
            />
          )),
        )}
      </div>
    </div>
  );
};

export default memo(ContentTable);
