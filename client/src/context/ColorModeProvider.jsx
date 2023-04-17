import React, { useMemo, useCallback, useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material';
import ColorModeContext from './ColorModeContext';

function ColorModeProvider({ children }) {
  const [mode, setMode] = useState('dark');

  const colorMode = useCallback(() => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  }, []);

  const theme = React.useMemo(
    () => createTheme({
      palette: {
        mode,
        primary: {
          main: '#A87F10',
        },
      },
      typography: {
        priceValue: {
          fontSize: '3em',
          color: '#A87F10',
        },
      },
    }),
    [mode],
  );

  const contextValue = useMemo(() => ({ colorMode, mode, setMode }), [colorMode, mode, setMode]);

  return (
    <ColorModeContext.Provider value={contextValue}>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default ColorModeProvider;

ColorModeProvider.propTypes = {
  children: ColorModeProvider.element,
}.isRequired;
