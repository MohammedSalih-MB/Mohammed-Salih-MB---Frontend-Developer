import React from 'react';
import TextField from '@mui/material/TextField';

export default (props) => {
  return (
    <div className='spacex-input'>
      <TextField 
        label={props.label}
        variant="outlined"
        value={props.value}
        onChange={(e) => props.onChange(e.target.value)}
        fullWidth
        color='secondary'
      />
    </div>
  )
}
