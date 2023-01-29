import React from 'react';
import Button from '@mui/material/Button';

export default (props) => {
  return (
    <div className='spacex-button'>
      <Button 
        variant="contained"
        onClick={props.onClick}
        fullWidth
        color="secondary"
        size="large"
      >
        {props.content}
      </Button>
    </div>
  )
}
