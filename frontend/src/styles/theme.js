const themeColor = '#000';
const contrastColor = '#fff';
const fontBold = 'D-DIN-bold, san-serif';

export default {
  palette: {
    primary: {
      main: themeColor,
      contrastText: contrastColor
    },
    secondary: {
      main: contrastColor,
      contrastText: themeColor
    }
  },
  typography: {
    fontFamily: 'D-DIN, san-serif'
  },
  components: {
    MuiFormLabel: {
      styleOverrides: {
        root: {
          color: contrastColor
        }
      }
    },
    MuiSelect: {
      styleOverrides: {
        iconOutlined: {
          color: contrastColor
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: fontBold,
          height: 56,
          fontSize: 18
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          color: contrastColor,

          '& fieldset': {
            borderColor: contrastColor,
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: contrastColor,
          },
          '&.Mui-focused fieldset': {
            borderColor: contrastColor,
          }
        }
      }
    }
  }
}
