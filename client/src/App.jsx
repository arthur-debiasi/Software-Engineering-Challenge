import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import AppProvider from './context/AppProvider';

import theme from './style/theme';
import AppRoutes from './routes/AppRoutes';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppProvider>
          <AppRoutes />
        </AppProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
