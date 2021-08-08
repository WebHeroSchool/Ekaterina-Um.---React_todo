import React from 'react';
import styles from './InputItem.module.css';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

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
        width: '200px',
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

export default function CustomizedInputs() {

  return (
    <form noValidate>
      <CssTextField
        className={styles.margin}
        label="Новое дело"
        variant="outlined"
        id="custom-css-outlined-input"
      />
    </form>
  );
}
