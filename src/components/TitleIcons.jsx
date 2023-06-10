import React from 'react';
import { Stack, Typography } from '@mui/material';
import SpaOutlinedIcon from '@mui/icons-material/SpaOutlined';

const TitleIcons = ({ text, sx }) => {
  return (
    <Stack sx={{ mx: 'auto' }} direction="row">
      <IconProducts sx={{ transform: 'rotate(-90deg)' }} />
      <Typography
        sx={{
          fontFamily: 'CareAround',
          fontSize: '55px',
          color: '#8F148F',
          '@media (max-width: 480px)': {
            fontSize: '24px'
          },
          ...sx
        }}
      >
        {text}
      </Typography>
      <IconProducts sx={{ transform: 'rotate(90deg)' }} />
    </Stack>
  );
};

const IconProducts = ({ sx }) => {
  return (
    <SpaOutlinedIcon
      sx={{
        fontSize: '24px',
        fontWeight: 'lighter',
        color: '#8F148F',
        mt: '5%',
        mx: '3px',
        opacity: '0.7',
        '@media (max-width: 480px)': {
          fontSize: '12px'
        },
        ...sx
      }}
    />
  );
};

export default TitleIcons;
