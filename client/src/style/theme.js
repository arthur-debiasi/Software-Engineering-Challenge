import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#A87F10',
    },
  },
  typography: {
    priceValue: {
      fontSize: '2em',
      color: '#A87F10',
    },
  },
});

export default theme;
