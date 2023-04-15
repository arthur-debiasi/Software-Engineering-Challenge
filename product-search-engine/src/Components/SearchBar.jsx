import React from 'react';
import NoQuery from './NoQuery';
import { Button, FormControl, InputLabel, MenuItem, Select, Stack, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

function SearchBar({ handleChange, handleQueryBtn, noQuery }) {
  return (
    <Stack direction='row' alignItems='center'>

      <FormControl sx={{ minWidth: '150px' }}>
        <InputLabel id='web-label'>Web</InputLabel>
        <Select
          labelId='web-label'
          id='web-select'
          name='web'
          label='Web'SearchIcon
          onChange={handleChange}
        >
          <MenuItem value='all' defaultValue>
            Todas
          </MenuItem>
          <MenuItem value='meli'>Mercado Livre</MenuItem>
          <MenuItem value='buscape'>Buscape</MenuItem>
        </Select>
      </FormControl>

      <FormControl sx={{ minWidth: '150px' }}>
        <InputLabel id='category-label'>Categoria</InputLabel>
        <Select
          name='category'
          labelId='category-label'
          id='category-select'
          label='category'
          onChange={handleChange}
        >
          <MenuItem value='geladeira' defaultValue>Geladeira</MenuItem>
          <MenuItem value='tv'>TV</MenuItem>
          <MenuItem value='celular'>Celular</MenuItem>
        </Select>
      </FormControl>

      <TextField label='Pesquisa' type='text' name='query' id='query' onChange={handleChange} />

      <Button type='button' onClick={handleQueryBtn}>
        <SearchIcon />
      </Button>
      {noQuery && <NoQuery />}
    </Stack>
  );
}

export default SearchBar;
