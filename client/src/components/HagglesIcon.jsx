import React from 'react';
import { Box } from '@mui/material';
import theme from '../style/theme';

const logoLight = '/img/hagglesLight.png';
const logoDark = '/img/hagglesDark.png';

function HagglesIcon() {
  return (
    <Box component="img" marginBottom={2} src={theme.palette.mode === 'dark' ? logoDark : logoLight} alt="" width="150px" />
  );
}

export default HagglesIcon;
