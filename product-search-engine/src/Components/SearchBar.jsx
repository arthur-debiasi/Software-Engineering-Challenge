import React from 'react';
function SearchBar({ handleChange, handleQueryBtn }) {
  return (
    <div>
      <select name='web' onChange={handleChange}>
        <option value='all'>Todas</option>
        <option value='meli'>Mercado Livre</option>
        <option value='buscape'>Buscapé</option>
      </select>

      <select name='category' onChange={handleChange}>
        <option value='geladeira'>Geladeira</option>
        <option value='tv'>TV</option>
        <option value='celular'>Celular</option>
      </select>

      <input type='text' name='query' id='query' onChange={handleChange} />

      <button type='button' onClick={handleQueryBtn}>
        Search
      </button>
    </div>
  );
}

export default SearchBar;
