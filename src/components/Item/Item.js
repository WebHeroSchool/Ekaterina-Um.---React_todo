import React from 'react';
import classnames from 'classnames';
import Checkbox from '@material-ui/core/Checkbox';
import styles from './Item.module.css';

import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles((theme) => ({
  root:{
    display: 'flex',
    justifyContent: 'space-between',
  },
  task:{
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
}));

export default function Checkboxes({ value, isDone }) {
  const classes = useStyles();
  const [checked, setChecked] = React.useState(true);
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <div className={classes.root}>
      <label><Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} />
        <span className={
          classes.task,
          classnames({
            [styles.item]: true,
            [styles.done]: isDone
          })}>
          {value}
        </span>
      </label>
      <span>
        <IconButton>
          <DeleteIcon />
        </IconButton>
      </span>
    </div>
  );
}
