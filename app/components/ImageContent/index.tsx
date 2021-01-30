import React, { memo } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TestContent } from 'models';
import { DISPLAY_MODES } from 'utils/contants';

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

interface Props {
  content: TestContent;
}

function ImageContent(props: Props) {
  const classes = useStyles();
  const { content } = props;
  const mode = content.displayMode
    ? content.displayMode.toLowerCase()
    : DISPLAY_MODES.NORMAL;
  return (
    <img
      src={content.data || ''}
      alt="img"
      className={`${classes.img} ${
        mode === DISPLAY_MODES.BLINK ? classes.animation : ''
      }`}
    />
  );
}

export default memo(ImageContent);
