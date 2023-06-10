import React from 'react';
import IconButton from '@mui/material/IconButton';

const Icon = ({ sx, children }) => (
  <IconButton
    sx={{
      color: '#8F148F',
      my: 'auto',
      '&:hover': {
        backgroundColor: 'transparent'
      },
      ...sx
    }}
  >
    {children}
  </IconButton>
);
export default Icon;
