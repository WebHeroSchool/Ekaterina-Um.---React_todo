import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'left',
    marginBottom: '10px',
  },
  button: {
    color: '#F7D5EE',
    fontSize: '10px',
    height: '20px',
    minWidth: '5px',
    padding: '12px',
    "&:hover": {
      color: '#F28AD5',
    },
  },

}));

export default function Filter() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ButtonGroup variant="text" aria-label="text primary button group">
        <Button className={classes.button}>Все</Button>
        <Button className={classes.button}>Активные</Button>
        <Button className={classes.button}>Выполненые</Button>
      </ButtonGroup>
    </div>
  );
}
