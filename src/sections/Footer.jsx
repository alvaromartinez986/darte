import React from 'react';
import { Stack, Box, Typography, Link } from '@mui/material';
import logo from '../assets/darteIcon.png';

import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import Icon from '../components/Icon';

const Footer = () => {
  return (
    <Stack
      sx={{ minHeigth: '300px', bgcolor: '#8F148F', mt: '200px', pt: '10px' }}
      direction="row"
      justifyContent="center"
    >
      <Box sx={{ mb: '10px' }}>
        <img src={logo} alt="" className="App-logo-footer" />
        <Typography sx={{ color: 'white' }}>
          Creando cosas unicas para regalar con amor
        </Typography>
      </Box>
      <Stack sx={{ color: 'white', mt: '30px', ml: '140px', mr: '100px' }}>
        <Typography component="div" sx={{ fontWeight: 'bold' }}>
          CONTACTANOS
        </Typography>
        <Typography>Telefono: 3007631855</Typography>
        <Typography>Dirección: Tv 30# 20-46 Cali-Colombia</Typography>
      </Stack>
      <Stack direction="row">
        <Icon sx={{ color: 'white', mt: '30px' }}>
          <Link
            href="https://www.instagram.com/d_arte_creandoconamor/"
            rel="noopener"
            target="_blank"
          >
            <InstagramIcon sx={{ fontSize: '40px', color: 'white' }} />
          </Link>
        </Icon>
        <Icon sx={{ mt: '30px' }}>
          <Link
            href="https://wa.me/message/R7ZLMJYDR47ZH1"
            rel="noopener"
            target="_blank"
          >
            <WhatsAppIcon sx={{ fontSize: '40px', color: 'white' }} />
          </Link>
        </Icon>
        <Icon sx={{ mt: '30px' }}>
          <Link
            href="https://www.facebook.com/profile.php?id=100063773180304"
            rel="noopener"
            target="_blank"
          >
            <FacebookIcon sx={{ fontSize: '40px', color: 'white' }} />
          </Link>
        </Icon>
      </Stack>
    </Stack>
  );
};

export default Footer;
