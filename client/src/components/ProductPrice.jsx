import PropTypes from 'prop-types';
import React from 'react';
import { Typography } from '@mui/material';
import formatValues from '../utils/formatValues';

function ProductPrice({ price }) {
  return (
    <Typography variant="priceValue">
      <strong>{formatValues(price)}</strong>
    </Typography>
  );
}

ProductPrice.propTypes = {
  price: PropTypes.string,
}.isRequired;

export default ProductPrice;
