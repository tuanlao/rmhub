import React, { memo, useState } from 'react';
import { useIntl } from 'react-intl';
import { Dialog, Button, TextField, DialogContent } from '@material-ui/core';
import useStyles from '../styles';
import messages from '../messages';

interface Props {
  onClose: () => void;
  open: boolean;
  onConfirm: (value: any) => void;
}

const InsertLinkDialog = (props: Props) => {
  const classes = useStyles();
  const intl = useIntl();
  const { onClose, open, onConfirm } = props;

  const [url, setUrl] = useState('');

  return (
    <Dialog onClose={onClose} open={open} maxWidth="lg">
      <DialogContent className={classes.dialogContent}>
        <TextField
          placeholder="url"
          variant="outlined"
          className={classes.urlInput}
          onChange={(e) => setUrl(e.target.value)}
        />
        <Button
          variant="contained"
          className={classes.button}
          onClick={() => onConfirm(url)}
        >
          {intl.formatMessage(messages.ok)}
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default memo(InsertLinkDialog);
