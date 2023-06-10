import React from 'react';
import { Link } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import useMediaQuery from '@mui/material/useMediaQuery';

import Icon from '../components/Icon';

const IconContactWS = () => {
  const matches = useMediaQuery('(max-width: 480px)');

  return (
    <Icon
      sx={{
        position: 'fixed',
        width: '70px',
        bottom: matches ? 50 : 30,
        left: 30,
        bgcolor: '#25D366',
        m: 0,
        zIndex: 10,
        '&:hover': {
          backgroundColor: '#25D366'
        }
      }}
    >
      <Link
        href="https://wa.me/message/R7ZLMJYDR47ZH1"
        rel="noopener"
        target="_blank"
      >
        <WhatsAppIcon sx={{ fontSize: '40px', color: 'white' }} />
      </Link>
    </Icon>
  );
};

export default IconContactWS;
