import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import {
  Box, Button, Grid, Paper, Stack, Typography,
} from '@mui/material';
import StorefrontTwoToneIcon from '@mui/icons-material/StorefrontTwoTone';
import ProductPrice from './ProductPrice';
import NotFoundMsg from './NotFoundMsg';
import DescriptionModal from './DescriptionModal';
import ColorModeContext from '../context/ColorModeContext';

function ProductCard({
  src, title, description, price, href,
}) {
  const handleWebClick = () => {
    window.open(href, '_blank');
  };
  const { mode } = useContext(ColorModeContext);

  const bgColor = mode === 'light' ? 'darkgray' : 'lightgray';

  return (
    <Grid
      item
      md={8}
      xs={12}
      component={Paper}
      sx={{ display: 'flex', alignItems: 'center', backgroundColor: bgColor }}
    >
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        justifyContent="space-between"
        alignItems="center"
        width="100%"
        padding="10px"
      >
        <Box
          width="240px"
          height="240px"
          borderRadius="5px"
          margin="5px"
          display="flex"
          justifyContent="center"
          alignItems="center"
          sx={{ backgroundColor: 'white' }}
        >

          <Box
            maxWidth="100%"
            maxHeight="100%"
            sx={{ objectFit: 'cover', overflow: 'hidden' }}
            component="img"
            src={src}
            alt={title}
          />
        </Box>
        <Stack flexGrow={2}>
          <Stack display="flex" alignItems="center" width="90%" marginLeft="5%">
            <Typography variant="h5" color="black">{title}</Typography>
            {price ? (<ProductPrice price={price} />) : (<NotFoundMsg />)}
          </Stack>

          <Stack direction="row" justifyContent="space-between" width="100%">
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
