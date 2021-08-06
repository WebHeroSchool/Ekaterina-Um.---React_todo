import React from 'react';
import styles from './Item.module.css';
import classnames from 'classnames';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

export default function Checkboxes({ value, isDone, onClickDone}) {

  return (
    <div className={styles.root}>
      <label>
        <Checkbox
          checked={isDone}
          inputProps={{ 'aria-label': 'uncontrolled-checkbox' }}
          onClick={() => onClickDone(isDone)}
        />
        <span className={
          classnames({
            [styles.done]: isDone,
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
