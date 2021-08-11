import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
//import PropTypes from 'prop-types';
import styles from './Footer.module.css';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
    backgroundColor: '#F7D5EE',
    fontSize: '10px',
    lineHeight: '10px',
    width: '150px',
  },
}));

export default function Footer({count}) {
  const classes = useStyles();

  return (<div className={styles.footer}>
    <span>Осталось дел: {count}</span>
    <div>
      <Button
        variant="contained"
        className={classes.button}
        startIcon={<DeleteIcon />}
      >
      Удалить выполненные дела
      </Button>
    </div>
  </div>);
}
