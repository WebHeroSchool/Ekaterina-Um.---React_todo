import React from 'react';
import TextField from '@material-ui/core/TextField';

const InputItem = () => (<span>
  <TextField
  id="standard-number"
  label="Новое дело"
  type="number"
  InputLabelProps={{
  shrink: true,
  }}
  />
</span>);

export default InputItem;
