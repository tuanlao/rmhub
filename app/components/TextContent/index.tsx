import React, { memo, useMemo } from 'react';
import Typography from '@material-ui/core/Typography';
import { TestContent } from 'models';

interface Props {
  content: TestContent;
}

function TextContent(props: Props) {
  const { content } = props;

  const style = useMemo(
    () => ({
      fontSize: content.fontSize,
      fontType: content.fontType || 'normal',
      width: '100%',
      height: '100%',
    }),
    [content],
  );

  return <Typography style={style}>{content.data}</Typography>;
}

export default memo(TextContent);
