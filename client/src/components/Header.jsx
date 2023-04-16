import React from 'react';
import { Stack } from '@mui/material';
import HagglesIcon from './HagglesIcon';
import SearchBar from './SearchBar';

function Header() {
  return (
    <Stack
      display="flex"
      flexDirection="row"
      flexWrap="wrap"
      justifyContent="space-around"
      alignItems="center"
    >
      <HagglesIcon />
      <SearchBar />
    </Stack>
  );
}

export default Header;
