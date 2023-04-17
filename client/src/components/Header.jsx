import React from 'react';
import { Stack } from '@mui/material';
import HagglesIcon from './HagglesIcon';
import SearchBar from './SearchBar';
import ToggleColorMode from './ToggleColorMode';

function Header() {
  return (
    <Stack
      display="flex"
      direction="row"
      flexWrap="wrap"
      justifyContent="start"
      alignItems="center"
      marginBottom={6}
      width="100%"
      color="red"
      sx={{ marginBottom: '0px' }}
    >
      <HagglesIcon />
      <ToggleColorMode />
      <SearchBar />
    </Stack>
  );
}

export default Header;
