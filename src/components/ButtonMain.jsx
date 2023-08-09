import React from 'react';
import { Button } from '@mui/material';

const ButtonMain = ({ sx, onClick, children }) => {
  return (
    <Button
      variant="contained"
      onClick={onClick}
      sx={{
        height: '50px',
        width: '180px',
        m: 'auto',
        color: 'white',
        borderRadius: '20px',
        fontWeight: 'bold',
        ...sx
      }}
    >
      {children}
    </Button>
  );
};

export default ButtonMain;
