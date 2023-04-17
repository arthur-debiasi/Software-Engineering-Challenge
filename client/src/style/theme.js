import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#A87F10',
    },
  },
  typography: {
    priceValue: {
      fontSize: '2.5em',
      color: 'rgb(238,192,67)',
    },
  },
});

export default theme;
