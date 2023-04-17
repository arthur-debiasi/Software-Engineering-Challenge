import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useContext } from 'react';
import ColorModeContext from '../context/ColorModeContext';

export default function ToggleColorMode() {
  const { colorMode, mode } = useContext(ColorModeContext);

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'background.default',
        color: 'text.primary',
        borderRadius: 1,
        p: 3,
      }}
    >
      <IconButton sx={{ ml: 1 }} onClick={colorMode} color="inherit">
        {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
    </Box>
  );
}
