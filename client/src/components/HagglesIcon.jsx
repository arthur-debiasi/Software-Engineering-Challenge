import React from 'react';
import { Box, useTheme } from '@mui/material';

const logoLight = '/img/hagglesLight.png';
const logoDark = '/img/hagglesDark.png';

function HagglesIcon() {
  const theme = useTheme();
  return (
    <Box
      component="img"
      marginBottom={2}
      src={theme.palette.mode === 'dark' ? logoDark : logoLight}
      alt=""
      width="150px"
    />
  );
}

export default HagglesIcon;
