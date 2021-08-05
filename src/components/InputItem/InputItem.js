import React from 'react';
import styles from './InputItem.module.css';
import {
  alpha,
  ThemeProvider,
  withStyles,
  makeStyles,
  createTheme,
} from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import { green } from '@material-ui/core/colors';

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
