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
      justifyContent="space-between"
      sx={{ bgcolor: '#F6D0E2' }}
    >
      <Box sx={{ ml: '400px', mt: '10px', mb: '10px' }}>
        <img src={logo} alt="" className="App-logo" />
      </Box>
      <Stack direction="row" sx={{ mr: '280px', my: 'auto' }}>
        <Link
          href="https://wa.me/message/R7ZLMJYDR47ZH1"
          rel="noopener"
          target="_blank"
        >
          <ButtonMain
            sx={{
              transition: 'all .2s ease-in-out',
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
            <InstagramIcon sx={{ fontSize: '40px' }} />
          </Link>
        </Icon>
        <Icon>
          <Link
            href="https://wa.me/message/R7ZLMJYDR47ZH1"
            rel="noopener"
            target="_blank"
          >
            <WhatsAppIcon sx={{ fontSize: '40px' }} />
          </Link>
        </Icon>
      </Stack>
    </Stack>
  );
};

export default Header;
