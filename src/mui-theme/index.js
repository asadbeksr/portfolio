import { createTheme } from '@mui/material';

const breakpoints = {
  values: {
    xs: 0,
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1920,
  },
  up: (key) => `@media (min-width:${breakpoints.values[key]}px)`,
  down: (key) => `@media (max-width:${breakpoints.values[key]}px)`,
};

const theme = createTheme({

  // PALETTE //

  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#232323',
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

  // TYPOGRAPHY //

  typography: {
    fontFamily: 'Roboto, sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 'bold',
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 'bold',
    },
    body1: {
      fontSize: '1.25rem',
    },
  },

  // SPACING // 
  spacing: {
    unit: 8,
  },

  // BREAKPOINTS //

  breakpoints: {},

  // Z-INDEX //

  zIndex: {
    appBar: 1200,
    drawer: 1100,
  }, 

  // TRANSITIONS //

  transitions: {
    easing: {
      easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
      easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
      easeIn: "cubic-bezier(0.4, 0, 1, 1)",
      sharp: "cubic-bezier(0.4, 0, 0.6, 1)",
    },
    duration: {
      shortest: 150,
      shorter: 200,
      short: 250,
      standard: 300,
      complex: 375,
      enteringScreen: 225,
      leavingScreen: 195,
    },
  },

  // COMPONENTS //

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
    MuiContainer: {
      styleOverrides: {
        root: {
          [breakpoints.down('sm')]: {
            maxWidth: '100%',
            padding: '0 1rem',
          },
          [breakpoints.up('md')]: {
            maxWidth: '100%',
            padding: '0 2rem',
          },
          [breakpoints.up('lg')]: {
            maxWidth: '100%',
            padding: '0 4rem',
          },
          maxWidth: '100%',
          margin: '0 auto',
          padding: '0 4rem',
        },
      },
    },
  },

  
});

if (typeof window !== 'undefined') window.PALETTE = theme.palette

export default theme;

export const palette = {
  primary: theme.palette.primary.main,
  secondary: theme.palette.secondary.main,
};