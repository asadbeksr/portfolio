// https://mui.com/material-ui/customization/theming/

import { createTheme } from '@mui/material'

export default createTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#fff',
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      light: '#0066ff',
      main: '#0044ff',
      // dark: will be calculated from palette.secondary.main,
      contrastText: '#ffcc00',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: 'red',
          '&:hover': {
            color: 'black',
          },
        },
      },
    },
  },
})
