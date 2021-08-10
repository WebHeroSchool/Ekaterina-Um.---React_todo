import React from 'react';
import PropTypes from 'prop-types';
import styles from './InputItem.module.css';
import { withStyles } from '@material-ui/core/styles';
//import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const CssTextField = withStyles({
  root: {
    '& label': {
      color: '#F7D5EE',
      fontSize: '12px',
    },
    '& label.Mui-focused': {
      color: '#F28AD5',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#F7D5EE',
        width: '340px',
        height: '40px',
        top: '2px',
      },
      '&:hover fieldset': {
        borderColor: '#F28AD5',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#F28AD5',
        borderWidth: '1px',
      },
    },
  },
})(TextField);

// const useStyles = makeStyles((theme) => ({
//   button: {
//     marginTop: '7px',
//     marginRight: '10px',
//     backgroundColor: '#F7D5EE',
//     fontSize: '10px',
//     lineHeight: '10px',
//     width: '120px',
//     height: '36px',
//   },
// }));

class CustomizedInputs extends React.Component {
  state = {
    inputValue: ''
  };

  onButtonClick = () => {
    if (this.state.inputValue !== '') {
      this.setState({
        inputValue: ''
      });
      this.props.onClickAdd(this.state.inputValue);
    } else {
      this.setState({
        helperText: 'Не оставляйте поле пустым',
        error: true
      });
    }
}

  render() {
    const { onClickAdd } = this.props;

    return(<div className={styles.root}>
      <form noValidate>
        <CssTextField
          className={styles.margin}
          label='Новое дело'
          variant="outlined"
          id="custom-css-outlined-input"
          value={this.state.inputValue}
          onChange={event =>
            this.setState({
              inputValue: event.target.value.toUpperCase(),
              helperText: '',
              error: false
            })
          }
          helperText={this.state.helperText}
          error={this.state.error}
        />
      </form>
      <Button
        variant="contained"
        className={styles.button}
        onClick={this.onButtonClick}
      >
        Добавить
      </Button>
    </div>);
  }
}

CustomizedInputs.propTypes = {
  onClickAdd: PropTypes.func.isRequired
};

export default CustomizedInputs;
