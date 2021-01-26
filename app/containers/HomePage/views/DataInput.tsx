/* eslint-disable no-empty */
import React, { memo, useState } from 'react';
import { useIntl } from 'react-intl';
import { Button } from '@material-ui/core';
import { CloudUpload, InsertLink } from '@material-ui/icons';
import { TestResponse } from 'models';
import { ActionStatus } from 'types';
import validate from 'utils/validate';
import { ResponseSchema } from 'schemas';
import InsertLinkDialog from './InsertLinkDialog';
import useStyles from '../styles';
import messages from '../messages';

interface Props {
  getData: (url: string) => void;
  setTestData: (obj: TestResponse) => void;
  setActionStatus: (status: ActionStatus) => void;
}

const DataInput = (props: Props) => {
  const classes = useStyles();
  const intl = useIntl();
  const [open, setOpen] = useState(false);

  const { getData, setTestData, setActionStatus } = props;

  const onGetData = (url) => {
    setOpen(false);
    if (url) {
      getData(url);
    }
  };

  const showFile = (e) => {
    const file = e.target.files[0];
    if (!file) {
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const text = reader.result;
        // @ts-ignore
        const obj = JSON.parse(text);
        if (validate(obj, ResponseSchema)) {
          setTestData(obj);
          return;
        }
      } catch (error) {}
      setActionStatus({
        type: 'error',
        message: intl.formatMessage(messages.error),
      });
    };
    reader.readAsText(e.target.files[0]);
  };

  return (
    <>
      <Button
        component="label"
        className={classes.button}
        startIcon={<CloudUpload />}
      >
        <input type="file" onChange={showFile} hidden />
        {intl.formatMessage(messages.upload)}
      </Button>
      <Button
        variant="contained"
        className={classes.button}
        startIcon={<InsertLink />}
        onClick={() => setOpen(true)}
      >
        {intl.formatMessage(messages.byUrl)}
      </Button>
      <InsertLinkDialog
        open={open}
        onClose={() => setOpen(false)}
        onConfirm={onGetData}
      />
    </>
  );
};

export default memo(DataInput);
