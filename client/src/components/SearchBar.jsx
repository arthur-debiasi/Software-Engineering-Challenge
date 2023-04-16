import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import {
  Button, FormControl, InputLabel, MenuItem, Select, Stack, TextField,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AppContext from '../context/AppContext';
import NoQuery from './NoQuery';

function SearchBar() {
  const { handleChange, handleQueryBtn, noQuery } = useContext(AppContext);
  return (
    <Stack direction="row" flexWrap="wrap" alignItems="center">
      <Stack direction="row">
        <FormControl sx={{ minWidth: '150px' }}>
          <InputLabel id="web-label">Web</InputLabel>
          <Select
            labelId="web-label"
            id="web-select"
            name="web"
            label="Web"
            onChange={handleChange}
            defaultValue="all"
          >
            <MenuItem value="all">
              Todas
            </MenuItem>
            <MenuItem value="meli">Mercado Livre</MenuItem>
            <MenuItem value="buscape">Buscape</MenuItem>
          </Select>
        </FormControl>

        <FormControl sx={{ minWidth: '150px' }}>
          <InputLabel id="category-label">Categoria</InputLabel>
          <Select
            name="category"
            labelId="category-label"
            id="category-select"
            label="category"
            onChange={handleChange}
            defaultValue="geladeira"
          >
            <MenuItem value="geladeira">Geladeira</MenuItem>
            <MenuItem value="tv">TV</MenuItem>
            <MenuItem value="celular">Celular</MenuItem>
          </Select>
        </FormControl>
      </Stack>

      <TextField label="Pesquisa" type="text" name="query" id="query" onChange={handleChange} />

      <Button type="button" onClick={handleQueryBtn}>
        <SearchIcon />
      </Button>
      {noQuery && <NoQuery />}
    </Stack>
  );
}

SearchBar.propTypes = {
  handleChange: PropTypes.func,
  handleQueryBtn: PropTypes.func,
  noQuery: PropTypes.bool,
}.isRequired;

export default SearchBar;
