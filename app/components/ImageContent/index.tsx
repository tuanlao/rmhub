import React, { memo } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { TestContent } from 'models';

const useStyles = makeStyles(() => ({
  animation: {
    animationName: '$showHide',
    animationIterationCount: 'infinite',
    animationDuration: '2000ms',
  },
  img: {
    width: 64,
    height: 64,
  },
  '@keyframes showHide': {
    '0%': {
      opacity: 1,
    },
    '50%': {
      opacity: 1,
    },
    '51%': {
      opacity: 0,
    },
    '100%': {
      opacity: 0,
    },
  },
}));

const displayModes = {
  blink: 'blink',
  normal: 'normal',
};

interface Props {
  content: TestContent;
}

function ImageContent(props: Props) {
  const classes = useStyles();
  const { content } = props;
  const mode = content.displayMode
    ? content.displayMode.toLowerCase()
    : displayModes.normal;
  return (
    <img
      src={content.data || ''}
      alt="img"
      className={`${classes.img} ${
        mode === displayModes.blink ? classes.animation : ''
      }`}
    />
  );
}

export default memo(ImageContent);
