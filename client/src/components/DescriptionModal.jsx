import PropTypes from 'prop-types';
import {
  Box, Button, Modal, Typography,
} from '@mui/material';
import React from 'react';
import DescriptionIcon from '@mui/icons-material/Description';
import descriptionStyle from '../style/descriptionStyle';

function DescriptionModal({ description }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Button onClick={handleOpen}><DescriptionIcon sx={{ fontSize: '3em' }} /></Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={descriptionStyle}>
          <Typography variant="overline" component="h2">
            Descrição
          </Typography>
          <Typography variant="body1" sx={{ mt: 2 }}>
            {description}
          </Typography>
        </Box>
      </Modal>
    </>
  );
}

DescriptionModal.propTypes = {
  description: PropTypes.string.isRequired,
};

export default DescriptionModal;
