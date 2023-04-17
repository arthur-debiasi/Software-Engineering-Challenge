import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import AppProvider from './context/AppProvider';
import AppRoutes from './routes/AppRoutes';
import ColorModeProvider from './context/ColorModeProvider';

function App() {
  return (
    <BrowserRouter>
      <ColorModeProvider>
        <CssBaseline />
        <AppProvider>
          <AppRoutes />
        </AppProvider>
      </ColorModeProvider>
    </BrowserRouter>
  );
}

export default App;
