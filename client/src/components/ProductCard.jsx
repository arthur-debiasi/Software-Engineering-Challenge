import PropTypes from 'prop-types';
import React from 'react';
import {
  Box,
  Button, Grid, Modal, Paper, Stack, Typography,
} from '@mui/material';
import DescriptionIcon from '@mui/icons-material/Description';
import StorefrontTwoToneIcon from '@mui/icons-material/StorefrontTwoTone';
import formatValues from '../utils/formatValues';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  minWidth: '320px',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  overflowY: 'scroll',
  maxHeight: '500px',
};

function ProductCard({
  src, title, description, price, href,
}) {
  const handleWebClick = () => {
    window.open(href, '_blank');
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Grid
      item
      md={6}
      xs={12}
      component={Paper}
      elevation={10}
      sx={
        {
          display: 'flex',
          // flexDirection: 'row',
          // flexWrap: 'wrap',
          alignItems: 'center',
        }
      }
    >
      <Box
        maxWidth="35%"
        borderRadius="5px"
        margin="5px"
        component="img"
        src={src}
        alt={title}
        className="product-image"
      />
      <Stack direction="row" flexWrap="wrap" justifyContent="end" alignItems="baseline">
        <Typography variant="h6">{title}</Typography>

        <Stack display="flex" alignItems="center" justifyContent="end" width="90%" marginLeft="5%">

          {price ? (
            <Typography
              variant="priceValue"
            >
              <strong>{formatValues(price)}</strong>

            </Typography>
          ) : (
            <Typography variant="caption" color="tomato">Este produto está indisponível no momento.</Typography>
          )}
        </Stack>
        <Button onClick={handleOpen}><DescriptionIcon /></Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography variant="caption" component="h2">
              Descrição
            </Typography>
            <Typography sx={{ mt: 2 }}>
              {description}
            </Typography>
          </Box>
        </Modal>
        <Button onClick={handleWebClick} color="secondary"><StorefrontTwoToneIcon color="primary" /></Button>
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
