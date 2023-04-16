import PropTypes from 'prop-types';
import React from 'react';
import { Button, Stack, Typography } from '@mui/material';

function ProductCard({
  src, title, description, price, href,
}) {
  const handleClick = () => {
    window.open(href, '_blank');
  };

  return (
    <Stack display="row" alignItems="center">
      <img src={src} alt={title} height="200px" />
      <Stack maxWidth="500px">
        <h3>{title}</h3>
        <Stack>
          <Typography>{description}</Typography>
        </Stack>
        <h4>{price}</h4>
        <Button onClick={handleClick}>Ir para a web</Button>
      </Stack>
    </Stack>
  );
}

ProductCard.propTypes = {
  description: PropTypes.string,
  href: PropTypes.string,
  price: PropTypes.string,
  src: PropTypes.string,
  title: PropTypes.string,
}.isRequired;

export default ProductCard;
