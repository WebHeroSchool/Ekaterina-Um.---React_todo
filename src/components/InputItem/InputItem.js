import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './InputItem.module.css';

class InputItem extends React.Component {
  state = {
    inputValue: '',
    isEmpty: false,
    isExist: false,
  };

  onButtonClick = () => {
    const itemArr = this.props.items.map(item => item.value);

    if (itemArr.includes(this.state.inputValue)){
      this.setState({
        inputValue: '',
        isExist: true,
      })
      setTimeout(() => {
        this.setState({
          isExist: false
        });
      }, 2000);;
    } else if (this.state.inputValue === ''){
      this.setState({
        isEmpty: true
      })
      setTimeout(() => {
        this.setState({
          isEmpty: false
        });
      }, 2000);
    } else {
      this.setState({
        inputValue: '',
        isEmpty: false,
        isExist: false,
      })
      this.props.onClickAdd(this.state.inputValue);
  };
}
  render() {
    const { inputValue, isEmpty, isExist } = this.state;

    return(
      <div className={styles.input}>
        <div className={classnames({
          [styles.['input__error']]: true,
          [styles.['input__error_empty']]: isEmpty,
          [styles.['input__error_exist']]: isExist
        })}>
          <input
            type='text'
            placeholder='Новое дело'
            className={styles.['input__wrap']}
            value={this.state.inputValue}
            onChange={event => this.setState({inputValue: event.target.value})}
          />
        </div>
        <img src='/img/btn_sub.svg'  alt='submit' className={styles.['btn-sub']} onClick={this.onButtonClick}/>
      </div>
    );
  };
};

InputItem.propTypes = {
  onClickAdd: PropTypes.func.isRequired,
  isEmpty: PropTypes.bool.isRequired
};

export default InputItem;
