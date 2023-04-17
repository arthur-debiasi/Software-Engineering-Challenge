import PropTypes from 'prop-types';
import React from 'react';
import {
  Box, Button, Grid, Paper, Stack, Typography,
} from '@mui/material';
import StorefrontTwoToneIcon from '@mui/icons-material/StorefrontTwoTone';
import ProductPrice from './ProductPrice';
import NotFoundMsg from './NotFoundMsg';
import DescriptionModal from './DescriptionModal';

function ProductCard({
  src, title, description, price, href,
}) {
  const handleWebClick = () => {
    window.open(href, '_blank');
  };

  return (
    <Grid
      item
      md={6}
      xs={12}
      component={Paper}
      elevation={10}
      sx={{ display: 'flex', alignItems: 'center' }}
    >
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        justifyContent="space-between"
        alignItems="center"
        width="100%"
        padding="10px"
      >
        <Box
          maxWidth="80%"
          maxHeight="240px"
          borderRadius="5px"
          margin="5px"
          component="img"
          src={src}
          alt={title}
          className="product-image"
        />
        <Stack display="flex" justifyContent="space-between" spacing={2}>
          <Stack display="flex" alignItems="center" justifyContent="end" width="90%" marginLeft="5%">
            <Typography variant="h5">{title}</Typography>
            {price ? (<ProductPrice price={price} />) : (<NotFoundMsg />)}
          </Stack>

          <Stack direction="row" justifyContent="space-between">
            <DescriptionModal description={description} />
            <Button onClick={handleWebClick}>
              <StorefrontTwoToneIcon color="primary" sx={{ fontSize: '3em' }} />
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Grid>
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
