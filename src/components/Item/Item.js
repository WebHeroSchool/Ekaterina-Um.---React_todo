import React from 'react';
import styles from './Item.module.css';
import classnames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

export default function Checkboxes({ value, isDone }) {
  const [checked, setChecked] = React.useState(true);
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <div className={styles.root}>
      <label><Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} />
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
