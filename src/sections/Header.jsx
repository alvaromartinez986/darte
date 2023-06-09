import React from 'react';

import { Box, Stack, Link } from '@mui/material';

import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import logo from '../assets/darteIcon.png';
import ButtonMain from '../components/ButtonMain';
import Icon from '../components/Icon';

const Header = () => {
  return (
    <Stack
      direction="row"
      justifyContent="center"
      sx={{ bgcolor: '#F6D0E2', minWidth: '100%' }}
      spacing={{ lg: 80, sm: 5 }}
    >
      <Box
        sx={{
          mt: '10px',
          mb: '10px',
          height: '30%',
          width: '30%'
        }}
      >
        <img src={logo} alt="Darte" className="App-logo" />
      </Box>
      <Stack
        direction="row"
        justifyContent="space-between"
        spacing={{ lg: 6, sm: 1 }}
      >
        <Link
          href="https://wa.me/message/R7ZLMJYDR47ZH1"
          rel="noopener"
          target="_blank"
          sx={{ m: 'auto' }}
        >
          <ButtonMain
            sx={{
              transition: 'all .2s ease-in-out',
              width: { lg: '180px', sm: '50px' },
              fontSize: { lg: '16px', sm: '12px' },
              '&:hover': {
                transform: 'scale(1.1)',
                bgcolor: '#8F148F'
              }
            }}
          >
            Contactenos
          </ButtonMain>
        </Link>
        <Icon>
          <Link
            href="https://www.instagram.com/d_arte_creandoconamor/"
            rel="noopener"
            target="_blank"
          >
            <InstagramIcon sx={{ fontSize: { lg: '2.5rem', sm: '1rem' } }} />
          </Link>
        </Icon>
        <Icon>
          <Link
            href="https://wa.me/message/R7ZLMJYDR47ZH1"
            rel="noopener"
            target="_blank"
          >
            <WhatsAppIcon sx={{ fontSize: { lg: '2.5rem', sm: '1rem' } }} />
          </Link>
        </Icon>
      </Stack>
    </Stack>
  );
};

export default Header;
