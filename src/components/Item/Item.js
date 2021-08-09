import React from 'react';
import styles from './Item.module.css';
import classnames from 'classnames';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

class Checkboxes extends React.Component{

  render(){

    const { value, isDone, onClickDone, onClickDelete, id } = this.props;

    return(
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
    )
  }
}

export default Checkboxes;

Checkboxes.defaultProps = {
  value: '',
  isDone: false
};
