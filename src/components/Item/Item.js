import React from 'react';
import PropTypes from 'prop-types';
import styles from './Item.module.css';
import classnames from 'classnames';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

class Checkboxes extends React.Component{
  componentDidMount(){
    console.log('componentDidMount');
  }
  compomentDidUpdate(){
    console.log('compomentDidUpdate');
  }
  componentWillUnmount(){
    console.log('componentWillUnmount');
  }

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
