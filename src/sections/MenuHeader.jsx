import React from 'react';
import { Stack, Button } from '@mui/material';

export const MenuHeader = () => {
  return (
    <Stack
      sx={{ height: '60px', bgcolor: '#8F148F', px: '400px' }}
      direction="row"
      justifyContent={'space-around'}
    >
      <ButtonMenu>Camisetas</ButtonMenu>
      <ButtonMenu>Gorras</ButtonMenu>
      <ButtonMenu>Combos</ButtonMenu>
      <ButtonMenu>Vasos</ButtonMenu>
      <ButtonMenu>Caramaolas</ButtonMenu>
    </Stack>
  );
};

const ButtonMenu = ({ children }) => (
  <Button
    sx={{
      color: 'white',
      transition: 'text-underline-offset 400ms',
      fontFamily: 'CareAround',
      fontWeight: 'bold',
      fontSize: '20px',
      textTransform: 'none',
      '&:hover': {
        bgcolor: '#8F148F',
        textDecoration: 'underline'
      }
    }}
  >
    {children}
  </Button>
);
