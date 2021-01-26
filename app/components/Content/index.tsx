import React, { memo } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { TestContent } from 'models';
import TextContent from 'components/TextContent';
import ImageContent from 'components/ImageContent';

const useStyles = makeStyles(() => ({
  wrapper: {
    borderBottom: 'solid 1px #6d6d6d',
    borderRight: 'solid 1px #6d6d6d',
    overflow: 'auto',
  },
}));

const contentTypes = {
  image: 'image',
  text: 'text',
};

interface Props {
  content: TestContent;
  style?: any;
}

function Content(props: Props) {
  const { content, style } = props;
  const classes = useStyles();

  const contentType = content.contentType.toLowerCase();

  return (
    <div className={classes.wrapper} style={style}>
      {contentType === contentTypes.image ? (
        <ImageContent content={content} />
      ) : (
        <TextContent content={content} />
      )}
    </div>
  );
}

export default memo(Content);
