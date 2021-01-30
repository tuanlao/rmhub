import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
  button: {
    margin: 10,
    height: 40,
    background: 'rgb(0, 82, 204)',
    borderRadius: 3,
    boxShadow: 'transparent 0px 0px 0px 2px',
    color: 'rgb(255, 255, 255)',
    '&:hover': {
      backgroundColor: 'rgba(0, 82, 204, 0.9)',
    },
  },
  urlInput: {
    '& .MuiInputBase-root': {
      height: 40,
    },
    minWidth: 250,
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
  dialogContent: {
    display: 'flex',
    alignItems: 'center',
  },
  table: {
    display: 'flex',
    borderTop: 'solid 1px #6d6d6d',
    borderLeft: 'solid 1px #6d6d6d',
    margin: 10,
    width: 'min-content',
    height: 'min-content',
  },
  tableColumn: {
    display: 'flex',
    flexDirection: 'column',
  },
  tableRow: {
    display: 'flex',
  },
  tableWrapper: {
    overflow: 'auto',
    width: '100%',
    height: '100%',
  },
  homeWrapper: {
    width: '100%',
    height: '100%',
  },
}));

export default useStyles;
