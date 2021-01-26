import React, { memo } from 'react';
import Content from 'components/Content';
import { TestData } from 'models';
import useStyles from '../styles';

interface Props {
  contents: Array<Array<TestData>>;
}

const defaultWidth = 160;
const defaultHeight = 66;

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
              style={{
                width: defaultWidth * (data.span?.row || 1),
                height: defaultHeight * (data.span?.col || 1),
                gridRowEnd: `span ${data.span?.col || 1}`,
                gridColumnEnd: `span ${data.span?.row || 1}`,
              }}
              key={`${i}-${j}`}
            />
          )),
        )}
      </div>
    </div>
  );
};

export default memo(ContentTable);
