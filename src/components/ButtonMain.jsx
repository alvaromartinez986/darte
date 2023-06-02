import React from 'react';
import { Button } from '@mui/material';

const ButtonMain = ({ sx, children }) => {
  return (
    <Button
      sx={{
        height: '50px',
        width: '180px',
        fontFamily: 'CareAround',
        m: 'auto',
        bgcolor: '#8F148F',
        color: 'white',
        borderRadius: '20px',
        fontSize: '16px',
        fontWeight: 'bold',
        '&:hover': {
          bgcolor: '#8F148F'
        },
        ...sx
      }}
    >
      {children}
    </Button>
  );
};

export default ButtonMain;
