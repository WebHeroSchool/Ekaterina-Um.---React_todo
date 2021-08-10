import React from 'react';
import PropTypes from 'prop-types';
import styles from './Item.module.css';
import classnames from 'classnames';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

export default function Checkboxes({ value, isDone, onClickDone, onClickDelete, id}) {

  return (
    <div className={styles.root}>
      <label>
        <Checkbox
          checked={isDone}
          inputProps={{ 'aria-label': 'uncontrolled-checkbox' }}
          onClick={() => onClickDone(id)}
        />
        <span className={
          classnames({
            [styles.done]: isDone,
          })}>
          {value}
        </span>
      </label>
      <span>
        <IconButton onClick={() => onClickDelete(id)}>
          <DeleteIcon />
        </IconButton>
      </span>
    </div>
  );
}

Checkboxes.defaultProps = {
  value: '',
  isDone: false
};

Checkboxes.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired
  ]),
  isDone: PropTypes.bool.isRequired,
  onClickDone: PropTypes.func.isRequired,
  onClickDelete: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired
};
