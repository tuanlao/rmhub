import React, { memo } from 'react';
import { SnackbarOrigin } from '@material-ui/core/Snackbar';
import { Snackbar as MuiSnackbar } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import { ActionStatus } from 'types';

interface Props {
  open: boolean;
  vertical?: 'top' | 'bottom';
  horizontal?: 'left' | 'right' | 'center';
  action?: ActionStatus;
  onClose?: () => void;
}

function Snackbar(props: Props) {
  const {
    open,
    vertical = 'top',
    horizontal = 'right',
    action,
    onClose,
  } = props;
  const [state, setState] = React.useState<SnackbarOrigin>({
    vertical: 'top',
    horizontal: 'right',
  });
  const [currentAction, setCurrentAction] = React.useState<ActionStatus>({
    type: 'success',
    message: '',
  });

  React.useEffect(() => {
    setState({
      vertical,
      horizontal,
    });
  }, [open]);

  React.useEffect(() => {
    if (action) {
      setCurrentAction(action);
    }
  }, [action]);

  return (
    <MuiSnackbar
      anchorOrigin={state}
      key={`${vertical},${horizontal}`}
      autoHideDuration={5000}
      open={open}
      onClose={onClose}
    >
      <Alert
        onClose={onClose}
        severity={currentAction?.type}
        elevation={6}
        variant="filled"
      >
        {action?.message}
      </Alert>
    </MuiSnackbar>
  );
}

export default memo(Snackbar);
