import React from 'react';
import { Stack, Button } from '@mui/material';

export const MenuHeader = () => {
  return (
    <Stack
      sx={{ height: '60px', bgcolor: '#8F148F', width: '100%' }}
      direction="row"
      justifyContent={'center'}
      spacing={{ lg: 10, sm: 2 }}
    >
      <ButtonMenu>Combos</ButtonMenu>
      <ButtonMenu>Termos</ButtonMenu>
      <ButtonMenu>Vasos</ButtonMenu>
      <ButtonMenu>Cuadernos</ButtonMenu>
      <ButtonMenu>Publicidad</ButtonMenu>
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
      fontSize: { lg: '1rem', sm: '0.5rem' },
      textTransform: 'none',
      margin: 0,
      '&:hover': {
        bgcolor: '#8F148F',
        textDecoration: 'underline'
      }
    }}
  >
    {children}
  </Button>
);
