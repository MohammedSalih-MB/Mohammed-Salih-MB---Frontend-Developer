import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import theme from '@Styles/theme';

const muiTheme = createTheme(theme);

export default (props) => {
  return (
    <ThemeProvider theme={muiTheme}>
      {props.children}
    </ThemeProvider>
  );
}
