import React from 'react';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';

export default (props) => {
  return (
    <div className='spacex-select'>
      <TextField
        fullWidth
        select
        label="Select"
        value={props.value}
        onChange={(e) => props.onChange(e.target.value)}
        color="secondary"
      >
        {props.options.map(option => (
          <MenuItem
            key={option.value}
            value={option.value}
          >
            {option.label}
          </MenuItem>
        ))}
      </TextField>
    </div>
  )
}
