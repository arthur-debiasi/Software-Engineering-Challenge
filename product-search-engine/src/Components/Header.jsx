import { Stack } from '@mui/material';
import HagglesIcon from './HagglesIcon';
import SearchBar from './SearchBar';

function Header({ handleChange, handleQueryBtn, noQuery }) {
  return (
    <Stack
      display='flex'
      direction='row'
      justifyContent='start'
      alignItems='center'
      spacing={2}
    >
      <HagglesIcon />
      <SearchBar
        handleChange={handleChange}
        handleQueryBtn={handleQueryBtn}
        noQuery={noQuery}
      />
    </Stack>
  );
}

export default Header;
